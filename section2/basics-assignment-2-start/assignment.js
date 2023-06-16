const task3Element = document.getElementById("task-3");

function simplyAlert() {
  alert("This is a simple message!");
}

function myFunction(name) {
  alert(`The name entered is ${name}!`);
}

simplyAlert();
myFunction("Anirudh");

task3Element.addEventListener("click", simplyAlert);

function brandNew(str1, str2, str3) {
  return str1 + " " + str2 + " " + str3;
}

let result = brandNew("This is what", "we are", "concatinating");
alert(result);
