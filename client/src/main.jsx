import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BriefcaseBusiness, Check, Code2, Download,  Mail, Menu, Moon, Send, Server, Sparkles, Sun, X } from 'lucide-react';
import './styles.css';

const projects = [
  { title: 'ShopFlow', category: 'Full Stack', description: 'A responsive e-commerce experience with product browsing, filtering, cart interactions and a Node.js API.', tags: ['React', 'Node.js', 'REST API'], icon: '🛍️' },
  { title: 'TaskPilot', category: 'Productivity', description: 'A clean task management dashboard with status filters, progress tracking and reusable React components.', tags: ['React', 'JavaScript', 'CSS'], icon: '✓' },
  { title: 'InsightBoard', category: 'Dashboard', description: 'A modern analytics dashboard concept for presenting KPIs, trends and business metrics clearly.', tags: ['React', 'Charts', 'UI/UX'], icon: '◈' }
];

const skills = [
  ['React.js', 'Building reusable component-based interfaces'], ['JavaScript', 'Modern ES6+ development and DOM fundamentals'],
  ['Node.js', 'REST APIs and server-side JavaScript'], ['Express.js', 'Simple, maintainable backend APIs'],
  ['HTML & CSS', 'Responsive layouts and accessible UI'], ['Git & GitHub', 'Version control and project collaboration'],
  ['SQL', 'Relational data and practical querying'], ['REST APIs', 'Client-server integration and JSON']
];

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => document.documentElement.classList.toggle('dark', dark), [dark]);
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };

  async function submit(e) {
    e.preventDefault(); setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      setStatus(data.message);
      if (data.success) setForm({ name: '', email: '', message: '' });
    } catch { setStatus('Backend is not running. Start the Node.js server and try again.'); }
  }

  return <>
    <header className="nav"><div className="container nav-inner"><button className="brand" onClick={() => go('home')}>GK<span>.</span></button>
      <nav className={menu ? 'links open' : 'links'}>{['home','about','skills','projects','contact'].map(x => <button key={x} onClick={() => go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</nav>
      <div className="nav-actions"><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button><button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
    </div></header>

    <main id="home">
      <section className="hero container"><div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/> Open to opportunities</div><h1>Building clean, useful <span>digital experiences.</span></h1><p>I’m Gurpreet, a developer focused on React, Node.js and practical web applications. I enjoy turning ideas into simple, responsive products.</p><div className="hero-buttons"><button className="primary" onClick={() => go('projects')}>View my work <ArrowRight size={18}/></button><a className="secondary" href="/resume.pdf" download><Download size={17}/> Download CV</a></div><div className="socials"><a href="https://github.com" target="_blank"><span className="social-mark">GH</span> GitHub</a><a href="https://linkedin.com" target="_blank"><span className="social-mark">in</span> LinkedIn</a><a href="mailto:hello@example.com"><Mail size={19}/> Email</a></div></div><div className="hero-card"><div className="code-window"><div className="dots"><i></i><i></i><i></i></div><pre>{`const developer = {
  name: "Gurpreet Kaur",
  stack: ["React", "Node.js"],
  focus: "Web development",
  mindset: "Keep learning"
};`}</pre><div className="terminal"><span>➜</span> npm run build <b>✓ ready</b></div></div></div></section>

      <section className="stats container"><div><strong>3+</strong><span>Portfolio projects</span></div><div><strong>8</strong><span>Core technologies</span></div><div><strong>100%</strong><span>Responsive design</span></div><div><strong>24/7</strong><span>Learning mindset</span></div></section>

      <section id="about" className="section container"><div className="section-label">01 — About</div><div className="two-col"><div><h2>Curious about technology, serious about building.</h2></div><div><p className="lead">I’m building my career around modern web development, with a focus on creating interfaces that are easy to use and backends that are easy to maintain.</p><p>I believe strong fundamentals matter: clear JavaScript, reusable React components, clean APIs, responsive CSS and the ability to explain what I build.</p><div className="mini-list"><span><Check size={16}/> Clean, maintainable code</span><span><Check size={16}/> Mobile-first thinking</span><span><Check size={16}/> Continuous learning</span></div></div></div></section>

      <section id="skills" className="section section-soft"><div className="container"><div className="section-label">02 — Skills</div><h2>My technical toolkit.</h2><div className="skill-grid">{skills.map(([name,desc],i)=><article className="skill" key={name}><div className="skill-icon">{i%2===0?<Code2 size={20}/>:<Server size={20}/>}</div><div><h3>{name}</h3><p>{desc}</p></div></article>)}</div></div></section>

      <section id="projects" className="section container"><div className="section-label">03 — Projects</div><div className="section-head"><div><h2>Selected work.</h2><p>Projects designed to demonstrate frontend, backend and problem-solving skills.</p></div></div><div className="project-grid">{projects.map(p=><article className="project" key={p.title}><div className="project-top"><span className="project-icon">{p.icon}</span><span>{p.category}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button onClick={()=>alert('Demo placeholder — replace this with your deployed project URL.')}>View project <ArrowRight size={16}/></button></article>)}</div></section>

      <section id="contact" className="section contact-section"><div className="container"><div className="section-label">04 — Contact</div><div className="contact-grid"><div><h2>Let’s build something useful.</h2><p>Have an opportunity, project idea or just want to connect? Send me a message.</p><div className="contact-details"><a href="mailto:gk.94kaur2677@gmail.com"><Mail/> gk.94kaur2677@gmail.com</a><a href="https://linkedin.com" target="_blank"><span className="social-mark">in</span> LinkedIn profile</a></div></div><form onSubmit={submit}><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Message<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about your opportunity..."></textarea></label><button className="primary" type="submit"><Send size={17}/> Send message</button>{status && <p className="form-status">{status}</p>}</form></div></div></section>
    </main>
    <footer><div className="container footer-inner"><span>© 2026 Gurpreet Kaur</span><span>Built with React + Node.js</span></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
