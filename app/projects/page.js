import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Student Fee Payment Portal",
      desc: "A beginner project I built while learning.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Football Club Management System",
      desc: "A beginner project I built while learning.",
      tags: ["Django", "Python", "SQLite"],
    },
    {
      title: "Mini Django Blog",
      desc: "A beginner project I built while learning.",
      tags: ["Django", "Python", "Bootstrap"],
    },
    {
      title: "EPL Prediction Model",
      desc: "A beginner project I built while learning.",
      tags: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "UiPath Library Fine Notifier",
      desc: "A beginner project I built while learning.",
      tags: ["UiPath", "RPA"],
    },
    {
      title: "Simple UI/UX Design Screens",
      desc: "A beginner project I built while learning.",
      tags: ["Figma", "UI Design", "UX Design"],
    },
  ];

  return (
    <section className="mt-10 text-center">
      <h2 className="text-4xl font-bold text-purple-600 mb-16">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
