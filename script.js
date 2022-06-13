



const btnSubmit = document
.querySelector("form")
.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});


//create task

function addTask() {
  const task = document.querySelector("form input");
  const list = document.createElement("ul");
  const li = document.createElement("li")
  li.innerHTML = `
  <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
  <i class="fa fa-trash" onclick="removeTask(this)"></i>`
list.insertBefore(li, list.children[0])
};
