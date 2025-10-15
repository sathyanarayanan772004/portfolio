# Email Setup Instructions

Your contact form is now configured to send emails using Web3Forms, a free service that doesn't require a backend.

## Setup Steps

### 1. Get Your Free Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address: `727822tuad047@skct.edu.in`
3. Click "Get Access Key"
4. Check your email and copy the access key

### 2. Add the Access Key to Your Code

Open `src/components/Contact.tsx` and replace this line:

```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

With your actual access key:

```typescript
access_key: 'your-actual-access-key-here',
```

### 3. Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your inbox at `727822tuad047@skct.edu.in`

## What You'll Receive

When someone submits the contact form, you'll receive an email with:
- **Subject:** "Portfolio Contact: Message from [Their Name]"
- **From:** Portfolio Contact Form
- **Content:** Their name, email, and message

## Features

- Free service (no credit card required)
- No backend needed
- Spam protection included
- Email notifications to your inbox
- Secure HTTPS API
- 250 free submissions per month

## Alternative: Use Environment Variable (Recommended)

For better security, you can store the access key in an environment variable:

1. Add to `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-here
```

2. Update the code in `Contact.tsx`:
```typescript
access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
```

## Troubleshooting

If emails aren't being received:
1. Check your spam folder
2. Verify the access key is correct
3. Ensure your email address is verified with Web3Forms
4. Check the browser console for any errors

## Need Help?

Visit [Web3Forms Documentation](https://docs.web3forms.com/) for more information.
