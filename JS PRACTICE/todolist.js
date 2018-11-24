var todos = ["Buy new Turtle"];

var input = prompt("what would you like to do?")

while(input !== "quit") {
  //handle input
  if (input === "list") {
    printList();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //ask again for new input
  input = prompt("what would you like to do?")
}
 console.log("Okay. You have quit the app");

function printList() {
 console.log("**********")
 todos.forEach(function(todo, i){
   console.log(i + ": " + todo);
 });
 console.log("**********")
}

 function addTodo() {
   //ask for new todo
   var newTodo = prompt("Enter new todo");
   //add to todos array
   todos.push(newTodo);
   console.log(newTodo + " Added Todo");
 }

 function deleteTodo() {
   var index =  prompt("Enter index of todo to delete");
   todos.splice(index,1);
   console.log("Deleted Todo");
 }
