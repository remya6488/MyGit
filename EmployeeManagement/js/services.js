
var employees = []			// Initializes the employee array

// Employee constructor function
function Employee(firstName,lastName,age,department,id){
	
	this.employeeId = id || "";
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.department = department;
	
	// private method to autogenerate the employee id for the new employees
	// scope inside this constructor function only, no access outside this Employee()
	var setEmpId = function() {
		this.employeeId = "E-" + (employees.length + 1001);
		return this.employeeId;
	}
	
	if (this.employeeId == "")	// id generation needed only in case of new employees
		this.employeeId = setEmpId();
	
	this.getFullName = function() {
		return this.firstName + " " + this.lastName;
	}
}
function objectToString(obj){
		var objectString = "{ ";
		Object.keys(obj).forEach(	// for each key(property) of the object, execute the function
			function(key,indx){
				if(typeof obj[key] != "function")	// consider only the properties, discard functions
					objectString = objectString + '"' + key + '":"' + obj[key] +'", '
				}
		)
		objectString = objectString.substr(0,objectString.length-2) + " }"
		return objectString;
	}
// service to add a new employee [parameter is a new employee Object]
function addEmployee(employee){	
	employees.push(employee);
	console.log("\nAdded new employee [" + employee.employeeId +"] : " + objectToString(employee) )
	return employee.employeeId;
}

// service to delete an employee by its unique id [parameter is employee's EmployeeId]
function deleteEmployee(empId){
	var del_empId = empId;
	var indx = employees.findIndex( function(val,indx,arr){  return del_empId == val.employeeId; }); //to find the array index of employee by EmployeeId
	employees.splice(indx,1);	
	console.log("\nDeleted employee [" + empId +"]")
	del_empId = "";
}

// service to update an employee by its unique id [parameters are employee's EmployeeId, and the updated employee object]
function updateEmployee(empId,employee){
	
	chk_empId = empId;		// supporting value to be used in matching of EmployeeId in  find()
	var emp = employees.find( function(val,indx,arr){  return chk_empId == val.employeeId});
	
	console.log("\nUpdate [" + empId +"] => Before  : " + objectToString(emp) );
	emp.firstName = employee.firstName;
	emp.lastName = employee.lastName;
	emp.age = employee.age;
	emp.department = employee.department;
	console.log("\n\tAfter : " + objectToString(employee));
	
	return emp
}

// service to get all the employees
function getAllEmployees(){
	console.log("\nEmployee list : ");
	employees.forEach(		// for each item in the array, execute the function
		function(item,indx){
			var emp = item;
			console.log("\n\t" + objectToString(emp))
		}
	)
	return employees;
}


/*			[------------------------ Code for testing the service functionalities ------------------------]


// adding employees
	addEmployee(new Employee("FirstName1", "LastName1",31,"Accounts"));
	addEmployee(new Employee("FirstName2", "LastName2",32,"Development"))
	addEmployee(new Employee("FirstName3", "LastName3",33,"Sales"))
	addEmployee(new Employee("FirstName4", "LastName4",34,"Accounts"))
	addEmployee(new Employee("FirstName5", "LastName5",35,"Sales"))
	
//list all employees in the array
	getAllEmployees();

// modify employee with unique id - E-1001
	updateEmployee("E-1004",new Employee("FirstNameModified", "LastName4",34,"Accounts"));
	console.log("Modified E-1001")
	getAllEmployees();


//delete employee with unique id - E-1003
	deleteEmployee("E-1003");
	console.log("Deleted E-1003")
	getAllEmployees();

*/