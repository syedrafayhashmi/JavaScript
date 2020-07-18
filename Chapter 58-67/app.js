// Task 1
var main =  document.getElementById("main-content");
for(var x=0;x<main.children.length;x++){
    document.write(main.children[x].innerHTML);
}
var render =  document.getElementsByClassName("render");
for(var y=0;y<render.length;y++){
    document.write(render[y].innerHTML);
}

document.getElementById("first-name").value = "SYED RAFAY"
document.getElementById("last-name").value = "HASHMI"
document.getElementById("email").value = "abc@gmail.com"

// Task 2