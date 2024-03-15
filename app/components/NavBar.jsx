import Link from "next/link";

export default function NavBar() {
  return (
    <header className="py-4">
      <nav>
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <Link href="/counter-app" className="btn btn-ghost">
              Counter App
            </Link>
          </li>
          <li>
            <Link href="/calculator" className="btn btn-ghost">
              Calculator
            </Link>
          </li>
          <li>
            <Link href="/grow" className="btn btn-ghost">
              Grow Button
            </Link>
          </li>
          <li>
            <Link href="/todo-list" className="btn btn-ghost">
              Todo List
            </Link>
          </li>
          <li>
            <Link href="/cardlist" className="btn btn-ghost">
              Card List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
