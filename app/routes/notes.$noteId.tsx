import { ActionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNoteById } from "~/data/notes";
import Note from "~/models/Note";
import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  const note = useLoaderData<Note>();

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
}

export async function loader({ params }: ActionArgs) {
  const noteId = params.noteId || "";
  return await getStoredNoteById(noteId);
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
