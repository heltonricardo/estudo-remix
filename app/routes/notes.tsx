import { ActionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function Notes() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  return await getStoredNotes();
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // TODO: Add validation
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
