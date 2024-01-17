import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="shadow-lg ">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5 ">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/swapna-karya-logo.png"} alt={"swapna-karya-site-logo"} width={70} height={70} className="rounded-full" />
          <span className="tracking-light text-xl font-extrabold">Swapna Karya</span>
        </Link>
        <Button asChild>
          <Link href={"/job/new"}>Create a Job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
