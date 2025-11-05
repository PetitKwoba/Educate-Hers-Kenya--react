# EducateHers Kenya — React Website

Modern, responsive website for EducateHers Kenya, built with React, TypeScript, and Vite.

## 🌟 Features

- **Modern UI**: Glass-morphism effects, smooth animations, gradient designs
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Complete Pages**: Home, Events, Donate, Volunteer, What We Do, Blog, Contact, Legal
- **Interactive Forms**: 
  - Contact form with reason dropdown and validation
  - Newsletter subscription in footer
  - Real-time form submission with Web3Forms integration
- **Event Management**: Filterable events with category tabs and detail modals
- **Donation Campaigns**: 6 active campaigns with progress tracking and M-Changa integration
- **Legal Pages**: Privacy Policy, Terms of Service, Cookie Policy

## 📄 Pages

- **Home** - Hero section with mission statement
- **Events** - Upcoming and past events with filtering and modals
- **Donate** - Active campaigns with M-Changa, M-PESA, and bank transfer options
- **Volunteer** - Volunteer opportunities and application
- **What We Do** - Programs and impact
- **Blog** - News and updates
- **Contact Us** - Contact form with email integration
- **Privacy Policy** - Data protection information
- **Terms of Service** - Terms and conditions
- **Cookie Policy** - Cookie usage and management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```powershell
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📧 Form Configuration

The contact form and newsletter are ready to use! See detailed setup:

- **Quick Start**: Read `FORMS_QUICKSTART.md`
- **Full Guide**: Read `FORMS_SETUP.md`

### Quick Setup (2 minutes)
1. Get free access key from [Web3Forms](https://web3forms.com)
2. Add to `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```
3. Restart dev server
4. Forms now send real emails! 📬

**Note**: Forms work in development mode without setup (submissions logged to console).

## 🛠 Tech Stack

- **React 18.2** - UI framework
- **TypeScript 5.2** - Type safety
- **Vite 5.1** - Build tool and dev server
- **React Router 6.14** - Client-side routing
- **Web3Forms** - Form submission service
- **Font Awesome 6.4** - Icons
- **CSS3** - Custom styling with animations

## 📁 Project Structure

```
src/
├── components/       # Reusable components (NavBar, Footer)
├── pages/           # Page components (Home, Events, Contact, etc.)
├── utils/           # Utility functions (formService)
└── index.css        # Global styles and design system

public/
└── assets/          # Images and static files
    ├── campaigns/   # Campaign images
    ├── events/      # Event images
    ├── partners/    # Partner logos
    └── team/        # Team photos
```

## 🎨 Design System

- **Primary Colors**: Teal (#00a9ce), Orange (#ff8c42)
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent spacing scale using CSS variables
- **Components**: Reusable cards, buttons, forms with hover effects
- **Animations**: Smooth transitions and keyframe animations
- **Responsive**: Mobile-first approach with breakpoints

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Required for form submissions
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

# Optional: Alternative services
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important**: Never commit `.env` file to Git (already in `.gitignore`)

## ✅ Features Checklist

- [x] Modern responsive design
- [x] Full navigation system
- [x] Event management with filters
- [x] Donation campaigns
- [x] Contact form with validation
- [x] Newsletter subscription
- [x] Email integration (Web3Forms)
- [x] Legal pages (Privacy, Terms, Cookies)
- [x] Mobile optimization
- [x] Accessible (ARIA labels, semantic HTML)
- [x] Loading states and error handling
- [x] Event detail modals
- [x] Social media integration
- [ ] Blog content
- [ ] Backend API integration (optional)
- [ ] Testing suite (optional)
- [ ] CI/CD pipeline (optional)

## 🤝 Contributing

This is a private repository for EducateHers Kenya. For contributions, please contact the development team.

## 📞 Contact

**EducateHers Kenya**
- Email: info@educateherskenya.net
- Phone: +254 703 257 597
- Location: Galleria Office and Business Park, Seminary Road, Karen, Nairobi

## 📝 License

© 2024 EducateHers Kenya. All rights reserved.

---

**Need help?** Check the documentation files:
- `FORMS_QUICKSTART.md` - Form setup quick start
- `FORMS_SETUP.md` - Detailed form configuration guide
