

printAllTasks();

// Event listener for adding a new task
document.querySelector("#add-btn").addEventListener("click", () => {

  const taskToAdd = buildTaskObject(
    document.querySelector("#task-input").value,
    document.querySelector("#date-input").value,
    document.querySelector("#description-input").value,
    false
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

  // --- CHECKBOX EVENT LISTENER ---//
  } else if(event.target.classList.contains("checkbox")){
    const taskId = event.target.id.split("-")[1]; // 14
    if(document.querySelector(`#checkbox-${taskId}`).checked){
      markAsComplete(taskId)
    } else {
      markAsIncomplete(taskId)
    }
    // ---- EVENT LISTENER FOR EDIT BUTTON --//
  } else if(event.target.classList.contains("edit-btn")){
    const taskId = event.target.id.split("-")[1];
    getOneTask(taskId)
    .then((singleTaskInfo) => {
      console.log(singleTaskInfo);
      document.querySelector(`#task-${taskId}`).innerHTML = buildEditForm(singleTaskInfo);
    })
  // --- EVENT LISTENER FOR EDIT SAVE BUTTON --//
  } else if(event.target.classList.contains("save-btn")){
    const itemId = event.target.id.split("-")[3];
    console.log(itemId);


    const editedName = document.querySelector(`#task-input-edit-${itemId}`).value;
    const editedDate = document.querySelector(`#date-input-edit-${itemId}`).value;
    const editedDescription = document.querySelector(`#description-input-edit-${itemId}`).value;
    const editedCompleted = document.querySelector(`#completed-edit-input-${itemId}`).value;

    const editedTaskObject = buildTaskObject(editedName, editedDate, editedDescription, editedCompleted)

    console.log(editedTaskObject);

    editTask(itemId, editedTaskObject)
    .then(printAllTasks)

  }
});




