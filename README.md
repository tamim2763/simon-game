# jQuery Simon Game

A clone of the classic Simon memory game, built as a project to master DOM manipulation with jQuery.

### 🚀 Live Demo

[**Try the game live here!**](https://tamim2763.github.io/simon-game/)

---

### 📷 Screenshot

<img width="400" alt="home" src="https://github.com/user-attachments/assets/6daa8e05-856f-4150-a2bc-02b3354f0af0" />

---

### About This Project

This project is a browser-based Simon game built from scratch with HTML, CSS, and JavaScript. The primary goal was to practice and demonstrate advanced DOM manipulation techniques using the **jQuery** library.

The game challenges the user to repeat a growing sequence of colors and sounds. The logic is handled entirely in the browser using JavaScript.

---

### 🛠 Tech Stack

* **HTML5**
* **CSS3** (with custom animations for `pressed` and `game-over` states)
* **JavaScript (ES6+)**
* **jQuery**

---

### Core Features & Concepts Demonstrated

* **jQuery DOM Manipulation:** Used jQuery selectors (`$()`) to dynamically add/remove CSS classes for animations (`.pressed`, `.game-over`) and to update the `<h1>` with the current level and game status.
* **jQuery Event Handling:** Used jQuery's `.click()` and `.keypress()` methods to capture all user input (button clicks and key presses) to start the game and play the sequence.
* **Game Logic in JavaScript:** Implemented all game logic, including generating the random sequence (`gamePattern`), tracking user input (`userClickedPattern`), and checking the answer on each click.
* **Audio Playback:** Used JavaScript's `Audio` object to dynamically play the correct sound for each button press and game event.

---

### How to Run Locally

This is a static website. No server is required.

1.  Clone the repository:
    ```bash
    git clone https://github.com/tamim2763/simon-game.git
    ```
2.  Navigate to the project folder:
    ```bash
    cd simon-game
    ```
3.  **Open `index.html`** in your favorite browser.
