import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <section id="projects" className="p-20">
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
