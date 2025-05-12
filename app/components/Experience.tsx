export default function Experience() {
    const experiences = [
      {
        role: 'Content Creator - Prompt Engineer (AI)',
        company: 'Amazon',
        duration: 'July 2023 – March 2025',
        responsibilities: [
          'Developed and refined prompts for AI models.',
          'Collaborated with data scientists to train AI models.',
        ],
      },
      {
        role: 'Sr. Content Writer',
        company: 'ASH Software Design and Services Inc.',
        duration: 'February 2022 – June 2023',
        responsibilities: [
          'Created and implemented content strategies.',
          'Oversaw content creation and ensured quality standards.',
        ],
      },
      // Add more experiences as needed
    ];
  
    return (
      <section className="bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-700">{exp.company} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  