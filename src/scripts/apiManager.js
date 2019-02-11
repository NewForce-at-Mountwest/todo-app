const createTask = taskObject => {
  return fetch("http://localhost:8088/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObject)
  });
};

const getAllTasks = () => {
  return fetch("http://localhost:8088/tasks").then(tasks => tasks.json());
};

// .then((response) => {