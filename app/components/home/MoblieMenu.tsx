import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { NavbarProps } from "./Navbar";
import { IoMdClose } from "react-icons/io";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the menu

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      // Add event listener for clicks when the menu is open
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Clean up the event listener when the menu is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    
    // Clean up on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openMenu]);

  if (!openMenu) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        ref={menuRef} // Attach the ref to the menu element
        className="absolute flex min-h-[85%] w-full flex-col items-center justify-center overflow-y-auto rounded-b-2xl border-2 border-white/20 bg-background px-6 py-8 text-accent shadow-lg shadow-accent/10 md:px-10 md:py-16"
      >
        <div className="inline md:hidden p-2 rounded-full bg-[#802dd2] backdrop-blur-xl">
          <IoMdClose className="text-white text-xl font-bold" onClick={()=>setOpenMenu(false)} />
        </div>
        <div className="flex flex-col items-center gap-6 text-center">
          {routes.map((link, i) => (
            <button
              key={i}
              className="group relative py-2 text-3xl font-medium"
              onClick={() => handleClick(link.href)}
            >
              <span
                className={`absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full ${
                  pathName === link.href ? "w-full" : "w-0"
                }`}
              ></span>
              {link.title}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 py-6">©2024 Gurman Sambhi</div>
      </div>
    </div>
  );
}
