import Image from "next/image";
export default function Home() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* ЛОГО */}
        <div className="flex items-center">
        <Image
        src="/Logo.svg"       
        alt="Logo"
        width={40}           
        height={40}
        className="object-contain"
        priority
  />

        
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Components</a>

          {/* Pages */}
          <div className="relative flex items-center gap-1 cursor-pointer hover:text-black">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-600 font-semibold group-hover:text-green-700">Pages</span>
            </span>
             <svg
      className="w-3 h-3 text-green-600 group-hover:text-green-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
          </div>

          <a href="#" className="hover:text-black">Documentation</a>
        </nav>

        {/* КНОПКА */}
        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg">
          Purchase Now
        </button>

      </div>
    </header>
  );
}
