# amazon_ec2

Personal cinematic developer portfolio built completely from scratch using pure HTML, CSS, and JS (no frameworks, no templates). Designed with highly interactive modern glassmorphic aesthetics, animated gradients, and scroll-spying logic. Ready to be deployed as static files directly to an AWS EC2 instance.

## 🚀 How It Was Created (Step-by-Step)

This project was built iteratively to match high-end "Awwwards-level" cinematic design standards while remaining lightweight enough to be served statically from an Apache web server on AWS EC2. Here is exactly what was done:

### Step 1: Core Foundation & Static Files Setup
- Created three core files: `index.html`, `style.css`, and `script.js`.
- Configured meta tags and semantic HTML5 scaffolding to ensure accessibility and proper viewport scaling across devices.
- Linked Google Fonts (**Inter** for readability, **Outfit** for striking headers).

### Step 2: Cinematic UI & Dark Mode Styling (CSS)
- Established a rich dark-mode design system utilizing custom CSS variables (`:root`).
- Implemented background mesh gradients to give the site an atmospheric "SaaS dashboard" glow.
- Designed reusable `glass-panel` utility classes using `backdrop-filter: blur(12px)` for semi-transparent overlay cards.
- Built a fully responsive **CSS Grid** layout for the project showcase and a **Flexbox** layout for the navigation and hero sections.

### Step 3: Interactive Features & Animations (JavaScript)
- **Custom Cursor Glow**: Implemented an interactive light radial-gradient that follows the user's mouse and expands dynamically when hovering over buttons, cards, and input fields.
- **Scroll Spying**: Wrote dynamic DOM logic to update the `active` state on the sticky navigation bar based on which section the user is actively viewing.
- **Mobile Menu**: Built a responsive hamburger menu toggler for seamless viewing on smaller screens.
- **Form Validation (Fake Loading State)**: Scripted a clean frontend validator for the Contact form. Checks for empty fields or invalid email patterns, then displays a spinning loader for 1.5 seconds before simulating a successful message transmission.

### Step 4: Data Import
- Fetched production-level data from the existing live portfolio (`portfolio-coral-two-b0w1doh8q4.vercel.app`).
- Accurately ported over three featured projects (**Science Literacy**, **ChurnSense**, **Healthcare Web App**), embedding their exact tech stacks, tags, and descriptive paragraphs into the newly styled cinematic grid.

### Step 5: Version Control & GitHub Initialization
- Created a fresh `.git` repository locally.
- Added all files (`html`, `css`, `js`, `README.md`) and pushed them precisely to the `main` branch of `abhishekchauhan1365/amazon_ec2`.

---

## 🛠 Next Steps: AWS EC2 Deployment
Once the instance is live, here is how the site will be deployed using Apache:
1. Connect to EC2 instance (Ubuntu/Amazon Linux).
2. Install Apache: `sudo yum install httpd` or `sudo apt install apache2`.
3. Switch directories: `cd /var/www/html`.
4. Pull this repository directly into the public folder: `sudo git clone https://github.com/abhishekchauhan1365/amazon_ec2.git .`
5. Visit the EC2 instance's **Public IP address** in browser.
