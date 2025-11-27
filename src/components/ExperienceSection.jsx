import { Briefcase } from "lucide-react";

const internships = [
    {
        title: "Web Developer Intern",
        company: "Sakila Robotics and AI Solutions",
        duration: "Oct 2025 (1 month)",
        description: [
            "Built reusable and scalable React UI components.",
            "Enhanced site responsiveness, reducing load times and improving mobile UX.",
            "Collaborated with designers to ensure consistent branding and UI patterns.",
            "Optimized code structure for better maintainability and performance."
        ],
        link: "https://drive.google.com/file/d/17ZQc2Sxf0DtOksX5znNTq9iLXFpM0cRu/view?usp=sharing"
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

                <div className="grid grid-cols-1 place-items-center gap-8 mb-16">
                    {internships.map((item, index) => (
                        <div
                            key={index}
                            className="gradient-border p-6 card-hover text-center flex flex-col items-center max-w-md w-full"
                        >
                            <div className="p-3 rounded-full bg-primary/10 mb-4">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <h4 className="font-semibold text-xl">{item.title}</h4>
                            <p className="text-base text-muted-foreground">
                                {item.company} • {item.duration}
                            </p>

                            {/* Bullet Points */}
                            <ul className="text-muted-foreground text-base mt-4 space-y-2 text-left">
                                {item.description.map((point, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={item.link}
                                target="_blank"
                                className="text-primary underline text-base mt-4"
                            >
                                View Proof
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
