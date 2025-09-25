import { addNewTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

const toggleBtn = document.getElementById('modeToggle');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      body.classList.toggle('light');
    
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }); 

    // On page load, check saved preference
    window.onload = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        body.classList.remove('light', 'dark');
        body.classList.add(savedTheme);
      }
  };

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}
