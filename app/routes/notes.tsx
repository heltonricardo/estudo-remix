import NewNote, { links as newNoteLinks } from "~/components/NewNote";

export default function Notes() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];
}
