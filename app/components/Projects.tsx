export default function Projects() {
    const projects = [
      {
        title: "SEO Blog – Health & Wellness",
        description: "An in-depth blog optimized for health-related keywords.",
        link: "https://example.com/blog1",
      },
      {
        title: "Prompt Engineering Guide",
        description: "Crafting and refining prompts for AI models.",
        link: "https://example.com/guide",
      },
      {
        title: "Social Media Strategy Deck",
        description: "Strategic planning for a product launch campaign.",
        link: "https://example.com/strategy",
      },
    ];
  
    return (
      <section className="py-8 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 my-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  