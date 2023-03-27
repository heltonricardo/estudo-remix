import { Link } from "@remix-run/react";
import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all notes</Link>
        </nav>
        <h1>Title</h1>
      </header>
      <p id="note-details-content">Content</p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
