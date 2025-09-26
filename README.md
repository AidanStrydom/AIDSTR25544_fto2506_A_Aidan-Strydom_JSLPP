
## Overview

This is my Khanban board, made with HTML, vanilla CSS and JavaScript. The objectives of this website are to showcase my ability to create functional, responsive and clean and maintanaible code. Present in the application are a sidebar, heading area and task area. Tasks are displayed in the task area under the corresponding column, todo, doing or done. When a task is clicked on it will display details about it in a modal "pop-up", and the details are editable. There is also an add task button that allows more tasks to be added, and then sorted into the correct column. Buttons are also present in the sidebar section, aloowing the user to change the board between light and dark mode, and to close the sidebar. There is also responsive design so that when the window size for the page changes between desktop and mobile view it displays accordingly. Initial task data is taken from a web API, and there is a loading display and error to load message when loading fails. Information is stored on local storage so that on page refresh the previous entered information is kept.

## Technologies

The application is made to match a Figma design, with HTML styled by vanilla CSS in a seperate file, and is then given functionality with JavaScript. The JavaScript files are in multiple seperate files, split based on their specific function. 

## Code Readability and Maintainability

- JSDoc comments as well as comments in HTML and CSS are added to provide a roadmap to understand the code more easily at a glance, without needing to decode the entire project to make sense of it.
- Code is seperated into seperate files with specific purposes, allowing for easier management of specific aspects.

## Expected Outcome

A fully functional Kanban app that:

- Dynamically fetches and displays tasks.
- Supports task editing, deletion, and persistent storage through local storage.
- Has a responsive, mobile-friendly sidebar with a theme toggle switch.
- App deployed to **Netlify** with a custom, readable URL.
- Uses modular, well-documented code that is easy to maintain and scale.

### Initial Data Fetching & Loading State

- **Fetch tasks dynamically** from an API: https://jsl-kanban-api.vercel.app/

- **Replace any hard-coded task data**, to ensure the application receives the most up-to-date tasks.

- **Display a loading message** while the tasks are being fetched so that users are informed the data is loading.
- If fetching fails, **show an error message** to alert users to the issue.

### Data Persistence

- **Store fetched tasks in local storage** to ensure data persists across page reloads.
- On startup, **load tasks from local storage** and display them in their respective columns (To Do, Doing, Done) to maintain an organized task board.

### Task Editing & Deletion

- Allow users to **edit task details** (title, description, status) in a modal. Upon saving, the task should reflect the updated data on the board and in local storage.
- Implement a **delete button** within the modal to allow users to remove tasks. A confirmation message should appear before deleting a task, and if confirmed, the task will be removed from both the task board and local storage.

### Sidebar Interaction

- Implement a **sidebar** that contains all required elements as shown in the Figma design.
- Allow the sidebar to be **toggleable**, so users can hide or show it based on their preferences.
- Provide a mobile version of the sidebar that can be **accessed from the app logo**, and ensure it matches the design and functionality of the desktop sidebar.

### Mobile Sidebar (Menu) Functionality

- On mobile, the sidebar should function as a **menu** accessible from the top of the screen.
- Include the **theme toggle** switch in the mobile menu and ensure all features match the desktop sidebar, as shown in the Figma design.
- Ensure that the mobile menu is **closable**, allowing users to dismiss it for an unobstructed view of the tasks.

## Loom

https://www.loom.com/share/030c96350aca4c21ad57b0349683d786?sid=5e630eb1-eeae-4a1b-bdf7-4d4456297585
