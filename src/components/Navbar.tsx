import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex justify-center-items gap-10 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About us</Link>
        </nav>
    );
}

export default Navbar;