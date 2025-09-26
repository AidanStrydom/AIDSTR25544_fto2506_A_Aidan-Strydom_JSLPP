/**
 * Loads tasks from localStorage or initializes with initialTasks.
 * @returns {Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {

  const stored = pullFromStorage();
  if (stored) {
    return stored
  }

  // If no tasks in storage, initialize with initialTasks from API
  try {
    const response = await fetch('https://jsl-kanban-api.vercel.app/');
    const data = await response.json();
    localStorage.setItem("tasks", JSON.stringify(data));

    const priorityTasks = pullFromStorage(); // Ensure priority field is added and sorted
    return priorityTasks;
  } catch (error) {
    console.log('Error fetching initial tasks from API:', error);
    return [];
  }
}

export function pullFromStorage() {
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      // Default to 'low' if priority is missing
      const priorityTasks = JSON.parse(stored)
        .map(task => ({ ...task, priority: task.priority || 'low' }))
        .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

      localStorage.setItem("tasks", JSON.stringify(priorityTasks)); // Update storage with priority field
      return priorityTasks;
    } catch (err) {
      console.log("Error retrieving tasks from localStorage:", err);
    }
  }
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  console.log("Saving tasks to storage:", tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

