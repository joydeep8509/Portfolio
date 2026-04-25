import { Briefcase } from "lucide-react";

const internships = [
    {
        title: "Web Developer Intern",
        company: "Sakila Robotics and AI Solutions",
        duration: "Oct 2025 - Oct 2025",
        description: [
            "Built reusable and scalable React UI components.",
            "Enhanced site responsiveness, reducing load times and improving mobile UX.",
            "Collaborated with designers to ensure consistent branding and UI patterns.",
            "Optimized code structure for better maintainability and performance."
        ]
    },
    {
        title: "Frontend Developer Intern",
        company: "Retax Infotech Pvt. Ltd.",
        duration: "Jan 2026 - Mar 2026",
        description: [
            "Built responsive and modern web applications using Next.js, React, TypeScript, and Tailwind CSS.",
            "Integrated backend APIs into frontend applications for seamless data flow and functionality.",
            "Collaborated with the development team using Git for version control and efficient workflows.",
            "Contributed to UI improvements, feature enhancements, and overall application performance."
        ]
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                {/* ---- Internships ---- */}
                <h3 className="text-2xl font-semibold mb-6 text-center">Internships</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-20 mb-16">
                    {internships.map((item, index) => (
                        <div
                            key={index}
                            className="gradient-border p-6 card-hover text-center flex flex-col items-center max-w-md w-full"
                        >
                            <div className="p-3 rounded-full bg-primary/10 mb-4">
                                <Briefcase className="h-8 w-8 text-primary" />
                            </div>

                            <h4 className="font-semibold text-xl">{item.title}</h4>
                            <p className="text-base text-muted-foreground">
                                {item.company} • {item.duration}
                            </p>

                            <ul className="text-muted-foreground text-base mt-4 space-y-2 text-left">
                                {item.description.map((point, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
