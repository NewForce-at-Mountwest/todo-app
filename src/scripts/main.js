// Add an event listener to the add button

printAllTasks();

document.querySelector("#add-btn").addEventListener("click", () => {
  const taskValue = document.querySelector("#task-input").value;
  const dateValue = document.querySelector("#date-input").value;
  const descriptionValue = document.querySelector("#description-input").value;

  const taskToAdd = {
    name: taskValue,
    dueDate: dateValue,
    description: descriptionValue
  };

  createTask(taskToAdd).then(() => {
    printAllTasks();
  });
});




// ---------- DELETE --------------//
// Add a delete button to the dom component

// When the user clicks the delete button, get that item's id and delete it from the DB

// Refresh the list

// ---------------- PATCH -------------------------//
// Add an event listener to the check box
// When the check box is checked, make a PATCH request to the db to change the completed property from false to true
// Refresh the list

//------------ PUT ------------------//
// When the user clicks the edit button, build a form with that item's information
// add an event listener to the submit button
// build a new object representing that task
//PUT it to the database
// refresh the list
