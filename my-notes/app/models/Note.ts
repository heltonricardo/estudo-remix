export default class Note {
  id: string;
  title: string;
  content: string;
  date: string;

  constructor(id: string = "", title: string = "", content: string = "", date: string = "") {
    this.id = id;
    this.title = title;
    this.content = content;
    this.date = date;
  }

  static newSimple(title: string, content: string) {
    return new Note("", title, content, new Date().toISOString());
  }
}
