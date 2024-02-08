const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener("click", function () {
    let inputText = input.value;
  
    const listItem = document.createElement("li");
    const listButton = document.createElement("button");
    listItem.textContent = inputText;
    listButton.textContent = "❌";
    listItem.append(listButton);
    list.append(listItem);
    listButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });
  
    input.focus();
    input.value = "";
  });