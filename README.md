# Task Board

A modern, responsive task management board built with React and Tailwind CSS.  
Easily add, filter, move, and delete tasks with a beautiful UI and persistent local storage.

---

## ✨ Features

### 📝 Add, Move, and Delete Tasks

- **Add Task:** Click the "+ Add Task" button to open a glassmorphism modal and add a new task with a title and description.
- **Move Task:** Change a task's status (e.g., To Do, In Progress, Done) directly from the board.
- **Delete Task:** Remove tasks you no longer need.

### 🔍 Filter Tasks

- Filter tasks by status: **All, To Do, In Progress, Done**.
- Active filter is visually highlighted.

### 🎨 Modern UI & UX

- **Gradient backgrounds** and **glassmorphism modal** for a sleek look.
- Attractive, accessible buttons with smooth transitions.
- Responsive layout for desktop and mobile.

### 💾 Persistent Storage

- All tasks are saved in your browser's **localStorage**.
- Your tasks remain after refreshing or closing the browser.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** (utility-first styling)
- **LocalStorage** (for persistent data)

---

## 📁 Project Structure

```
src/
  components/
    AddTaskModal.jsx   // Modal for adding tasks
    TaskList.jsx       // Task list and task item components
    TaskCard.jsx
  App.jsx              // Main app logic and layout
  index.css
```

---

## 📌 Customization

- **Colors & Fonts:** Easily change Tailwind classes for your preferred palette or font.

---

## 🙏 Credits

- UI inspired by modern productivity apps.
- Built with ❤️ using React and Tailwind CSS by Anish Bauri.
