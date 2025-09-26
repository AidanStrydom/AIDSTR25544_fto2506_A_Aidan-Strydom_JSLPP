import { openTaskModal } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;
  const circle = document.createElement("div");
  circle.className = "circle";
  if (task.priority === "high") {
    circle.style.backgroundColor = "#e5484d"; // Red for High priority
  } else if (task.priority === "medium") {
    circle.style.backgroundColor = "#f5a623"; // Orange for Medium priority
  } else {
    circle.style.backgroundColor = "#49c4e5"; // green for Low priority or default
  }
  taskDiv.appendChild(circle);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
