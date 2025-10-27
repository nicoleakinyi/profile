export default function Projects() {
  const projects = [
    {
      title: "AyeSoul",
      description: "Simplifying how you seek information, acquire knowledge, complete tasks, and interact with Technologies,",
      image: "https://ext.same-assets.com/1282326863/7989908.webp",
      logo: "https://ext.same-assets.com/1282326863/317194522.png",
    },
    {
      title: "AyeHigh",
      description: "Generative AI Solutions for Students and Professionals",
      image: "https://ext.same-assets.com/1282326863/2322753548.jpeg",
      logo: "https://ext.same-assets.com/1282326863/3478198908.png",
    },
    {
      title: "Ninetails SaaS Starter Stack",
      description: "Simplifying how you start your SaaS journey with the best stack for building profitable web apps.",
      image: "https://ext.same-assets.com/1282326863/2598542725.jpeg",
      logo: "https://ext.same-assets.com/1282326863/3309018805.png",
    },
    {
      title: "The Watcher",
      description: "Stay Ahead of Any Topic",
      image: "https://ext.same-assets.com/1282326863/533159670.jpeg",
      logo: "https://ext.same-assets.com/1282326863/1218299952.png",
    },
    {
      title: "AyeCreate",
      description: "Where AI meets Content",
      image: "https://ext.same-assets.com/1282326863/2096670633.gif",
      logo: "https://ext.same-assets.com/1282326863/2096670633.gif",
    },
    {
      title: "ChaiTea Chat",
      description: "Worlds Most Beautiful, Fast & Elegant AI Chat App with All AI Models in One Place",
      image: "https://ext.same-assets.com/1282326863/2096670633.gif",
      logo: "https://ext.same-assets.com/1282326863/2096670633.gif",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl mb-2">
        Projects
      </h2>
      <p className="text-gray-400 mb-8">College and Side Projects for practice.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#262626] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition-all cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
