# Form Configuration Guide

This guide explains how to configure the newsletter subscription and contact form to actually send emails.

## 🎯 Current Status

Both forms are configured and ready to work! They currently run in **development mode** where form submissions are logged to the console instead of sending emails. This allows you to test the functionality without any setup.

## 🚀 Quick Setup (Web3Forms - FREE)

Web3Forms is a free service that doesn't require any backend code. Perfect for static sites!

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (info@educateherskenya.net)
4. Verify your email
5. Copy your **Access Key**

### Step 2: Add to Your Project

1. Open the `.env` file in your project root
2. Add your access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Save the file
4. Restart your development server: `npm run dev`

### Step 3: Test It Out!

1. Go to the Contact page
2. Fill out and submit the form
3. Check your email inbox - you should receive the form submission!

**Note:** In development, you'll still see console logs. In production builds, only actual emails are sent.

## 📧 What Happens When Forms Are Submitted?

### Contact Form
- User fills out: name, email, reason, message
- Email sent to: **info@educateherskenya.net** (your Web3Forms email)
- Subject: "Contact Form: [reason selected]"
- Includes all form data
- User sees success message

### Newsletter Subscription
- User enters their email
- Email sent to: **info@educateherskenya.net** (your Web3Forms email)
- Subject: "New Newsletter Subscription"
- Includes subscriber email and timestamp
- User sees success message

## 🎨 Alternative Options

### Option 1: EmailJS (Free Tier)
[EmailJS](https://www.emailjs.com/) offers a free tier with 200 emails/month.

1. Sign up at https://www.emailjs.com
2. Create an email service (Gmail, Outlook, etc.)
3. Create email templates
4. Get your Service ID, Template ID, and Public Key
5. Add to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Uncomment EmailJS code in `src/utils/formService.ts`

### Option 2: Custom Backend
If you have your own backend API:

1. Set your API URL in `.env`:
   ```
   VITE_BACKEND_API_URL=https://your-api.com
   ```
2. Modify `src/utils/formService.ts` to use your API endpoints

### Option 3: Formspree (Free Tier)
[Formspree](https://formspree.io/) is another great option.

1. Sign up at https://formspree.io
2. Create a new form
3. Get your form endpoint
4. Update the form action URLs in the components

## 🔒 Security Notes

1. The `.env` file is already in `.gitignore` - your access keys are safe
2. Never commit your `.env` file to Git
3. Web3Forms access keys are safe to use in frontend code
4. All form data is transmitted over HTTPS

## 📝 Testing in Development

Without configuring Web3Forms:
- Forms still work!
- Submissions are logged to browser console
- User sees success messages
- No actual emails are sent

With Web3Forms configured:
- Forms work AND send real emails
- Submissions also logged to console
- User sees success messages
- Emails sent to your inbox

## 🎉 Features Already Implemented

✅ Form validation (email format, required fields)
✅ Loading states (spinner while submitting)
✅ Success messages
✅ Error handling
✅ Disabled state during submission
✅ Clear error messages
✅ Responsive design
✅ Accessible (ARIA labels, proper HTML)

## 🆘 Troubleshooting

### "Access key not configured" in console
- This is normal! Forms still work in development mode
- To send real emails, follow the Quick Setup steps above

### Form submits but no email received
1. Check your Web3Forms dashboard for submission logs
2. Verify your access key is correct in `.env`
3. Check your email spam folder
4. Verify you restarted the dev server after adding the key

### Getting error messages
1. Check browser console for detailed error logs
2. Verify your internet connection
3. Check Web3Forms status page
4. Try the alternative fallback (direct email link)

## 💡 Pro Tips

1. **Test in production**: Web3Forms works best in production builds
2. **Custom "Thank You" page**: Redirect users after submission
3. **Email notifications**: Set up forwarding to multiple team members
4. **Auto-responder**: Configure in Web3Forms to send confirmation emails
5. **Spam protection**: Web3Forms includes built-in spam filtering

## 📞 Need Help?

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: support@web3forms.com
- Your forms are already working in dev mode - just add the access key to go live!

---

**Ready to go live?** Just get your Web3Forms access key and add it to `.env`. It takes less than 2 minutes! 🚀
