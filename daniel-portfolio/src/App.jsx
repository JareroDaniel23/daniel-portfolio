import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Database,
  Terminal,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-cyan-900">
      {/* Navigation Bar*/}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Daniel Jarero
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/*Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border-cyan-800 text-cyan-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Remote Work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building Scalable <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Enterprise Software
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm Daniel. A 18 y/o Full Stack Developer speacializing in
            <strong className="text-cyan-400"> Java Spring Boot</strong> and
            <strong className="text-cyan-400"> React</strong>. I build robust
            ERP systems and solve complex backend problems.
          </p>

          {/* Buttons */}

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition shadow-lg shadow-cyan-500/20 w-full md:w-auto"
            >
              View My Work
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/JareroDaniel23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/daniel-jarero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/*Stack Icons */}

          <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 grayscale hover:grayscale-0 transition-all duration-500 ">
            <div className="flex flex-col items-center gap-2 hover:text-cyan-400 transition">
              <Code2 size={32} />
              <span className="font-semibold">React.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-orange-400 transition">
              <Terminal size={32} />
              <span className="font-semibold">Java</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-green-400 transition">
              <div className="text-2xl font-bold">SB</div>
              <span className="font-semibold">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-blue-400 transition">
              <Database size={32} />
              <span className="font-semibold">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* More sections can be added here */}
{/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-cyan-400">02.</span> Featured Projects
            <div className="h-px bg-slate-700 flex-grow ml-4"></div>
          </h2>

          {/* PROYECTO 1: FLEET WASH MANAGER */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-20">
            

              <div className="w-full md:w-3/5 relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
              <div className="relative rounded-lg overflow-hidden border border-slate-700 aspect-video">

                <img 
                  src="/Dashboard.png" 
                  alt="Fleet Wash Manager Dashboard" 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5 md:-ml-10 z-10">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <p className="text-cyan-400 font-mono text-sm mb-2">Enterprise Resource Planning (ERP)</p>
                <h3 className="text-2xl font-bold mb-4">Fleet Wash Manager</h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  A proprietary full-stack ERP solution designed to streamline operations for <strong>commercial auto wash businesses</strong>. It manages inventory, sales, and staff efficiency with real-time dashboard analytics and automated reporting.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300 mb-6">
                  <span className="px-2 py-1 bg-slate-800 rounded text-cyan-400">Java Spring Boot</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-blue-400">React</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-green-400">PostgreSQL</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-purple-400">Tailwind</span>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href="https://github.com/JareroDaniel23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition">
                    <Github size={20} /> Source Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-cyan-400 font-mono mb-4">03. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10">
            I am actively looking for remote opportunities as a Full Stack Developer. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          
          <a href="mailto:danieljarero@gmail.com" className="inline-block px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition font-mono">
            Say Hello
          </a>

          <footer className="mt-20 text-slate-600 text-sm">
            <p>Designed & Built by Daniel Jarero</p>
            <p className="mt-2">© 2026</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
