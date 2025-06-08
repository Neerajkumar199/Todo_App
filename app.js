// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul  = document.querySelector("ul");

// btn.addEventListener("click",function(){
//        let item = document.createElement("li");
//        item.innerText = inp.value ;
//        let delBtn = document.createElement("button");
//        delBtn.innerText ="delete";
//        delBtn.classList.add("delete");
//        item.appendChild(delBtn);
//        ul.appendChild(item);
//        // console.log(inp.value);
//        inp.value = "";

// });

// ul.addEventListener("click",function(event){
//       if(event.target.nodeName =="BUTTON"){
//         let listItem = event.target.parentElement;
//        //  console.log(listItem);
//         listItem.remove();
//         console.log("deleted");

//       }
     
// });

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//        delBtn.addEventListener("click",function(){
//               let par = this.parentElement;
//               console.log(par);
//               par.remove();

//        });
// } 



// FRESH CODE 


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

        if(inputBox.value ===''){
              alert("You must write something !");

        }
        else{
              let li = document.createElement("li");
              li.innerHTML = inputBox.value;
              listContainer.appendChild(li);
              let span = document.createElement("span");
              span.innerHTML ="\u00d7";
              li.appendChild(span);
        }
        inputBox.value = "";
        saveData();

}
listContainer.addEventListener("click",function(e){
       if(e.target.tagName === "LI"){
              e.target.classList.toggle("checked");
              saveData();
       }
       else if (e.target.tagName="SPAN"){
              e.target.parentElement.remove();
              saveData();

       }
},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Fixed typo: setIteam → setItem
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();





