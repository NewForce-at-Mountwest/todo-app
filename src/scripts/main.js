

printAllTasks();

// Event listener for adding a new task
document.querySelector("#add-btn").addEventListener("click", () => {

  const taskToAdd = buildTaskObject(
    document.querySelector("#task-input").value,
    document.querySelector("#date-input").value,
    document.querySelector("#description-input").value
  );

  createTask(taskToAdd).then(() => {
    printAllTasks();
  });
});


// Event listener for entire task container element

document.querySelector("#task-container").addEventListener("click", () => {
  if (event.target.classList.contains("delete-btn")) {

    const taskId = event.target.id.split("-")[1];
    deleteTask(taskId)
    .then(() => {
      printAllTasks()
    })
  } else if(event.target.classList.contains("checkbox")){
    const taskId = event.target.id.split("-")[1];
    if(document.querySelector(`#checkbox-${taskId}`).checked){
      markAsComplete(taskId)
    } else {
      markAsIncomplete(taskId)
    }

  }
});




