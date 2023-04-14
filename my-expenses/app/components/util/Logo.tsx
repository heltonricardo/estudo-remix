import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <>
      <h1 id="logo">
        <Link to="/">My Expenses</Link>
        <span>
          By{" "}
          <a href="https://github.com/heltonricardo/" target="_blank" rel="noopener noreferrer">
            Helton Ricardo
          </a>
        </span>
      </h1>
    </>
  );
}
