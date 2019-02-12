// build and return an object that represents a single task

const buildTaskObject = (taskNameParam, taskDateParam, taskDescriptionParam) => {
    return {
        name: taskNameParam,
        dueDate: taskDateParam,
        description: taskDescriptionParam,
        completed: false
      };
}