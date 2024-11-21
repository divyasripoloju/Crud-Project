document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    
    const user = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('userEmail').value,
        dob: document.getElementById('userDob').value,
        contactNumber: document.getElementById('userPhone').value,
    };

    
    await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });

 
    fetchUsers();
});

async function fetchUsers() {

    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json();

    
    const userList = document.getElementById('userList');
    userList.innerHTML = users
        .map(
            user => `
        <li id="user-${user.id}">
            ${user.fullName} - ${user.email} - ${user.contactNumber || 'N/A'}
            <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
        </li>`
        )
        .join('');
}

async function deleteUser(userId) {
    
    await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'DELETE',
    });

    document.getElementById(`user-${userId}`).remove();
}


fetchUsers();
