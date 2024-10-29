import Link from "next/link";

export default function Header() {
  const status = true;
  return (
    <header className="flex py-5 items-center justify-between">
      <nav className="flex text-white font-normal items-center">
        <Link className="text-primary font-normal text-2xl" href="/">
          RENTAL
        </Link>
      </nav>
      <nav className="flex gap-8 text-white font-normal items-center">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Offices</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex  text-white font-normal items-center">
        <button className="black-btn">+971 54 998 2303</button>
      </nav>
    </header>
  );
}
