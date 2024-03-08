class todoItem {
  title: string;
  completed: boolean;
  dueDate: Date;
  priority: number;
  notes?: string;

  constructor(title: string, completed: boolean, dueDate: Date, priority: number, notes?: string) {
    this.title = title;
    this.completed = completed;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  editTitle(newTitle: string) {
    this.title = newTitle;
  }

  markCompleted() {
    this.completed = true;
  }

  markUncompleted() {
    this.completed = false;
  }

  editDueDate(newDueDate: Date) {
    this.dueDate = newDueDate;
  }

  editPriority(newPriority: number) {
    this.priority = newPriority;
  }

  editNotes(newNotes: string) {
    this.notes = newNotes;
  }

  getDetails() {
    return `Title: ${this.title}\nCompleted: ${this.completed}\nDue Date: ${this.dueDate}\nPriority: ${this.priority}\nNotes: ${this.notes}`;
  }
}

export default todoItem;