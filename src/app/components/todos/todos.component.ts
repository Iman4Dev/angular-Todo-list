import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'learn angular',
        completed: false
      },
      {
        content: 'build an app',
        completed: false
      },
      {
        content: 'add it to your CV',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () { 

    if(this.inputTodo != ""){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }else{

    alert("Box can not be empty");  // display string message

  }


    this.inputTodo = "";
  }

}
