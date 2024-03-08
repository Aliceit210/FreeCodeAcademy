// Task class
class Task {
    constructor(description, category) {
      this.description = description;
      this.category = category;
      this.completed = false;
    }
  }
  
  // ToDoList class
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    // Function to add tasks to the ToDo list with specified categories
    addTask(description, category) {
      const task = new Task(description, category);
      this.tasks.push(task);
    }
  
    // Function to display tasks grouped by their categories
    displayTasksByCategory() {
      const tasksByCategory = {};
  
      this.tasks.forEach((task) => {
        if (task.category in tasksByCategory) {
          tasksByCategory[task.category].push(task);
        } else {
          tasksByCategory[task.category] = [task];
        }
      });
  
      console.log("Tasks By Category:");
      for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach((task) => {
          console.log(`- ${task.description} [${task.completed ? "Completed" : "Incomplete"}]`);
        });
      }
    }
  
    // Function to mark a task as completed
    markTaskAsCompleted(description) {
      const task = this.tasks.find((task) => task.description === description);
  
      if (task) {
        task.completed = true;
        console.log(`Task "${task.description}" marked as completed.`);
      } else {
        console.log(`Task "${description}" not found.`);
      }
    }
  
    // Function to remove a task from the ToDo list
    removeTask(description) {
      const taskIndex = this.tasks.findIndex((task) => task.description === description);
  
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        console.log(`Task "${description}" removed from the list.`);
      } else {
        console.log(`Task "${description}" not found.`);
      }
    }
  }
  
  // Usage example
  const toDoList = new ToDoList();
  
  // Add tasks to the ToDo list with categories
  toDoList.addTask("Task 1", "Category 1");
  toDoList.addTask("Task 2", "Category 2");
  toDoList.addTask("Task 3", "Category 1");
  toDoList.addTask("Task 4", "Category 2");
  
  // Display tasks grouped by categories
  toDoList.displayTasksByCategory();
  
  // Mark a task as completed
  toDoList.markTaskAsCompleted("Task 2");
  
  // Display tasks after marking as completed
  toDoList.displayTasksByCategory();
  
  // Remove a task from the list
  toDoList.removeTask("Task 3");
  
  // Display tasks after removing
  toDoList.displayTasksByCategory();