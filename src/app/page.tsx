import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl p-6 md:p-12">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left Column */}
        <div className="flex-1 mb-4 md:mb-0">
          <div className="p-2">
            <h2 className="text-5xl font-sans mb-2 text-white">Nicole Akinyi</h2>
            <h3 className="text-2xl font-sans text-gray-500 pt-1 mb-2">
              Creative fullstack Software Engineer
            </h3>

            <p className="text-xl text-gray-300 pt-5 mb-4">Start</p>

            <Link href="/Skills">
              <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center hover:underline">
                <span>📊</span> Skills ...
              </p>
            </Link>

            <Link href="/Projects">
              <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center hover:underline">
                <span>📁</span> Projects ...
              </p>
            </Link>

            <Link href="/Anime">
              <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center hover:underline">
                <span>#</span> Anime ...
              </p>
            </Link>

            <Link href="/Email">
              <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center hover:underline">
                <span>💬</span> Get in Touch ...
              </p>
            </Link>

            <p className="text-xl text-gray-300 pt-6 mb-2">Recent</p>
            <p className="text-sm font-sans pt-1 text-gray-500">No recent activity!</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="p-2" style={{ paddingTop: "22%" }}>
            <p className="text-xl text-gray-300 pt-6 mb-1">About</p>

            <div className="pt-1">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nicole-akinyi-b1119a176/"
                rel="noopener noreferrer"
              >
                <div className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500 bg-[#262626] mt-4 hover:bg-[#2a2a2a] transition-colors"
                  style={{ borderBottomWidth: "0.3rem" }}>
                  <img
                    src="https://ext.same-assets.com/1282326863/2314679399.png"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                  <p className="text-gray-200 text-sm font-sans">LinkedIn Profile</p>
                </div>
              </a>
            </div>

            <div className="mt-4">
              <a
                target="_blank"
                href="https://github.com/nicoleakinyi"
                rel="noopener noreferrer"
              >
                <div className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500 bg-[#262626] hover:bg-[#2a2a2a] transition-colors"
                  style={{ borderBottomWidth: "0.3rem" }}>
                  <img
                    src="https://ext.same-assets.com/1282326863/1097700580.png"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                  <p className="text-gray-200 text-sm font-sans">Github Page</p>
                </div>
              </a>
            </div>

            <div className="mt-4">
              <a
                target="_blank"
                href="https://www.tiktok.com/@m.rembo"
                rel="noopener noreferrer"
              >
                <div className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500 bg-[#262626] hover:bg-[#2a2a2a] transition-colors"
                  style={{ borderBottomWidth: "0.3rem" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZd7mszoX8inKkbUKb6ffie8YF2-c00RL7w&s"
                    alt="Tiktok"
                    className="w-5 h-5"
                  />
                  <p className="text-gray-200 text-sm font-sans">Tech community</p>
                </div>
              </a>
            </div>

            <div className="mt-4">
              <div className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500 bg-[#262626] hover:bg-[#2a2a2a] transition-colors"
                style={{ borderBottomWidth: "0.3rem" }}>
                <img
                  src="https://ext.same-assets.com/1282326863/607553417.png"
                  alt="Product Hunt"
                  className="w-5 h-5"
                />
                <p className="text-gray-200 text-sm font-sans">Product Hunt Page</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500 bg-[#262626] hover:bg-[#2a2a2a] transition-colors"
                style={{ borderBottomWidth: "0.3rem" }}>
                <img
                  src="https://ext.same-assets.com/1282326863/2667478849.jpeg"
                  alt="Peerlist"
                  className="w-5 h-5 rounded"
                />
                <p className="text-gray-200 text-sm font-sans">Peerlist Page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
