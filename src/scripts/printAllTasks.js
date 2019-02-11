const printAllTasks = () => {
    document.querySelector("#task-container").innerHTML = "";
    getAllTasks()
    .then(allTasks => {
      allTasks.forEach(singleTask => {
          document.querySelector("#task-container").innerHTML += buildSingleTask(singleTask)
      })
    })
}
