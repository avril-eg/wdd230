const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener("click", function () {
  if (input.value !=='') {
    let listItem = document.createElement("li");
    let listButton = document.createElement("button");
    listItem.textContent = input.value;
    listButton.textContent = "❌";
    list.appendChild(listItem);
    listItem.append(listButton);
       
    listButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });
  
    input.focus();
    input.value = "";
  }}
  );