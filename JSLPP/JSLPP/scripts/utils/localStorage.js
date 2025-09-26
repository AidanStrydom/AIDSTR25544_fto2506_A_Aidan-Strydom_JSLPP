/**
 * Loads tasks from localStorage or initializes with initialTasks.
 * @returns {Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // If no tasks in storage, initialize with initialTasks from API
  try {
    const response = await fetch('https://jsl-kanban-api.vercel.app/');
    const data = await response.json();
    localStorage.setItem("tasks", JSON.stringify(data));
    console.log('Initial tasks fetched from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching initial tasks from API:', error);
    return [];
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

