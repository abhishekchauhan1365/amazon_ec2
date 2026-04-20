# amazon_ec2

Personal cinematic developer portfolio built completely from scratch using pure HTML, CSS, and JS (no frameworks, no templates). Designed with modern glassmorphic UI, animated gradients, and interactive effects. Deployed as a static website on AWS EC2 using Apache.

---

## 🌐 Live Website

http://13.205.110.91

---

## 🚀 How It Was Created

### Step 1: Core Setup

* Built using `index.html`, `style.css`, and `script.js`
* Used semantic HTML and responsive layout
* Integrated Google Fonts (Inter, Outfit)

### Step 2: UI & Styling

* Dark theme using CSS variables
* Glassmorphism using `backdrop-filter`
* Responsive layout using Flexbox & Grid
* Gradient background effects

### Step 3: Interactivity (JavaScript)

* Custom cursor glow effect
* Scroll spy navigation
* Responsive mobile menu
* Contact form validation with loading animation

### Step 4: Content Integration

* Added real project data:

  * Science Literacy
  * ChurnSense
  * Healthcare Web App

---

## ☁️ AWS EC2 Deployment (What I Did)

1. Launched EC2 instance (Amazon Linux)
2. Configured Security Group:

   * Port 22 (SSH)
   * Port 80 (HTTP)
3. Connected to instance using SSH
4. Installed Apache web server:

   ```bash
   sudo yum install httpd -y
   sudo systemctl start httpd
   sudo systemctl enable httpd
   ```
5. Transferred files using SCP:

   ```bash
   scp -i ec2_key.pem -r ec2 ec2-user@<public-ip>:/home/ec2-user/
   ```
6. Moved files to web directory:

   ```bash
   sudo cp -r ec2/* /var/www/html/
   ```
7. Restarted Apache:

   ```bash
   sudo systemctl restart httpd
   ```
8. Accessed website using public IP

---

## 📁 Project Structure

```
amazon_ec2/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ✅ Result

Successfully deployed a fully responsive and interactive portfolio website on AWS EC2, accessible via public IP.
