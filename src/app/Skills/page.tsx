export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: "https://ext.same-assets.com/1282326863/62537873.png" },
        { name: "TypeScript", icon: "https://ext.same-assets.com/1282326863/3216177264.png" },
        { name: "Python", icon: "https://ext.same-assets.com/1282326863/1657221691.png" },
      ],
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "React", icon: "https://ext.same-assets.com/1282326863/554869722.png" },
        { name: "Node.js", icon: "https://ext.same-assets.com/1282326863/979444545.png" },
        { name: "Next.js", icon: "https://ext.same-assets.com/1282326863/2579818930.png" },
        { name: "Tailwind", icon: "https://ext.same-assets.com/1282326863/814907999.png" },
        { name: "Bootstrap", icon: "https://ext.same-assets.com/1282326863/194752236.png" },
        { name: "SASS", icon: "https://ext.same-assets.com/1282326863/1675051176.png" },
        { name: "JQuery", icon: "https://ext.same-assets.com/1282326863/1879205802.png" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", icon: "https://ext.same-assets.com/1282326863/2929177887.png" },
        { name: "Redis", icon: "https://ext.same-assets.com/1282326863/4264021432.png" },
        { name: "PostgresSQL", icon: "https://ext.same-assets.com/1282326863/1705279872.png" },
        { name: "Cassandra", icon: "https://ext.same-assets.com/1282326863/3841297556.png" },
        { name: "MongoDB", icon: "https://ext.same-assets.com/1282326863/2130496392.png" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "AWS", icon: "https://ext.same-assets.com/1282326863/2601413395.png" },
        { name: "Cloudflare", icon: "https://ext.same-assets.com/1282326863/3470246067.jpeg" },
        { name: "Git", icon: "https://ext.same-assets.com/1282326863/1623206561.png" },
        { name: "GitHub", icon: "https://ext.same-assets.com/1282326863/118092508.png" },
        { name: "Bitbucket", icon: "https://ext.same-assets.com/1282326863/3388602182.png" },
        { name: "Azure App Service", icon: "https://ext.same-assets.com/1282326863/3139973021.png" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Visual Studio Code", icon: "https://ext.same-assets.com/1282326863/4021441112.png" },
        { name: "Postman", icon: "https://ext.same-assets.com/1282326863/2017484180.png" },
        { name: "JIRA", icon: "https://ext.same-assets.com/1282326863/3221132930.png" },
      ],
    },
  ];

  return (
    <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
      <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
        Skills
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
        Data Structures and Algorithms, Frontend Development, Backend Development,
        Database Management, System Design, LLMs, Generative AI Workflows, RAG and Cloud.
      </p>

      <div className="w-full mb-5 pb-5">
        {skillCategories.map((category, index) => (
          <div key={index} className="mt-5 pt-5">
            <p className="mt-2 tracking-tight text-gray-400 text-xl">{category.title}</p>
            <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="relative">
                  <dt className="flex items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="text-lg leading-6 font-medium pt-3 text-gray-100">
                      {skill.name}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
