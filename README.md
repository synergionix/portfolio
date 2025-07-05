# Synergionix Technologies - Portfolio Website

A modern, responsive portfolio website for Synergionix Technologies, showcasing comprehensive technology solutions including AIMS/ISMS compliance consulting, AI implementation, and business transformation services.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with subtle animations
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Contact Form**: Integrated contact form with email functionality
- **Client Marquee**: Animated client logos showcase
- **Case Studies**: Detailed project showcases with results and technologies
- **Team Profiles**: Professional team member presentations
- **Service Offerings**: Comprehensive service descriptions

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom animations
- **UI Components**: Shadcn/UI components
- **Build Tool**: Vite
- **Form Handling**: Formspree integration
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx           # Hero section with CTA
│   ├── About.tsx          # Company overview and values
│   ├── Services.tsx       # Service offerings
│   ├── CaseStudies.tsx    # Project case studies
│   ├── Team.tsx           # Team member profiles
│   ├── ClientMarquee.tsx  # Animated client logos
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with links and social media
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 error page
├── hooks/
│   └── use-toast.ts       # Toast notification hook
├── lib/
│   └── utils.ts          # Utility functions
├── index.css             # Global styles and CSS variables
└── main.tsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Update the contact form endpoint in `src/components/Contact.tsx`:
   ```typescript
   // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### GitHub Pages Deployment

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Create GitHub Actions workflow**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Configure base path** (if deploying to a subdirectory)
   
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   });
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import project from GitHub for instant deployment
- **Custom VPS**: Build locally and upload dist folder to your server

## 🔧 Customization

### Updating Company Information

1. **Logo and Favicon**
   - Replace logos in the `public/` directory
   - Update references in `index.html` and components

2. **Contact Information**
   - Update contact details in `src/components/Contact.tsx`
   - Modify footer information in `src/components/Footer.tsx`

3. **Services**
   - Edit service offerings in `src/components/Services.tsx`
   - Update case studies in `src/components/CaseStudies.tsx`

4. **Team Members**
   - Modify team information in `src/components/Team.tsx`
   - Replace team member photos

5. **Colors and Branding**
   - Update CSS variables in `src/index.css`
   - Modify Tailwind config in `tailwind.config.ts`

### Form Configuration

1. **Set up Formspree**
   - Create account at [Formspree.io](https://formspree.io)
   - Create a new form and get the form ID
   - Update the endpoint in `Contact.tsx`

2. **Alternative form services**
   - Netlify Forms
   - Getform.io
   - EmailJS
   - Custom backend API

## 📊 SEO Optimization

The website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, and Open Graph tags
- **Structured Data**: JSON-LD markup for organization information
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Image Alt Tags**: Descriptive alt text for all images
- **Page Speed**: Optimized images and code splitting

## 🔒 Security Features

- **Content Security Policy**: Configured headers for security
- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: Sanitized user inputs
- **HTTPS Enforcement**: Secure connections only

## 🎨 Design System

The website uses a consistent design system:

- **Typography**: Inter for body text, Playfair Display for headings
- **Colors**: Professional blue and gray palette
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Subtle hover effects and transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Synergionix Technologies** - Leading Technology Solutions & Consulting
