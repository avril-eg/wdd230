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

function setChapterList() {
  localStorage.setItem('favBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('favBOMList'));
}

function displayList(item){
  let listItem = document.createElement("li");
  let listButton = document.createElement("button");
  listItem.textContent = item;
  listButton.textContent = "❌";
  listButton.classList.add('delete');
  list.append(listItem);
  listItem.append(listButton);
  listButton.addEventListener("click", function () {
    list.removeChild(listItem);
    deleteChapter(listItem.textContent);
    input.focus();
});

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.lenght - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

}