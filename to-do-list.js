//select relevant elements
const addbtn = document.querySelector(".addbtn");
const textbox = document.querySelector(".textbox");
const items = document.querySelector(".items");

//add a new task 
addbtn.addEventListener("click", function() {
    let task = textbox.value; //gets input from text box
    let newitem = document.createElement("li");//creates a new list item element
    newitem.classList.add("listitem"); //adds a new class to the list item
    let newbtn = document.createElement("button"); //creates a new button element
    newbtn.classList.add("btn"); //adds a new class to the button
    newbtn.innerHTML = "x";
    newitem.innerHTML = task; //creates a new text node. input from textbox is put into the text node. adds that text node to the end of the list of children of 'newitem'.
    let checkmark = document.createElement("a");
    checkmark.classList.add("check")
    checkmark.innerHTML = "<i class='fa fa-fw fa-check'></i>";
    newitem.appendChild(newbtn);
    newitem.appendChild(checkmark);
    items.appendChild(newitem); //adds the node, "newitem" to the end of the list of children of the parent node 'item'.
    textbox.value = '';
});

//remove task when clicking the close button
items.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) { // target identifies the element on which the event occurred and which may be its descendant.
        let child = e.target.parentNode;
        e.target.parentNode.parentNode.removeChild(child);
    }
});

//strikethrough task and add a checkmark on click 
items.addEventListener('click', function(e){
    if (e.target.classList.contains("listitem")) {
        e.target.classList.toggle("strike");
        let checky = e.target.getElementsByClassName("check");
        checky[0].classList.toggle("hide-check");       
    } 
});
