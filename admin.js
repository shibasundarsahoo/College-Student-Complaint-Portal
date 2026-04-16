// ---------------- DATA ----------------
let complaints = JSON.parse(localStorage.getItem("complaints")) || [
    {
        name: "Rahul",
        roll: "23011040",
        category: "Hostel & Mess",
        details: "Bad Food",
        status: "Pending"
    }
];

// ---------------- NAVIGATION ----------------
function showSection(section) {
    document.getElementById("complaintsSection").style.display = "none";
    document.getElementById("settingsSection").style.display = "none";

    document.getElementById(section).style.display = "block";
}

// Sidebar active highlight
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", function(){
        document.querySelectorAll(".sidebar a").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// ---------------- TABLE ----------------
function renderTable() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    complaints.forEach((c, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${c.name}</td>
                <td>${c.roll}</td>
                <td>${c.category}</td>
                <td>${c.details}</td>
                <td><span class="status ${c.status.toLowerCase()}">${c.status}</span></td>
                <td>
                    ${c.status === "Pending"
                        ? `<button class="done-btn" onclick="markResolved(${index})">Done</button>`
                        : `✔ Done`
                    }
                    <button class="delete-btn" onclick="deleteComplaint(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    updateCounts();
}

// ---------------- COUNTS ----------------
function updateCounts() {
    document.getElementById("total").innerText = complaints.length;
    document.getElementById("pending").innerText =
        complaints.filter(c => c.status === "Pending").length;
    document.getElementById("resolved").innerText =
        complaints.filter(c => c.status === "Resolved").length;
}

// ---------------- ACTIONS ----------------
function markResolved(index) {
    complaints[index].status = "Resolved";
    saveData();
}

function deleteComplaint(index) {
    if(confirm("Delete this complaint?")) {
        complaints.splice(index, 1);
        saveData();
    }
}

function saveData() {
    localStorage.setItem("complaints", JSON.stringify(complaints));
    renderTable();
}

// ---------------- SETTINGS ----------------
function saveSettings() {
    localStorage.setItem("adminName", document.getElementById("adminName").value);
    localStorage.setItem("theme", document.getElementById("theme").value);
    alert("Settings Saved!");
}

function loadSettings() {
    document.getElementById("adminName").value =
        localStorage.getItem("adminName") || "";
    document.getElementById("theme").value =
        localStorage.getItem("theme") || "light";
}

// ---------------- LOGOUT ----------------
function logout() {
    if(confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        window.location.href = "login.html"; // change if needed
    }
}

// ---------------- INIT ----------------
renderTable();
loadSettings();
showSection('complaintsSection');