import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow flex justify-between">
      <Link href="/" className=" text-xl text-primary font-semibold">
        <Image
          src="/images/logo.jpeg"
          width={500}
          height={500}
          alt="Logo de CavalSync"
          className="h-20 w-20 rounded-full"
        />
        <span className="ml-2">CavalSync</span>
      </Link>
      <nav>
        <ul className="flex justify-center">
          <li className="mr-5">
            <Link href="/" className="">
              Accueil
            </Link>
          </li>
          <li className="mr-5">
            <Link href="/feed" className="">
              Votre réseau
            </Link>
          </li>
          <li className="mr-5">
            <Link href="/">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
