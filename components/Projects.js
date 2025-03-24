const projects = [
  {
    title: "Content Moderation",
    description:
      "A fast and scalable platform for managing content submitted by multiple clients via API. Operators manually review the content, with AI assistance during high-traffic periods to improve efficiency.",
    tech: ["Laravel", "MySQL", "Node.js", "React.js", "Material UI", "Redis"],
  },
  {
    title: "HR Management System",
    description:
      "A comprehensive HR management system designed to streamline employee onboarding, attendance tracking, payroll processing, and employee record management. Includes email notifications for important HR updates and seamless handling of day-to-day HR operations.",
    tech: ["Laravel", "MySQL", "React.js", "Redis", "Material UI"],
  },
  {
    title: "Lead Generation System",
    description:
      "A custom-built lead generation system designed for efficient data capture and client tracking. Includes backend integrations and reporting dashboards.",
    tech: ["Laravel", "MySQL", "Redis", "React.js", "MUI"],
  },
  {
    title: "AI-powered Image Generator",
    description:
      "An AI-driven tool utilizing ReplicateAI for image generation and editing. Users can modify images dynamically with a brush tool and enhance their creative workflows.",
    tech: ["React.js", "ReplicateAI", "Tailwind CSS"],
  },
  {
    title: "Social Media Platform Frontend",
    description:
      "A feature-rich frontend for a social media platform, built using React.js and MUI. Focused on UI responsiveness, accessibility, and seamless user experience.",
    tech: ["React.js", "MUI", "Node.js"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern and minimal portfolio website showcasing my work, skills, and experience. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-gray-300">{project.description}</p>
              <div className="mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;