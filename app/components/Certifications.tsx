export default function Certifications() {
    const certs = [
      { name: "SEO Certificate – Hubspot", link: "https://example.com/hubspot-seo" },
      { name: "Content Marketing – Google", link: "https://example.com/google-cert" },
      { name: "Prompt Engineering – OpenAI", link: "https://example.com/openai-cert" },
    ];
  
    return (
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
        <ul className="space-y-3">
          {certs.map((cert, idx) => (
            <li key={idx}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  