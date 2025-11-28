export default function ProjectCard({ title, desc, tags }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border bg-white">
      <div className="h-40 w-full bg-gradient-to-br from-gray-200 to-gray-400"></div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full"
              style={{
                backgroundColor: "#F3E8FF",
                color: "#7C3AED",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
