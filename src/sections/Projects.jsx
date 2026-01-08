import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import GithubIcon from "@/assets/github.svg?react";
import Divider from '@mui/material/Divider';


const projects = [
  {
    title: "AlfredDB",
    description:
      "A full-stack web application I designed and built to modernize device claims and repair workflows within a K–12 school district. Created in response to real operational pain points, AlfredDB centralizes student device claims, repair tracking, invoicing status, and communication across technology staff, secretaries, and treasurers. Built with React, NestJS, and MariaDB, the platform integrates with Active Directory and PowerSchool APIs to pull real-time student data, enforce role-based access control, and reduce manual data entry. AlfredDB automates key processes such as claim creation, parent notification drafts, status tracking, and audit logging, helping teams work more efficiently while maintaining accuracy and accountability.",
    image: "/projects/AlfredScreenshot.png",
    tags: ["React", "Typescript", "NestJS", "Node"],
    github: null,
    link: null,
    githubNote:
      "Unfortunately, this is a private repository due to the sensitive nature of the data involved. Please contact owner for inquiries.",
    linkNote:
      "Unfortunately, this application is run on a closed and private network. Please contact owner for inquiries.",
  },
  {
    title: "Tectonic Tourist Website",
    description:
      "Van and backline rental for touring bands, based out of Chicago, IL. Using Google App Scripts, I designed the website so it automatically exports dynamic reservation data from an embedded google form, to a google sheet, where the reservation automatically creates an event in the business's Google calendar for the requested duration of the reservation.",
    image: "/projects/tectonic_tourist.jpg",
    tags: ["Google App Scripts", "JavaScript", "SCSS", "HTML", "Firebase"],
    link: "http://www.tectonictourist.com/",
    github: "https://github.com/leilahsmith/tectonic_tourist",
  },
  {
    title: "Sharon Weyser Portfolio Website",
    description:
      "A professional portfolio website for professional French Horn player Sharon Weyser, built with a focus on elegant design and seamless user experience.",
    image: "/projects/sharon.jpg",
    tags: ["JavaScript", "TypeScript", "Google AppSheet", "SCSS", "HTML"],
    link: null,
    linkNote: "This website is no longer deployed",
    github: "https://github.com/leilahsmith/sharon_website",
  },
  {
    title: "Eleven Fifty Academy - MyTunes List App",
    description:
      "A collaborative project named 'MyTunesList', a social media application that allows a user to rate their favorite artists.",
    image: "/projects/MyTunesList.png",
    tags: ["JavaScript", "C#", "HTML", "CSS"],
    link: null,
    github: "https://github.com/leilahsmith/StaticStoreFront",
  },
  {
    title: "Eleven Fifty Academy - Gold Badge Final Project",
    subtitle: "Three back-end console applications for separate challenges.",
    description:
      "Console applications for a cafe, insurance company, and security badging system.",
    image: "/projects/MyTunesList.png",
    tags: ["C#"],
    link: "https://github.com/leilahsmith/StaticStoreFront",
    github: "https://github.com/leilahsmith/StaticStoreFront",
  },
  {
    title: "Eleven Fifty Academy - Hangman",
    subtitle: "A Partner-Project Console Game.",
    description:
      "A recreation of the classic Hangman game using the C# language.",
    image: "/projects/MyTunesList.png",
    tags: ["C#"],
    link: null,
    github: "https://github.com/leilahsmith/StaticStoreFront",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-25 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
          <Divider 
            textAlign="center" 
            sx={{
              mt: 3,
              fontSize: "1rem",
              fontStyle: "italic",
              color: "rgba(255,255,255)",
              border: "1px solid white",
              borderRadius: '4px',
              width: "100%",
              textAlign: 'center',
              justifyContent: 'center',
              padding: '7px'
            }}>
            Apologies. This section is currently under construction! 
            
          </Divider>
          <p className="text-sm mt-2">
            Some projects are private or internal, with additional public demos coming soon.
          </p>            
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {/* {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )} */}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  ) : project.githubNote ? (
                    <div className="relative group/github">
                      <div className="p-3 rounded-full glass opacity-50 cursor-not-allowed flex items-center justify-center">
                        <GithubIcon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 px-4 py-2 rounded-lg bg-card text-xs text-muted-foreground text-center opacity-0 group-hover/github:opacity-100 transition-opacity shadow-lg border border-border">
                        {project.githubNote}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
               <div className="flex items-start justify-between gap-4">
  {/* Left: title + badge */}
  <div className="flex items-center gap-2">
    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
      {project.title}
    </h3>

    {!project.link && (
      <span
        className="
          px-2 py-0.5
          text-[10px] uppercase tracking-wide
          rounded-full
          bg-muted/40
          text-muted-foreground
          border border-border
          whitespace-nowrap
        "
      >
        Link unavailable
      </span>
    )}
  </div>

  {/* Right: arrow */}
  {project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 pointer-events-auto"
    >
      <ArrowUpRight className="w-5 h-5" />
    </a>
  ) : project.linkNote ? (
    <div className="relative group/arrow">
      <div className="text-muted-foreground opacity-50 cursor-not-allowed">
        <ArrowUpRight className="w-5 h-5" />
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 px-4 py-2 rounded-lg bg-card text-xs text-muted-foreground text-center opacity-0 group-hover/arrow:opacity-100 transition-opacity shadow-lg border border-border z-20">
        {project.linkNote}
      </div>
    </div>
  ) : null}
</div>


                {project.subtitle && (
                  <h4 className="text-m italic text-muted-foreground">
                    {project.subtitle}
                  </h4>
                )}

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/leilahsmith/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
