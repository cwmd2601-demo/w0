
const myButton = document.querySelector('#myBtn');
// Add a click event listener to the button element
myButton.addEventListener('click', (event) => {
  let element = event.target; // Logs the element that triggered the event
  alert('Hello my class');
  myButton.style.color = "red";
  console.log ("element id triggering this event=" + element.id + " and content= " + element.innerHTML);
  
})