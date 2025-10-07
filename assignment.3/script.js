// सभी ज़रूरी DOM एलिमेंट्स को सेलेक्ट करें
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// कार्य जोड़ने के लिए फंक्शन
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // <li> एलिमेंट बनाना
  const li = document.createElement("li");
  li.textContent = taskText;

  // Delete बटन बनाना
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // बटन को task के साथ जोड़ना
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // इनपुट बॉक्स खाली करना
  taskInput.value = "";

  // Event Listener: delete पर क्लिक होने पर task हटे
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Event Listener: क्लिक करने पर complete mark/unmark हो
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
}

// Add बटन पर क्लिक होने पर कार्य जोड़ें
addTaskBtn.addEventListener("click", addTask);

// Enter key दबाने पर भी कार्य जोड़ें
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
