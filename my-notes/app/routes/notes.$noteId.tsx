import { ActionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import NotesCollection from "~/data/firebase/collections/notesCollection";
import Note from "~/models/Note";
import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  const note = useLoaderData<Note>();

  return (
    <>
      <p id="warning">
        <p id="warning">
          ⚠️ The data from this page is dynamically entered by users. The author of this project assumes no
          responsibility for this content. ⚠️
        </p>
      </p>
      <main id="note-details">
        <header>
          <nav>
            <Link to="/notes">Back to all notes</Link>
          </nav>
          <h1>{note.title}</h1>
        </header>
        <p id="note-details-content">{note.content}</p>
      </main>
    </>
  );
}

export async function loader({ params }: ActionArgs) {
  const noteId = params.noteId || "";
  const note = await NotesCollection.getStoredNoteById(noteId);

  if (!note) {
    throw json({ message: "Could not find note for id " + noteId }, { status: 404 });
  }

  return note;
}

export function meta({ data }: { data: Note }) {
  return {
    title: data.title,
    description: data.content,
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
