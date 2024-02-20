const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

let chaptersArray = getChapterList () || [];
chaptersArray.forEach(chapter =>{
  displayList(chapter);
} )

button.addEventListener("click", () => {
  if (input.value !=='') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});


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