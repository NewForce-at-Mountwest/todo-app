// returns a DOM component for one task

const buildSingleTask = (singleTaskObject) => {
    return `<div>
    <label>
      <input type="checkbox" />
      <span>${singleTaskObject.name}</span>
      <p>${singleTaskObject.description}</p>
      <p>${singleTaskObject.dueDate}</p>
    </label>
    <a class="btn-floating btn-small waves-effect waves-light orange"><i id="delete-${singleTaskObject.id}" class="material-icons delete-btn">delete</i></a>
  </div>`
}