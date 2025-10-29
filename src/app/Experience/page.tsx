export default function Experience() {
  const experiences = [
    {
      title: "Tech lead",
      company: "ARTS Tech , KE",
      period: "Sep 2024 - present",
      icon: "https://ext.same-assets.com/1282326863/4196962395.png",
    },
    {
      title: "Founder & CEO",
      company: "Intouch , KE",
      period: "Feb 2024 - Dec 2024",
      icon: "https://ext.same-assets.com/1282326863/4196962395.png",
    },
    {
      title: "Electrical engineer",
      company: "Roam Electric, KE",
      period: "Mar 2023 - Jan 2024",
      icon: "https://ext.same-assets.com/1282326863/2336012670.jpeg",
    },
    {
      title: "Program Manager & Project Lead",
      company: "Akili Factory X Microsoft Garage , KE",
      period: "Oct 2022 - May 2023",
      icon: "https://ext.same-assets.com/1282326863/4196962395.png",
    },
    {
      title: "Electrical engineering intern",
      company: "Gearbox Europlace, KE",
      period: "Sep 2022 - Dec 2022",
      icon: "https://ext.same-assets.com/1282326863/1921075801.png",
    },
  ];

  return (
    <div className="p-3 pl-5 pb-60 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="block lg:text-5xl font-bold leading-tight text-3xl text-white">
          Work
        </span>
        <span className="block pt-3 text-indigo-500 text-2xl">Industry Experience</span>
      </h2>

      <div className="pt-10 w-full">
        <div className="vertical-timeline max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 flex items-start gap-6">
              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden border-4 border-[#1e1e1e]">
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Content Card */}
              <div
                className="flex-1 p-6 rounded-lg text-left"
                style={{
                  background: "linear-gradient(to right, rgb(74, 0, 224), rgb(142, 45, 226))",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                <h4 className="text-lg mb-2">{exp.company}</h4>
                <span className="text-sm opacity-90">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
