import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import GithubIcon from "@/assets/github.svg?react";
import LinkedInIcon from "@/assets/linkedin.svg?react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from "react";

const skills = [
  "React",
  "NestJS",
  "TypeScript",
  "Angular",
  "C#",
  "Node.js",
  ".NET Framework",
  "Agile Methodology",
  "SQL",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "HTML",
  "Canvas",
  "Bootstrap",
  "Jest",
  "Postman",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  
  const [particles] = useState(() =>
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Hero Image (Bottom Layer) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/cello-tech.png"
          alt=""
          className="
            w-full h-full object-cover
            object-right
            opacity-90
            pointer-events-none
          "
        />

        {/* Optional vignette / fade for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/5 to-transparent" />
      </div>
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: p.left,
              top: p.top,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>


      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 layer-2">
          {/* Left Column - Text Content */}
          <div className="space-y-8 layer-2">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Full-Stack Software Developer <br/>
                & NestJS & React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                From <span className="text-primary glow-text">arpeggios to algorithms,</span>
                <br />
                crafting digital experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                creativity.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Leilah López — a full-stack software developer specializing in
                React, NestJS, and TypeScript. As a lifelong learner, educator, and an avid neuroscience consumer, 
                I love building user-experience centered, scalable, web
                applications that offer real solutions for clients.
              </p>
            </div>

            {/* CTAs */}
            {/* CONTACT ME */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                Contact Me 
                <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              
              {/* DOWNLOAD RESUME PDF */}
              <a
                href="/LLResume2026.pdf"
                download
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              <a
                href="https://github.com/leilahsmith"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/leilahsmith317/"
                className="p-2 rounded-full glass hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};