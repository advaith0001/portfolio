export default function Experience() {
  return (
    <section className="mt-10 max-w-5xl mx-auto">
      {/* Title */}
      <h2
        className="text-4xl font-bold mb-12"
        style={{ color: "#9333EA" }}
      >
        Experience
      </h2>

      {/* Internship Section */}
      <div className="mb-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">
          Internship Experience
        </h3>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            Beginner tasks
          </li>
        </ul>
      </div>

      {/* Bootcamps */}
      <div className="mb-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">
          Bootcamps Attended
        </h3>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            Entity Quest Bootcamp
          </li>

          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            Django Workshop
          </li>

          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            UiPath Automation Training
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="mb-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">
          Certifications
        </h3>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            Introduction to Javascript(Metta)
          </li>

          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            Programming in java(NPTEL)
          </li>

          <li className="flex items-center gap-3 text-gray-800">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#9333EA" }}
            ></span>
            HTML and CSS in Depth (Meta)
          </li>
        </ul>
      </div>
    </section>
  );
}
