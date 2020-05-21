 var selectedRow = null;



function WhenFormSubmit() { 
     
    var  GetDataForm=ReddataFromForm();
//console.log(Medicinedata);   
                 //insertRecord(GetDataForm);

    // ResetFields();
              // ResetFields();

    //  update_Info(GetDataForm);
     //Update_Info(Data);
     // update_Info(GetDataForm);
        //  ResetFields();
      if ( validationData()) {
     if (selectedRow == null){
            InsertData(GetDataForm);
           ResetFields();
               }
        else{
            Update_Info(GetDataForm);
            ResetFields();
     
     
        } }}


 function ReddataFromForm() { 
     
     var Medicinedata = {};
   Medicinedata["MedicineID"] = document.getElementById("MID").value;
    Medicinedata["MedicineName"] = document.getElementById("MN").value;
    Medicinedata["ProductionDate"] = document.getElementById("PD").value;
    Medicinedata["ExpiryDate"] = document.getElementById("ED").value;
    return Medicinedata;
}
     
     /*
          Medicinedata.push(MID, MN,PD,ED); 
console.log(Medicinedata);     
     
        } 

var MID =document.getElementById("MID").value;

var MN=document.getElementById("MN").value;

var PD=document.getElementById("PD").value;

var ED=document.getElementById("ED").value;
/*
var option4=document.getElementById("op4");

var Sc=document.getElementById("sp2");

var Ul=document.getElementById("ull");*/
/*

var btn=document.getElementById("butt");

var Medicinedata = [];


console.log(Medicinedata);     

var Medicinedata = [];


 function AddMedicine() { 
          Medicinedata.push(MID, MN,PD,ED); 
console.log(Medicinedata);     
     
        } */

function InsertData(info) {
    var table = document.getElementById("Medicinelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = info.MedicineID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = info.MedicineName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = info.ProductionDate;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = info.ExpiryDate;
    cell4 = newRow.insertCell(4);
     cell4.innerHTML = `<button  onClick="Edit_Info(this)">Edit</button >
                       <button  onClick="DeleteItem(this)">Delete</button >`;
    
}


function ResetFields() {
    document.getElementById("MID").value = "";
    document.getElementById("MN").value = "";
    document.getElementById("PD").value = "";
    document.getElementById("ED").value = "";
    selectedRow = null;
}
 
function Edit_Info(Tag) {
    selectedRow = Tag.parentElement.parentElement;
    document.getElementById("MID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("MN").value = selectedRow.cells[1].innerHTML;
    document.getElementById("PD").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ED").value = selectedRow.cells[3].innerHTML;
}


function Update_Info(Data) {
    selectedRow.cells[0].innerHTML = Data.MedicineID;
    selectedRow.cells[1].innerHTML = Data.MedicineName;
    selectedRow.cells[2].innerHTML = Data.ProductionDate;
    selectedRow.cells[3].innerHTML = Data.ExpiryDate;
}



function DeleteItem(Item) {
    if (confirm('Are you sure to delete this record ?')) {
        row = Item.parentElement.parentElement;
        document.getElementById("Medicinelist").deleteRow(row.rowIndex);
           ResetFields();
    }
}


function validationData() {
    flag = true;
    if (document.getElementById("MID").value == "" || document.getElementById("MN").value =="" || document.getElementById("PD").value == "" || document.getElementById("ED").value == "" ) {
        
        flag = false;
        
        document.getElementById("ValidationError").classList.remove("hide");
    } else {
        flag = true;
        if (!document.getElementById("ValidationError").classList.contains("hide"))
            document.getElementById("ValidationError").classList.add("hide");
    }
    return flag;
}




