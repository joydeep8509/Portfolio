import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Job-Portal",
    description:
      "Developed JSTACK, a responsive job portal with search, filters, dynamic job pages, and employer job posting using HTML, CSS, JavaScript.",
    image: "/projectsimage/Job.png",
    tags: ["HTML", "CSS", "JavaScript","Responsive UI"],
    demoUrl: "https://joydeep-job-portal.vercel.app/",
    githubUrl: "https://github.com/joydeep8509/Job---Portal",
  },
  {
    id: 2,
    title: "ResumeSyncer",
    description:
      "A modern full-stack React starter with SSR, HMR, TypeScript, and Tailwind CSS, featuring React Router APIs for data loading, optimized builds, and Docker-ready deployment.",
    image: "/projectsimage/Resume.png",
    tags: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    demoUrl: "https://resume-syncer.vercel.app/",
    githubUrl: "https://github.com/joydeep8509/ResumeSyncer",
  },
  {
    id: 3,
    title: "Imaginator",
    description:
      "An elegant AI image generator web app using Imagine Art API. Generate images from text prompts with styles, aspect ratios, and instant download. Responsive, fast, and user-friendly.",
    image: "/projectsimage/Imaginator.png",
    tags: ["HTML", "CSS", "JavaScript", "REST API", "Responsive UI"],
    demoUrl: "https://imaginator-neon.vercel.app/",
    githubUrl: "https://github.com/joydeep8509/ImageGinator",
  },
  {
    id: 4,
    title: "Chat-App",
    description:
      "A Spring Boot WebSocket chat app enabling real-time communication between multiple users with STOMP, SockJS, and Thymeleaf integration.",
    image: "/projectsimage/Chatapp.png",
    tags: ["Spring Boot", "WebSocket", "STOMP", "SockJS", "Thymeleaf", "Tailwind CSS"],
    demoUrl: "https://joydeep-chat-app.up.railway.app/chat",
    githubUrl: "https://github.com/joydeep8509/ChatApp",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to details, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1
            return (
              <div
                key={project.id}
                className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${
                  isLast ? "lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="blank"
            href="https://github.com/joydeep8509"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

