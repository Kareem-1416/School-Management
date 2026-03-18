function addStudent() {
    let name = document.getElementById("name").value;
    let studentBranch = document.getElementById("Branch").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || studentBranch === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = studentBranch;
    cell3.innerHTML = marks;

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("Branch").value = "";
    document.getElementById("marks").value = "";
}