const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>

        <p className="text-lg text-white leading-relaxed">
          Full Stack Developer with 3 years of experience in Laravel, React.js, and MUI.
          Skilled in building scalable web applications, designing database schemas,
          and optimizing backend performance.
        </p>
        <p className="mt-4 text-white text-lg">
          I have a strong passion for debugging and troubleshooting complex issues,
          ensuring applications run smoothly and efficiently.
          I thrive in continuous learning, always exploring new technologies
          to improve my skills and stay up to date in the fast-paced tech industry.
        </p>

        <p className="mt-4 text-white text-lg">
          Recently, I have been learning AI integrations, working with AI-powered image generation, editing and other AI services.

          I also have experience with Redis
          for caching and Node.js for backend services, enhancing performance
          and scalability in applications.
        </p>

      </div>
    </section>
  );
};

export default About;
