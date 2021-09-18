import { Todo } from './../../model/todos';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //Todoları ekranda göster.
    this.todos = this.todoService.getTodos();
  }

  //Todo Ekle
  addTodo(todoText: HTMLInputElement) {
    const obj = {
      text: todoText.value,
      createdAt: new Date(),
    };
    this.todoService.AddTodo(obj);
    todoText.value="";//İnput içini temizleme
  }

  //Todo Sil
  removeTodo(todos:Todo){
    this.todoService.removeTodo(todos);
  }
  
}
