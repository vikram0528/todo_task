let inputs = document.getElementById("title");
let btn1  =  document.getElementById("add");
let btn2  = document.getElementById("update"); 
let txt = document.getElementById("detail");
let main = document.getElementById("div2");
let createId = 0, getId;
btn2.style.display = "none";

function addtask()
{
  	 
    if(inputs.value.trim() === '')
	{
	  alert("you need to write something");
	}
	else{
		
    // create btn		
    var ele1 = document.createElement('div');
	var _title = document.createElement('h4');
	var _para = document.createElement('p');
	var editbtn = document.createElement("BUTTON");
	var delbtn = document.createElement("BUTTON");
	
	//add class & Id
    ele1.id ="items-"+createId;
	ele1.className ="items";
	_title.className = "title";
	_para.className = "para";
	editbtn.className = "edit";
	delbtn.className = "delete";
	
	//add content
	_title.innerText = inputs.value; 
	_para.innerText = txt.value; 
	editbtn.innerText = "Edit";
	delbtn.innerText = "Delete";
	
	//load elements
	ele1.appendChild(_title);
	ele1.appendChild(_para);
	ele1.appendChild(editbtn);
	ele1.appendChild(delbtn);
	main.appendChild(ele1);
	
	//clear inputs
	inputs.value ="";
	txt.value = "";
	
	//increament id count
	createId++;
	
	//Delete items
	var deleteBtn = document.getElementsByClassName("delete");
	for(let i = 0; i<deleteBtn.length; i++){
		deleteBtn[i].addEventListener('click', delt)
	}
			
	//edit items
	var editBtns = document.getElementsByClassName("edit");
    	for(let x = 0; x < editBtns.length; x++){
			editBtns[x].addEventListener('click', (e)=>{
				let prnt = e.target.parentNode;
				console.log(prnt)
				btn1.style.display = "none";
	btn2.style.display = "inline-block";
				
				let _h = prnt.getElementsByClassName("title")[0];
				let _p = prnt.getElementsByClassName("para")[0];
				inputs.value = _h.innerText;
				txt.value = _p.innerText;
				getId = e.target.parentNode.id;
			})
			
		}
 
	}
	
}

function delt(){
	this.parentElement.remove();	
}  
	
btn2.addEventListener('click',function(e){
		
	    btn1.style.display = "inline-block";
		btn2.style.display = "none";
					let prnt1 = document.getElementById(getId)
					let _h1 = prnt1.getElementsByClassName("title")[0];
					let _p1 = prnt1.getElementsByClassName("para")[0];
					
				 _h1.innerText = inputs.value;
					_p1.innerText = txt.value;
					
		
		inputs.value = "";
		txt.value = "";


})


	
	
	