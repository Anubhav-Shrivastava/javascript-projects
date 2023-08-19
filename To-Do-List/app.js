const tasks = document.getElementById('input');
const addBtn = document.getElementById('button');
const taskList = document.getElementById('task-list');

let outPut = () => {
  if (tasks.value.trim() === '') {
    alert('Enter your task');
  } else {
    taskList.innerHTML += `
      <div class="listItem">
        ${tasks.value}
        <button class="dltBtn">Dlt</button>
      </div>
    `;
  }
  tasks.value = "";
};

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('dltBtn')) {
    event.target.parentNode.remove();
  }
});

addBtn.addEventListener('click', outPut);
