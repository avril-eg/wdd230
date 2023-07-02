const copyrightyear = document.getElementById("year");
copyrightyear.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Updated: ${document.lastModified}`;

// visit count
const today = new Date();
const userStat = {};
userStat.currentDate = today;
let visited = ""
if (localStorage.getItem("visited")) {
  	visited += localStorage.getItem("visited");
} else {
	localStorage.setItem("visited", today)
	visited += localStorage.getItem("visited");
}


function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

difference = dateDiffInDays(new Date(visited), today);

document.getElementById("visit_count").textContent = difference;