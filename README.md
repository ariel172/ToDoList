# 📝 To Do List App

A simple and responsive To Do List web application built with **HTML**, **SASS**, and **JavaScript**. It allows users to add tasks interactively with basic input validation and a clean design.

## 🌐Live Demo

Access the deployed version here:

[Vercel] (https://todolist-ariel.vercel.app)

## 🚀 Features

- Add new tasks with a click or Enter key
- Basic input validation with visual feedback
- Responsive design (mobile-first)
- Modern UI using the Poppins Google Font

## 🛠️ Technologies Used

- HTML5
- SASS (SCSS)
- JavaScript (Vanilla)
- Google Fonts

## 📱 Responsive Design

The layout adapts to various screen sizes:

- 📱 **Mobile**: stacked input and button, optimized font sizes
- 💻 **Tablet/Desktop**: horizontal layout for form input/button

## 📂 Project Structure

```
📁 project-folder
│
├── index.html         # HTML structure
├── style.scss         # SASS styling (responsive)
├── style.css          # Compiled CSS from SASS
├── script.js          # JavaScript functionality
└── README.md          # Project documentation
```

## 🔍 How It Works

- The form listens for the `submit` event.
- If the input is not empty, a new task (`<li>`) is created and added to the list.
- If empty, an error message is displayed with a red border.
- Error clears automatically as the user starts typing again.

## 🧪 Demo

To try it out locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/ariel172/ToDoList
   ```
2. Open `index.html` in your browser.

## ✨ Author

Made with ❤️ by [Yamien Ariel](https://github.com/ariel172)

## 📄 License

This project is open-source and free to use under the MIT License.
