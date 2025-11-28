
export default function Home() {
  return (
    <section className="text-center mt-32">
      <h1 className="text-5xl font-bold" style={{ color: "#9333EA" }}>
        Hi, Advaith N A
      </h1>

      <p className="text-xl mt-4 font-medium text-gray-900">
         Junior Developer
      </p>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        I'm learning to build clean and simple web experiences.
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <a
          href="/projects"
          className="px-8 py-3 rounded-md font-medium text-white"
          style={{ backgroundColor: "#9333EA" }}
        >
          View Projects
        </a>

        <a
          href="/Advaith_Resume.pdf"
          className="px-8 py-3 rounded-md font-medium"
          style={{
            color: "#9333EA",
            border: "2px solid #9333EA",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
