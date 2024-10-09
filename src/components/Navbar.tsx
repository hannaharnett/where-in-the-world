import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav
        className="w-full flex justify-between px-16 py-2.5 bg-elements dark:bg-darkElements"
        aria-label="Main navigation"
      >
        <Link to="/" className="text-text dark:text-darkText no-underline">
          <h1>Where in the World?</h1>
        </Link>
      </nav>
    </>
  );
};
