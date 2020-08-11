var file;
var imagemap= [];

// for uploading file
function uploadFile(){
    
    if (event.target.files.length > 0) {
        file = event.target.files[0];
        
        var allewedExts =  /(\.jpg|\.jpeg|\.png|\.gif|.\bmp)$/i; 
        
        if (!allewedExts.exec(file.name)) { 
            alert('Invalid file type.Please upload a valid image file.'); 
            document.getElementById("file").value = null; 
            return ; 
        }  


        document.getElementById("img").src = URL.createObjectURL(event.target.files[0])
    }
}

// to display the uploaded image properties
function showProps() {    
    document.getElementById("prop").style.display   = "block";
    document.getElementById("imgName").innerHTML    = file.name;
    document.getElementById("mime").innerHTML       = file.type;
    document.getElementById("dimensions").innerHTML =  
    document.getElementById("img").width + " X " +  document.getElementById("img").height;          
}

// action for cancel button
function cancelDesc(){    
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}
// action for saving the description
function saveDesc(x,y){
    let desc = document.getElementById("desc"+x+"_"+y).value;
    
    let left = document.getElementById("img").offsetLeft;
    let top = document.getElementById("img").offsetTop;

    let final_x = (x - left);
    let final_y = (y - top);
    
    imagemap.push({'x' : final_x, 'y' : final_y, 'desc' : desc});
    if (imagemap.length == 1) {document.getElementById("list").style.display = "table";}
    var row = document.createElement('tr');
    row.innerHTML = "<td>" + final_x + "</td>" + 
                    "<td>" + final_y + "</td>" + 
                    "<td>"+ desc + "</td>"
    document.getElementById("list-body").append(row)
    document.getElementById("div"+x+"_"+y).style.display = "none";
    
    var redMark = document.createElement('div');
    document.body.appendChild(redMark);
    
    redMark.id = "mark"+x+"_"+y;
    redMark.className = "red-dot";
    
    redMark.style.left = x + 'px'; 
    redMark.style.top = y + 'px';
    var redMark_desc = document.createElement('div');
    redMark_desc.style.left = (x+9) + 'px'; 
    redMark_desc.style.top = y + 'px';
    redMark_desc.className = "tip";
    redMark_desc.innerHTML = desc;
    document.body.appendChild(redMark_desc);


}
function addDesc(){
    
    let x = this.event.pageX;
    let y = this.event.pageY;
    
    var descDiv = document.createElement('div');
    document.body.appendChild(descDiv);

    descDiv.id = "div"+x+"_"+y;
    descDiv.className = "desc"
    descDiv.style.left = x + 'px'; 
    descDiv.style.top = y + 'px';
    descDiv.innerHTML = "<label>Description [X - "+x+" | Y - "+y+"]</label><br><input type='text' required id='desc"+x+"_"+y+"'><br>"+
    "<button class='cancel' type='button' onclick='cancelDesc(this)' > cancel </button>"+
    "<button class='save' type='save' onclick='saveDesc("+x+","+y+")' > save </button>";
    document.getElementById("desc"+x+"_"+y).focus();

}