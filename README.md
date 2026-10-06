# Gurpreet Kaur — React + Node.js Portfolio

A polished, responsive portfolio website built to showcase frontend and backend skills.

## Tech stack
- React + Vite
- JavaScript (ES6+)
- Node.js + Express
- REST API
- CSS3 / responsive design
- Lucide React icons

## Project structure
```text
react-node-portfolio/
├── client/          # React frontend
│   ├── src/
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
├── server/          # Node.js + Express backend
│   ├── server.js
│   └── package.json
└── README.md
```

## Run locally
Open two terminals.

### 1. Backend
```bash
cd server
npm install
npm run dev
```
Runs at `http://localhost:5000`.

### 2. Frontend
```bash
cd client
npm install
npm run dev
```
Open the URL Vite prints, normally `http://localhost:5173`.

## API
`GET /api/health` — health check.

`POST /api/contact`
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello"
}
```

The demo contact endpoint logs messages to the server console. For production, connect it to an email provider or database.

## Before putting on your resume
1. Replace the sample email and LinkedIn/GitHub URLs in `client/src/main.jsx`.
2. Replace project descriptions with your actual projects.
3. Add your own `client/public/resume.pdf` if you want the CV button to work.
4. Deploy the frontend and backend separately and update the API URL in `main.jsx` from `http://localhost:5000` to your deployed backend URL.
5. Push the project to GitHub and add the deployed URL to your resume.

## Resume description
**Modern Responsive Portfolio Website | React.js, Node.js, Express.js**
Developed a responsive full-stack portfolio website using React and Node.js, featuring reusable components, responsive UI, REST API integration, interactive project cards, dark/light mode, and a working contact form.
