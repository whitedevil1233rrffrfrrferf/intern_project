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

