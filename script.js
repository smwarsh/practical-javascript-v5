var todoList = {
  todos: [],
  displayTodos: function() {
    // displayTodos should tell you if .todos is empty
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      // displayTodos should show .todoText
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
        
        // displayTodos should show .completed
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
        
      } // end for looop
    } // end else
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};