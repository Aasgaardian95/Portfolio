export default function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      className="block rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-gray-600"
    >
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-3 text-gray-400">{description}</p>
      <p className="text-sm text-gray-500">{tech}</p>
    </a>
  );
}
