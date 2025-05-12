interface FooterProps {
  onTabSelect: (index: number) => void;
}

const options = [
  { label: "About Me", index: 0 },
  { label: "Portfolio", index: 1 },
  { label: "Contact", index: 2 },
];

export default function Footer({ onTabSelect }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-10">
      <div>
        <h2 className="text-xl font-bold">Anusha Sree K</h2>
        <p>Hyderabad, India | +91 9121651973 | anushak1925@gmail.com</p>
        <p>© {new Date().getFullYear()} Anusha Sree K. All rights reserved.</p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {options.map((item) => (
          <button
            key={item.index}
            onClick={() => onTabSelect(item.index)}
            className="text-blue-400 hover:underline"
          >
            {item.label}
          </button>
        ))}
      </div>
    </footer>
  );
}
