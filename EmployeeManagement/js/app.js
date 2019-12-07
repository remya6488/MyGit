
// to load all the employees into the table, invoked on formload, also after each action in the employee data
function loadEmployees(){
	
	document.getElementById("list").innerHTML = ""
	var list = getAllEmployees()
	// no employee added, show message and the new employee form
	if (list.length == 0) {
		var no_data_row = document.createElement("tr");
		no_data_row.innerHTML = "<td colspan='6' style='text-align:center;'>No employee added.</tr>"
		document.getElementById("list").appendChild(no_data_row);
		showEmpForm();
		return;
	}
	// list the employees and hide the employee form
	hideEmpForm();
	var listHtml = "" 
	list.forEach(
		function(item,index){
			var row = document.createElement("tr");
			row.innerHTML = "<th scope='row'>"+ (index + 1) +"</th>"+
					"<td>"+item.employeeId+"</td>"+
					"<td>"+item.getFullName()+"</td>" +
					"<td>"+item.age+"</td>"+
					"<td>"+item.department+"</td>" + 
					"<td><i id='del_"+ item.employeeId +"' class='fas fa-trash-alt icn ' onclick='onDeleteClick(\""+item.employeeId+"\")' style='z-index:2;' ></i> </td>"
					
			row.id = "row_"+item.employeeId;
			row.setAttribute('title', "click to edit");
			document.getElementById("list").appendChild(row);
			row.addEventListener("click", function(){ showEmpForm(item)}, false);
			
		}
	)
	
}

// to show the Employee Form element
function showEmpForm(item){
	document.getElementById("empId").value = "";
	var form = window.document.forms[0];
	if (document.getElementsByClassName("selected")[0])
		document.getElementsByClassName("selected")[0].className = "";
	if (arguments.length == 0){
		form.reset();
	} else	{
		event.target.parentElement.className = "selected";
		document.getElementById("empId").value = arguments[0].employeeId;
		document.getElementById("fname").value   = item.firstName;
		document.getElementById("lname").value   = item.lastName;
		document.getElementById("age").value     = item.age;
		document.getElementById("dept").value = item.department;
		
	}
	form.style.display = "";
	
	document.getElementById("top-icons").innerHTML = "<i class='fas fa-times close' onclick=\"hideEmpForm()\"></i>";

}

// to hide the Employee Form element
function hideEmpForm(){
	if (document.getElementsByClassName("selected")[0])
		document.getElementsByClassName("selected")[0].className = "";
	window.document.forms[0].style.display = "none";
	document.getElementById("top-icons").innerHTML = "<i class='fas fa-user-plus act-icn-head' onclick='showEmpForm()'></i>"
}

// form submission (Add/Update employee)
function onFormSubmit(){
	var empId = document.getElementById("empId").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var age   = document.getElementById("age").value;
	var dept  = document.getElementById("dept").value;

	if (empId == ""){
		var newEmpId = addEmployee(new Employee(fname, lname, age, dept,""))
		if ((newEmpId == null) || (newEmpId == undefined) || (newEmpId == "")){
			alert("some error occured..");return; 
		}
	} else 
		updateEmployee(empId,new Employee(fname, lname, age, dept,empId))

	document.getElementById("empId").value    = "" ;
	document.getElementById("fname").value    = "" ;
	document.getElementById("lname").value    = "" ;
	document.getElementById("age").value      = "" ;
	document.getElementById("dept").selected  = "" ;
	loadEmployees();
	alert("saved successfully!!");
	event.preventDefault;		// to prevent the form submission to server side
}

// delete icon action (Delete employee)
function onDeleteClick(empId){
	
	event.stopPropagation();			// to prevent event bubbling
	if (empId == "") {alert("some error occured"); return}
	
	var confirmed = confirm("Do you want to delete?")
	if (confirmed){
		deleteEmployee(empId);
		loadEmployees()				// reload the list 
		return;
		}
}

