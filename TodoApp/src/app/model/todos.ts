export class Todo {
  text: string;
  createdAt: Date;

  constructor(text: string, createdAt: Date) {
    this.text = text;
    this.createdAt = createdAt;
  }
}
