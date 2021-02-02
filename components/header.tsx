import Link from "next/link";
import { brandName } from "../constant";

function Header() {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto my-10 bg-black">
      <Link href="/">
        <a className="">{brandName}</a>
      </Link>
      <ul className="flex justify-around w-1/3">
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/team">
          <a>Team</a>
        </Link>
        <Link href="/careers">
          <a>Careers</a>
        </Link>
        <Link href="/blog">
          <a>Newsroom</a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
