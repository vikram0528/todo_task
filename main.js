let input = document.getElementById("title");
let btn1  =  document.getElementById("add");
let btn2  = document.getElementById("update"); 
let txt = document.getElementById("detail")
// let delbtn = document.getElementById("del");
// let editbtn = document.getElementById("edit");


 


	btn1.addEventListener("click", function(){
		 
    if(input.value === ' '){
		alert("you need to write something")
	}
	else{
	 console.log("hi")	
	}  
	
	var ele2 = document.createElement('li')
	ele2.innerText = input.value; 
	ele2.id = "myli"
	title.value ="";
	document.getElementById("myul").appendChild(ele2);
    
    var ele3 = document.createElement('li')
	ele3.innerText = txt.value; 
	ele3.id = "myli"
	txt.value = " ";
	document.getElementById("myul").appendChild(ele3);	
	
	
	var editbtn = document.createElement("BUTTON");
	editbtn.innerText = "Edit";
	document.getElementById("myul").appendChild(editbtn);
	
	editbtn.onclick = function(){
		
		document.getElementById("div2").style.visibility = "hidden";
		document.getElementById("ele2").innerText = "john";
			
	}	

	var delbtn = document.createElement("BUTTON");
	delbtn.innerText = "Delete";
	document.getElementById("myul").appendChild(delbtn);
	
	var i;
	for (i = 0; i < delbtn.length; i++) {
	  delbtn[i].onclick = function() {
		var row = document.getElementById("myul")
		row.style.display = "none";
	  }
	}


});

/*delbtn.addEventListener("click", function(){
	
	let rem = document.getElementById("div2");
	rem.remove();
	
}); */

editbtn.addEventListener("click", function(){
		
	
	
}); 