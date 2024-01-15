"use client";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "shadow" : "shadow-none",
        `sticky top-0 bg-white z-50 w-full xmd:px-5 sm:px-0 `
      )}
    >
      <header
        className={`flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center __className_f6433a `}
      >
        <Link href="/" aria-label="logo">
          <h1 className="font-bold cursor-pointer rounded-md __className_f6433a">
            JAY SHIM
          </h1>
        </Link>
        <nav>
          <ul
            id="primary-navigation"
            className={`flex justify-center items-center gap-5 text-sm`}
          >
            <li onClick={() => setIsOpen(false)}>
              <Link href="/#projects" aria-label="jay shim projects">
                Projects
              </Link>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <Link href="/#about" aria-label="jay shim about">
                About
              </Link>
            </li>

            <li className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
              Contact
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1jz6wwMpdPK2iI8IlwqrWI_aHWl_6ZX2I/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center gap-2 items-center"
              >
                Resume <TbExternalLink />
              </a>
            </li>

            <div className="hidden md:flex gap-8 text-3xl ">
              <Tippy content="Github profile">
                <a
                  href="https://github.com/kennethvega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="github link"
                >
                  <AiFillGithub />
                </a>
              </Tippy>
              <Tippy content="Linkedin profile">
                <a
                  href="https://www.linkedin.com/in/kenneth-vega-5bb9b3237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="linkedin link"
                >
                  <AiFillLinkedin />
                </a>
              </Tippy>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
