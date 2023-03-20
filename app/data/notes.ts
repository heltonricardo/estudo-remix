import fs from "fs/promises";
import Note from "~/models/Note";

const FILE_NAME = "notes.json";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile(FILE_NAME, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes: Note[]) {
  return fs.writeFile(FILE_NAME, JSON.stringify({ notes: notes || [] }));
}
