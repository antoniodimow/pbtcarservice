"use client";

import { useEffect, useRef, useState } from "react";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
}

export function AddressAutocomplete({
  value,
  onChange,
  placeholder = "Enter address",
  required = false,
  id,
  name,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for Google Maps to be loaded by the Script component in the page
    const checkGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkGoogleMaps()) {
      return;
    }

    // Poll every 100ms until Google Maps is available
    const checkInterval = setInterval(() => {
      if (checkGoogleMaps()) {
        clearInterval(checkInterval);
      }
    }, 100);

    // Cleanup interval on unmount
    return () => clearInterval(checkInterval);
  }, []);

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    // Initialize autocomplete
    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' }, // Restrict to US addresses
      fields: ['formatted_address', 'address_components', 'geometry'],
    });

    // Handle place selection
    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.formatted_address) {
        onChange(place.formatted_address);
      }
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [isLoaded, onChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
      autoComplete="off"
    />
  );
}
