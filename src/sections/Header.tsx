"use client";
import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/icons/logo-no-background.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "My Works",
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

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, animateTopLine] = useAnimate();
  const [bottomLineScope, animateBottomLine] = useAnimate();
  const [navScope, navAnimate] = useAnimate();
  useEffect(() => {
    if (isOpen) {
      animateTopLine([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      animateBottomLine([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      animateTopLine([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      animateBottomLine([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineScope,
    bottomLineScope,
    animateTopLine,
    animateBottomLine,
    navScope,
    navAnimate,
  ]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <div className="lg:group-hover/nav-item:pr-4 transition-all duration-500">
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
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20">
            <div>
              <Link
                href="#hero"
                className="flex items-center gap-2"
                onClick={handleClickMobileNavItem}
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold uppercase bg-gradient-to-r from-[#1e3a8a] to-stone-400 bg-clip-text text-transparent">
                  Shubham
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-xl inline-flex items-center justify-center bg-stone-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "5px 4px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "8px 10px",
                    }}
                  />
                </svg>
              </div>
              <Link href="#contact" onClick={handleClickMobileNavItem}>
                <Button variant="primary" className="hidden md:inline-flex">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
