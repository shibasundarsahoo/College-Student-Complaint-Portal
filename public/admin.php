<?php
// frontend only
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard</title>

<link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

<div class="admin-layout">

    <!-- SIDEBAR -->
    <div class="sidebar">
        <h2>Admin Panel</h2>
        <ul>
            <li onclick="showSection('dashboard')" class="active">📊 Dashboard</li>
            <li onclick="showSection('complaints')">📋 Complaints</li>
            <li onclick="showSection('admin')">👨‍💼 Add Admin</li>
        </ul>
    </div>

    <!-- MAIN CONTENT -->
    <div class="main">

        <!-- DASHBOARD -->
        <div id="dashboard">
            <h2>Dashboard</h2>

            <div class="cards">
                <div class="card">Total Complaints: <b>120</b></div>
                <div class="card">Pending: <b>45</b></div>
                <div class="card">Resolved: <b>75</b></div>
            </div>
        </div>

        <!-- COMPLAINT SECTION -->
        <div id="complaints" style="display:none;">
            <h2>All Complaints</h2>

            <div class="search-bar">
                <input type="text" id="search" placeholder="Search..." onkeyup="searchTable()">
            </div>

            <div class="table-box">
                <table id="complaintTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg No</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Rahul</td>
                            <td>2101010001</td>
                            <td>Hostel</td>
                            <td class="status-pending">Pending</td>
                        </tr>

                        <tr>
                            <td>Amit</td>
                            <td>2101010002</td>
                            <td>Academic</td>
                            <td class="status-resolved">Resolved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ADD ADMIN -->
        <div id="admin" style="display:none;">
            <h2>Add Admin</h2>

            <div class="card">
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Employee ID">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">

                <button class="btn-primary">Create Admin</button>
            </div>
        </div>

    </div>
</div>

<script src="assets/js/script.js"></script>

</body>
</html>