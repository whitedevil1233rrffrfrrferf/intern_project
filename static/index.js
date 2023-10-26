const name = document.getElementById("search_bar");
const tableRows = document.querySelectorAll("tbody tr");

name.addEventListener("keyup", function(e) {
    const searchValue = e.target.value.toLowerCase();
    tableRows.forEach(function(row) {
        const nameCell = row.querySelector("#Name"); // Target the cell with id="Name"
        const nameValue = nameCell.textContent.toLowerCase();
        if (nameValue.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none"; // Hide the row
        }
    });
});
const selectedItem=document.getElementById("project")
selectedItem.addEventListener("change",function(){
    var searchContent=selectedItem.value.toLowerCase()
    tableRows.forEach(function(row){
        var projectCell=row.querySelector("#Project")
        var projectValue=projectCell.textContent.toLowerCase();
        if (projectValue.includes(searchContent)){
            row.style.display="";
        }else{
            row.style.display="none"
        }
    })
})

const selectedDesignation=document.getElementById("designation")
selectedDesignation.addEventListener("change",function(){
    var searchContent=selectedDesignation.value.toLowerCase()
    tableRows.forEach(function(row){
        var designationCell=row.querySelector("#Designation")
        var designationValue=designationCell.textContent.toLowerCase()
        if (designationValue.includes(searchContent)){
            row.style.display="";
        }
        else{
            row.style.display="none"
        }
    })
})
const selectedEmploymentStatus=document.getElementById("employment_status")
selectedEmploymentStatus.addEventListener("change",function(){
    var searchContent=selectedEmploymentStatus.value.toLowerCase()
    tableRows.forEach(function(row){
        const employmentCell=row.querySelector("#employment_status")
        const employmentValue=employmentCell.textContent.toLowerCase()
        if (employmentValue.includes(searchContent)){
            row.style.display="";
        }
        else{
            row.style.display="none"
        }
    })
})
