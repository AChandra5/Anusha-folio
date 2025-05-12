export default function Skills() {
    const skills = [
      "SEO Content Writing",
      "Technical Writing",
      "Prompt Engineering",
      "Blog Writing",
      "Social Media Strategy",
      "Email Campaigns",
    ];
  
    return (
      <section className="py-8 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <li key={idx} className="bg-white shadow p-3 rounded-lg border">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  