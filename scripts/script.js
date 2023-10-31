
const addElement = () => {
    let node = document.querySelector("#myHeaderB");

    console.log("node variable data type=" + typeof node);

    // Create element:
    let newText = "new p tag element.";
    const para = document.createElement("p");
    para.innerText = newText;

    let log = "newText variable data type=" + typeof newText;
    console.log(log);
    // Append to the node:
    node.appendChild(para);
    
  }

const removeElement = () => {
  document.querySelector("#myHeaderA").remove();
}
document.querySelector("#myHeaderA").addEventListener("click", removeElement);
document.querySelector("#myBtn").addEventListener("click", addElement);