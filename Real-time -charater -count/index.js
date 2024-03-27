const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("total-counter")
const reamingChar = document.getElementById("Reamining-counter")
textArea.addEventListener("keyup", () => {
  // console.log("key is presses")

  updateCounter();

});
updateCounter()
function updateCounter(){
   totalChar.innerHTML= textArea.value.length
   reamingChar.innerHTML = 
   textArea.getAttribute("maxLength")
   - textArea.value.length
   
}
