import { Todo } from './../model/todos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      text: 'Kod yazmak',
      createdAt: new Date(),
    },
  ];

  constructor() {}
  //Todoları ekranda göster
  getTodos() {
    //  return this.todos;
    return (this.todos = this.getItemsFromLS());
  }

  //Todo Ekle
  AddTodo(todo: Todo) {
    this.todos.push(todo);

    //LocalStorage
    let items = this.getItemsFromLS();
    items.push(todo);
    localStorage.setItem('Todos', JSON.stringify(items));
  }

  //LocalStorage
  getItemsFromLS() {
    let items: Todo[] = [];
    let value = localStorage.getItem('Todos');
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }

  //Todo Sil
  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    //LocalStorage **BURAYI YAPAMADIN LS'den SİLİNMİYOR.Tekrar bak.**
  //   let items = this.getItemsFromLS();
  //   localStorage.clear();
  //   items.forEach((i) => {
  //     if (i.text == todo.text) {
  //       i.createdAt = todo.createdAt;
  //     }
  //   });
  //   localStorage.setItem('Todos', JSON.stringify(items));
   }
}
