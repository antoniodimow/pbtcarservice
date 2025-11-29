# Email Setup with Gmail and Nodemailer

Your booking system now uses **Nodemailer with Gmail SMTP** to send automated emails. This is more flexible than Resend and works with any Gmail account!

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Gmail App Password

**Important:** You need a Gmail **App Password**, not your regular Gmail password!

1. **Go to your Google Account:** https://myaccount.google.com/
2. **Enable 2-Step Verification** (required for App Passwords):
   - Go to Security → 2-Step Verification
   - Follow the prompts to enable it
3. **Create an App Password:**
   - Go to Security → 2-Step Verification → App passwords
   - Or visit directly: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it: "PBT Car Service Website"
   - Click **Generate**
   - Copy the 16-character password (it looks like: `abcd efgh ijkl mnop`)

### Step 2: Configure Environment Variables

#### Local Development (.env.local):

Create or update your `.env.local` file:

```bash
# Gmail SMTP Configuration
EMAIL_USER=pbtcarservice@gmail.com
EMAIL_APP_PASSWORD=your_16_character_app_password_here
```

**Example:**
```bash
EMAIL_USER=pbtcarservice@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

#### Production (Vercel):

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:
   - **Key:** `EMAIL_USER`  
     **Value:** `pbtcarservice@gmail.com`
   - **Key:** `EMAIL_APP_PASSWORD`  
     **Value:** Your 16-character app password

4. Redeploy your site for changes to take effect

---

## 🧪 Testing Your Setup

### Test the Email Service:

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Visit the test endpoint:**
   ```
   http://localhost:3000/api/test-resend
   ```

3. **Check for success:**
   - You should see: `"success": true`
   - Check `pbtcarservice@gmail.com` for the test email

### Test a Real Booking:

1. Go to: `http://localhost:3000/booking`
2. Fill out the form
3. Submit
4. Check both emails:
   - Business email (pbtcarservice@gmail.com) should receive booking details
   - Customer email should receive confirmation

---

## 📧 How It Works

### Emails Sent:

1. **To Business Owner:**
   - Email: `pbtcarservice@gmail.com`
   - Subject: "New Reservation Request from [Customer Name]"
   - Contains: Full booking details

2. **To Customer:**
   - Email: Whatever the customer enters in the form
   - Subject: "Reservation Confirmation - Palm Beach Transportation Services"
   - Contains: Booking confirmation and contact info

### Email Sender:

All emails appear to come from:
```
PBT Car Service <pbtcarservice@gmail.com>
```

---

## 🔧 Using Different Email Accounts

### For Anyone Else to Use Their Gmail:

They just need to:

1. Get their own Gmail App Password (see Step 1 above)
2. Update the environment variables:
   ```bash
   EMAIL_USER=their_email@gmail.com
   EMAIL_APP_PASSWORD=their_app_password
   ```
3. Update the business recipient email in:
   - `app/api/booking/route.ts` (line ~107)
   - `app/api/test-resend/route.ts` (line ~21)

**That's it!** No domain verification or API restrictions.

---

## 🎯 Advantages Over Resend

✅ **No Domain Restrictions** - Works with any Gmail account  
✅ **No Recipient Restrictions** - Send to any email address  
✅ **Free** - Gmail allows 500 emails/day for free  
✅ **Instant Setup** - No account verification delays  
✅ **Easy Handoff** - Anyone can use their own Gmail  
✅ **Reliable** - Gmail's infrastructure  

---

## 🚨 Troubleshooting

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"

**Solutions:**
1. Make sure you're using an **App Password**, not your regular password
2. Verify 2-Step Verification is enabled
3. Remove any spaces from the app password
4. Try generating a new app password

### Error: "Email service not configured"

**Solutions:**
1. Check `.env.local` file exists in project root
2. Verify variable names are exactly: `EMAIL_USER` and `EMAIL_APP_PASSWORD`
3. Restart your dev server after adding variables
4. On Vercel: Check environment variables are set and redeploy

### Emails Not Arriving:

1. Check Gmail Spam folder
2. Verify the email address in the code matches your Gmail
3. Test with the `/api/test-resend` endpoint first
4. Check Gmail's "Sent" folder to confirm it was sent

### "Less secure app access" Message:

- You don't need to enable "Less secure app access"
- Use App Passwords instead (more secure)

---

## 📊 Email Limits

Gmail free tier allows:
- **500 emails per day**
- Perfect for small to medium booking volumes
- If you need more, consider:
  - Google Workspace (2000 emails/day)
  - SendGrid (100 emails/day free)
  - AWS SES (pay as you go)

---

## 🔐 Security Notes

- ✅ App Passwords are more secure than regular passwords
- ✅ Never commit `.env.local` to git (already in `.gitignore`)
- ✅ Each team member should use their own App Password
- ✅ You can revoke App Passwords anytime from Google Account settings

---

## 📝 Files Modified

- `lib/email.ts` - Email utility with Nodemailer configuration
- `app/api/booking/route.ts` - Booking form submission handler
- `app/api/test-resend/route.ts` - Email testing endpoint
- `.env.example` - Updated environment variable examples

---

## 🆘 Need Help?

If you're still having issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Test with the `/api/test-resend` endpoint
4. Make sure 2-Step Verification is enabled on your Gmail account

**Common Gmail App Password URL:**  
https://myaccount.google.com/apppasswords
