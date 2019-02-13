// returns a DOM component for one task

const buildSingleTask = (singleTaskObject) => {
  // let checkBoxHTML = "";
  // if(singleTaskObject.completed){
  //   checkBoxHTML = `<input class="checkbox" id="checkbox-${singleTaskObject.id}" type="checkbox" checked />`
  // } else {
  //   checkBoxHTML =
  // }

    return `<div class="task" id="task-${singleTaskObject.id}">
    <label class="checkbox">
    <input class="checkbox" id="checkbox-${singleTaskObject.id}" type="checkbox" ${singleTaskObject.completed === "true"? "checked" : ""}/>
      <span>${singleTaskObject.name}</span>
    </label>
      <p>${singleTaskObject.description}</p>
      <p>${singleTaskObject.dueDate}</p>
    <a class="btn-floating btn-small waves-effect waves-light orange"><i id="delete-${singleTaskObject.id}" class="material-icons delete-btn">delete</i></a>
    <a class="btn-floating btn-small waves-effect waves-light orange"><i id="edit-${singleTaskObject.id}" class="material-icons edit-btn">edit</i></a>
  </div>`
}