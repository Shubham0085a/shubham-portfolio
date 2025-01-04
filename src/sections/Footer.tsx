"use client";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "framer-motion";
import Link from "next/link";
import { FC, MouseEvent, useEffect } from "react";

const navItems = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
const links = [
  {
    name: "aasy0085@gmail.com",
    href: "mailto:aasy0085@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/Shubham0085a",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham0085a/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mr_shubham.sy/",
  },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  const currentYear = new Date().getFullYear();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl font-extralight mt-8"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <div className="md:col-span-2 mt-8">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="mt-2 ml-1"
                      iconAfter={
                        <div className="size-6 overflow-hidden">
                          <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      }
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ label, href }) => (
                  <Link key={label} href={href} onClick={handleClick}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; {currentYear} Shubham &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
