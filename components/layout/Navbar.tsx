import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E3DA]/80 bg-[#FCFBF8]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link
  href="/"
  className="flex h-[75px] w-[170px] items-center justify-center rounded-md bg-[#FCFBF8]"
>
  <Image
    src="/images/logos/logo4.png"
    alt="Antarsparsh by Meenu"
    width={170}
    height={68}
    priority
    className="h-full w-full object-contain"
  />
</Link>
        {/* Navigation */}
        <div className="hidden md:flex items-center gap-12">

          <Link
            href="/"
            className="relative text-[17px] font-medium text-[#465A47] transition-all duration-300 hover:text-[#B36A5E]
            after:absolute after:left-0 after:-bottom-2 after:h-[1.5px] after:w-0 after:bg-[#B36A5E]
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            href="/#services"
            scroll={true}
            className="relative text-[17px] font-medium text-[#465A47] transition-all duration-300 hover:text-[#B36A5E]
            after:absolute after:left-0 after:-bottom-2 after:h-[1.5px] after:w-0 after:bg-[#B36A5E]
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="relative text-[17px] font-medium text-[#465A47] transition-all duration-300 hover:text-[#B36A5E]
            after:absolute after:left-0 after:-bottom-2 after:h-[1.5px] after:w-0 after:bg-[#B36A5E]
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>

        </div>

      </nav>
    </header>
  );
}