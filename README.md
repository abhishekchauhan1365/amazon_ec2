# AWS S3 Static Website Hosting with Versioning & Lifecycle Management

## 👤 Name

Abhishek Chauhan

## 🎓 Registration Number

12305863

---

## 🌐 Deployed Website (S3 URL)

http://abhishek-portfolio-s3-2026.s3-website.ap-south-1.amazonaws.com/

---

## 📌 Objective

To host a static website using Amazon S3 and demonstrate versioning and lifecycle management for storage optimization.

---

## 🪣 S3 Bucket Setup

* Created a globally unique S3 bucket
* Disabled block public access
* Uploaded static website files (HTML, CSS, JS)

---

## 🌍 Static Website Hosting

* Enabled static website hosting
* Set `index.html` as the entry point
* Accessed website via S3 endpoint

---

## 🔁 Versioning

* Enabled versioning on the bucket
* Uploaded multiple versions of `index.html`
* Verified versions using **“Show versions”**

---

## ♻️ Lifecycle Rules

* Transitioned current objects to **Standard-IA after 30 days**
* Deleted noncurrent versions after **30 days**

---

## 📁 Project Structure

```id="p3f8tk"
index.html  
style.css  
script.js  
README.md  
```

---

## 📸 Screenshots

### S3 Bucket (Files Uploaded)

<img width="1919" height="894" alt="image" src="https://github.com/user-attachments/assets/c986cfbe-845e-4f11-aad4-2beae3af11ae" />


### Versioning (Multiple Versions Visible)

<img width="1919" height="886" alt="image" src="https://github.com/user-attachments/assets/36e7d2ba-bd82-4772-b157-953959c65ca7" />


### Lifecycle Rule Configuration

<img width="1919" height="891" alt="image" src="https://github.com/user-attachments/assets/869b0e54-0c28-446a-8d7f-38a8c0fea1e6" />


### Website Running

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/1b3f67b4-58a0-41f5-a477-3fc6a661bdb7" />


---

## ⚠️ Challenges Faced

* Configuring public access without causing permission errors
* Understanding difference between current and noncurrent versions in lifecycle rules
* Verifying versioning through multiple uploads

---

## ✅ Result

Successfully hosted a static website on Amazon S3 with versioning and lifecycle rules implemented.
