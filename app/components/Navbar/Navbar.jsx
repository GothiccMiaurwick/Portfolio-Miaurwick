import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  return (
    <nav className={`${inter.className} flex justify-between items-center w-full h-20 px-6`}>
      <div className="flex items-center pt-4 hover:scale-110 transition-all duration-900">
        <Image 
          src="/logo-image.png" 
          alt="logo" 
          width={180} 
          height={200}
          className="object-contain"
        />
      </div>
      
      <div className="flex items-center">
        <ul className="flex gap-10 text-[15px] font-medium">
          <li className="relative group">
            <Link 
              href="/#about" 
              className="text-gray-700 hover:text-[#ff002e] transition-colors duration-300"
            >
              About Me
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link 
              href="/#work" 
              className="text-gray-700 hover:text-[#ff002e] transition-colors duration-300"
            >
              Work
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}