export default function Skills() {
  return (
    <section className="mt-10 text-center">
      <h2
        className="text-4xl font-bold mb-16"
        style={{ color: "#9333EA" }}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <div className="border rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-4" style={{ color: "#9333EA" }}>
            Frontend Skills
          </h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React (learning)</li>
            <li>Next js(learning)</li>
          </ul>
        </div>

        <div className="border rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-4" style={{ color: "#9333EA" }}>
            Backend Skills
          </h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>Python</li>
            <li>Java Basics (learning)</li>
            <li>API Basics</li>
            <li>Javascript</li>

          </ul>
        </div>

        <div className="border rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-4" style={{ color: "#9333EA" }}>
            Tools
          </h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
