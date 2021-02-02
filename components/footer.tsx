import Link from "next/link";

function Header() {
  return (
    <footer className="flex justify-between max-w-screen-xl mx-auto my-10">
      <div>© 2021 ASTRA. ALL RIGHTS RESERVED.
MEDIA INQUIRIES: PRESS@ASTRA.COM</div>
      <ul className="flex justify-around w-1/3">
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/contact">
          <a>Team</a>
        </Link>
      </ul>
    </footer>
  );
}

export default Header;
