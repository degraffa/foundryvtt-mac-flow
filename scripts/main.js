//import MacroKeyboardManager from "./MacroKeyboardManager.js";

const keyboardManager = new KeyboardManager();

document.addEventListener('keydown', (event) => {
  console.log("asdf: " + event.key + ", " + keyboardManager.downKeys.size);
});