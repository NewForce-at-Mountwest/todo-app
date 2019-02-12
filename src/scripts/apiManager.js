const createTask = taskObject => {
  return fetch("http://localhost:8088/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObject)
  });
};

const deleteTask = taskId => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
    method: "DELETE"
  });
};
const getAllTasks = () => {
  return fetch("http://localhost:8088/tasks").then(tasks => tasks.json());
};

const markAsComplete = idParam => {
  return fetch(`http://localhost:8088/tasks/${idParam}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({completed: true})
  });
};

const markAsIncomplete = idParam => {
  return fetch(`http://localhost:8088/tasks/${idParam}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({completed: false})
  });
};
