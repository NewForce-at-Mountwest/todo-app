// returns a DOM component for one task

const buildSingleTask = (singleTaskObject) => {
    return `<div>
    <label>
      <input type="checkbox" />
      <span>${singleTaskObject.name}</span>
      <p>${singleTaskObject.description}</p>
      <p>${singleTaskObject.dueDate}</p>
    </label>
  </div>`
}