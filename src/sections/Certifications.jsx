import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const certs = [
    { 
        title: "SCRUM FOUNDATION PROFESSIONAL CERTIFICATION- SFPC™",
        company: "Certiprof",
        date: "September 2023",
        id: "Credential ID 89574222",
        technologies: ["Agile", "Scrum"],
        description: "Professional Scrum Certification.",
        image: "/certiprof_logo.jpg",
        link: "",
    },
    { 
        title: "React + Redux",
        company: "SOLOLEARN",
        date: "December 2021",
        id: "Certificate #1097-24385680",
        technologies: ["React", "Redux"],
        description:
        "Earners of this course certificate have demonstrated understanding of core concepts of the react and redux libraries, including JSX, Virtual DOM, Components, hooks, reducers, state management, event-handling, and lifescycle methods.",
        image: "/sololearn.png",
        link: "https://www.sololearn.com/Certificate/CT-ZURSGNFJ/jpg",
    },
    { 
        title: "MTA: Software Development Fundamentals",
        company: "Microsoft",
        date: "December 2021",
        id: "",
        technologies: ["React", "Redux"],
        description:
        "Earners of this course certificate have demonstrated understanding of core concepts of the react and redux libraries, including JSX, Virtual DOM, Components, hooks, reducers, state management, event-handling, and lifescycle methods.",
        image: "/MTA-SD.png",
        link: "https://www.credly.com/badges/5d9cec88-48ed-47e5-9c26-941c7947f7da?source=linked_in_profile",
    },
        { 
        title: "Introduction to Front-End Development",
        company: "Meta",
        date: "August 2022",
        id: "Credential ID: A3ZFA4PTXGCF",
        technologies: ["React"],
        description:
        "Earners of this course certificate have demonstrated understanding ofDistinguish between front-end, back-end, and full-stack developers. The benefits of working with UI frameworks, and how to create and style a webpage with HTML and CSS.",
        image: "/meta.jpg",
        link: "https://www.coursera.org/account/accomplishments/certificate/A3ZFA4PTXGCF",
    },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Course & Exam Certifications
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Qualifications that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              inspire confidence.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A collection of my professional certifications.
          </p>
        </div>

        {/* certs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
         {certs.map((cert, idx) => (
            <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
                {/* Image */}
                <div className="relative aspect-video bg-surface flex items-center justify-center p-6">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                        max-w-full
                        max-h-full
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                    {cert.company} • {cert.date}
                    </p>

                    <p className="text-xs text-muted-foreground">
                    {cert.id}
                    </p>
                </div>

                <p className="text-muted-foreground text-sm">
                    {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech, techIdx) => (
                    <span
                        key={techIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            ))}         
            </div>
        </div>
    </section>
  );
};