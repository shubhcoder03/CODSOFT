var Intext = document.getElementById("text");
var addBtn = document.getElementById("addnew");

addBtn.onclick = function(){
    var items = document.getElementById("innerList");
    var sub_items = document.createElement("li");
    sub_items.innerHTML = `<span>${Intext.value}</span><button style="background-color : red; color:white; cursor:pointer; padding : 5px 10px; border-radius:10px" onclick="Delete(this)">Delete</button>`;
    items.appendChild(sub_items);
    Intext.value="";
    Save();
};

function Delete(button){
    var sub_items = button.parentElement;
    sub_items.remove();
    Save();
}

function Save(){
    var array = [];
    var ele = document.querySelectorAll("#innerList li");
    ele.forEach(li=>{
        var task = li.querySelector("span").textContent;
        array.push(task);
    });
    localStorage.setItem("tasks",JSON.stringify(array));
}

function Load(){
    var items = document.getElementById("innerList");
    var array = JSON.parse(localStorage.getItem("tasks")) || [];
    array.forEach(taskText=>{
         var sub_items = document.createElement("li");
         sub_items.innerHTML = `<span>${taskText}</span><button  style="background-color : red; color:white; cursor:pointer; padding : 5px 10px; border-radius:10px" onclick="Delete(this)">Delete</button>`;
         items.appendChild(sub_items);
    });
}

document.addEventListener("DOMContentLoaded", Load);