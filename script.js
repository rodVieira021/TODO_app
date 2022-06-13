const btnSubmit = document
  .querySelector(".btn-submit")
  .addEventListener("submit", (e) => {
    e.preventDefault();
  });

//create task

const addTask = () => {
  const task = document.querySelector("form input");
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
};
