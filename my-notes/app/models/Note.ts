export default class Note {
  id: string;
  title: string;
  content: string;

  constructor(formData: FormData) {
    this.id = new Date().toISOString();
    this.title = formData.get("title")?.toString() || "";
    this.content = formData.get("content")?.toString() || "";
  }
}
