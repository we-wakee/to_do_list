const inputbox=document.getElementById('inputbox');
const addBtn=document.getElementById('addBtn');
const list=document.getElementById('list');

let edittodo=null;

const addTodo = ()=>{
    const inputText=inputbox.value;   

    if(inputText.length <= 0) {
        alert("edoti raayu raa saami");
        return false;
    }

    if(addBtn.value == "Edit"){
        edittodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value= "Add";
        inputbox.value="";
    }


    else{
        const li=document.createElement("li");
        const p=document.createElement("p");

        p.innerHTML=inputText;
        li.appendChild(p);

        list.appendChild(li);

        const EditBtn=document.createElement("button");
        EditBtn.innerText="Edit"      
        EditBtn.classList.add("btn","editbtn")
        li.appendChild(EditBtn);

        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="Remove";
        deleteBtn.classList.add("btn","deletebtn")
        li.appendChild(deleteBtn);

        list.appendChild(li);
        inputbox.value="";
    }

}

const updatetodo = (e) =>{

    if(e.target.innerHTML === "Remove"){
        list.removeChild(e.target.parentElement);  
        inputbox.value="";
    }

                                                                    
    if(e.target.innerHTML === "Edit"){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addBtn.value="Edit";
        edittodo=e;

    }
}

list.addEventListener('click',updatetodo);
addBtn.addEventListener('click',addTodo);


