"use client";

import { useState, useRef, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function TimePicker({ value, onChange, placeholder = "Select time", required = false }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<string>("12");
  const [selectedMinute, setSelectedMinute] = useState<string>("00");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("PM");

  const containerRef = useRef<HTMLDivElement>(null);

  // Generate hours (1-12)
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  // Generate minutes (00, 05, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55)
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

  // AM/PM
  const periods = ["AM", "PM"];

  // Parse existing value
  useEffect(() => {
    if (value) {
      const match = value.match(/^(\d+):(\d+)\s*(AM|PM)$/);
      if (match) {
        setSelectedHour(match[1]);
        setSelectedMinute(match[2]);
        setSelectedPeriod(match[3]);
      }
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleConfirm = () => {
    if (selectedHour && selectedMinute && selectedPeriod) {
      const formattedTime = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
      onChange(formattedTime);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setSelectedHour("");
    setSelectedMinute("");
    setSelectedPeriod("AM");
    onChange("");
  };

  const handleNow = () => {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const period = hour >= 12 ? "PM" : "AM";

    if (hour === 0) hour = 12;
    else if (hour > 12) hour = hour - 12;

    setSelectedHour(hour.toString());
    setSelectedMinute(minute);
    setSelectedPeriod(period);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Input Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2 border rounded-lg bg-white cursor-pointer flex items-center justify-between transition-all ${
          isOpen
            ? 'border-gold ring-2 ring-gold/20'
            : 'border-gray-300 hover:border-gold'
        }`}
      >
        <span className={value ? 'text-charcoal' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <Clock className="h-4 w-4 text-gray-400" />
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute z-[9999] mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-2xl w-full min-w-[320px]">
          <div onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="px-4 py-3 border-b-2 border-gray-200 flex items-center justify-between bg-gray-50">
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleNow();
                }}
                className="text-sm text-gold hover:underline font-semibold"
              >
                Now
              </button>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleClear();
                }}
                className="text-sm text-gray-600 hover:underline"
              >
                Clear
              </button>
            </div>

            {/* Time Columns */}
            <div className="flex">
              {/* Hour Column */}
              <div className="flex-1 border-r-2 border-gray-200">
                <div className="text-xs text-gray-600 text-center py-2 font-bold border-b border-gray-200 bg-gray-50">
                  Hour
                </div>
                <div className="h-[180px] overflow-y-auto">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedHour(hour);
                      }}
                      className={`h-9 flex items-center justify-center cursor-pointer text-base select-none transition-all ${
                        selectedHour === hour
                          ? 'border-2 border-gold text-gold font-bold bg-gold/5'
                          : 'border-2 border-transparent hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      {hour}
                    </div>
                  ))}
                </div>
              </div>

              {/* Minute Column */}
              <div className="flex-1 border-r-2 border-gray-200">
                <div className="text-xs text-gray-600 text-center py-2 font-bold border-b border-gray-200 bg-gray-50">
                  Minute
                </div>
                <div className="h-[180px] overflow-y-auto">
                  {minutes.map((minute) => (
                    <div
                      key={minute}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedMinute(minute);
                      }}
                      className={`h-9 flex items-center justify-center cursor-pointer text-base select-none transition-all ${
                        selectedMinute === minute
                          ? 'border-2 border-gold text-gold font-bold bg-gold/5'
                          : 'border-2 border-transparent hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      {minute}
                    </div>
                  ))}
                </div>
              </div>

              {/* AM/PM Column */}
              <div className="flex-1">
                <div className="text-xs text-gray-600 text-center py-2 font-bold border-b border-gray-200 bg-gray-50">
                  Period
                </div>
                <div className="h-[180px] overflow-y-auto">
                  {periods.map((period) => (
                    <div
                      key={period}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedPeriod(period);
                      }}
                      className={`h-9 flex items-center justify-center cursor-pointer text-base select-none transition-all ${
                        selectedPeriod === period
                          ? 'border-2 border-gold text-gold font-bold bg-gold/5'
                          : 'border-2 border-transparent hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      {period}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t-2 border-gray-200 flex justify-end gap-3 bg-gray-50">
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
                className="px-5 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  console.log('OK clicked', selectedHour, selectedMinute, selectedPeriod);
                  handleConfirm();
                }}
                className="px-5 py-2 text-sm bg-gold text-primary rounded hover:bg-gold/90 font-bold shadow-sm"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
