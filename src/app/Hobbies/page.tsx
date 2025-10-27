import Link from "next/link";

export default function Hobbies() {
  const hobbies = [
    {
      name: "Blogging",
      icon: "https://ext.same-assets.com/1282326863/4165346322.png",
      link: "/Blogs",
    },
    {
      name: "Gaming",
      icon: "https://ext.same-assets.com/1282326863/1682303762.png",
      link: "/Gaming",
    },
    {
      name: "Animes",
      icon: "https://ext.same-assets.com/1282326863/879380293.png",
      link: "/Anime",
    },
    {
      name: "Learning",
      icon: "https://ext.same-assets.com/1282326863/101363964.png",
      link: "/Learning",
    },
    {
      name: "StartUp",
      icon: "https://ext.same-assets.com/1282326863/2765091219.png",
      link: "/Startup",
    },
  ];

  return (
    <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
      <div className="p-12">
        <div>
          <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
            Hobbies
          </h1>
          <div className="text-gray-400">List of stuff i like to do in my Spare Time.</div>

          <div className="grid grid-cols-2 pt-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {hobbies.map((hobby, index) => (
              <Link
                key={index}
                href={hobby.link}
                className="cursor-pointer block p-4 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-10"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-3">
                    <img
                      src={hobby.icon}
                      alt={hobby.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-white text-center font-semibold text-sm">
                    {hobby.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
