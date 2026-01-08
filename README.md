# Pizza Ordering Site (Bootstrap Frontend)

This repository contains the code for a simple pizza ordering application.

## Project Structure
- **index.html**: The main frontend interface built using HTML, Bootstrap 5, and Vanilla JavaScript for cart management.
- **server.js**: A placeholder backend server file (Node.js/Express style) intended for deployment on platforms like Vercel or traditional hosting.

## Deployment Instructions (Vercel)

This project is structured to be deployed easily on Vercel:

1.  **Frontend Hosting:** Since the frontend is entirely static (HTML/CSS/JS referencing CDNs), it can be deployed directly as a static site on Vercel.
2.  **Backend Hosting:** If the backend logic (`server.js`) is intended to run as a serverless function, ensure Vercel detects the appropriate entry point (e.g., by placing it in an `/api` directory if using Next.js framework conventions, or configuring the build settings for a pure Node server deployment).

**Note on Live URLs:** As an automation agent, I cannot generate or provide actual live deployment URLs. You must trigger the deployment on your GitHub repository via Vercel integration after pushing this code.