# Crud-Project-registration


This project is a full-stack application for managing user registrations. It supports the following functionalities:

- Create a user.
- View the list of users.
- Delete a user.

## **Technologies Used**
- **Frontend:** HTML, CSS, JavaScript 
- **Backend:** Java (Spring Boot)
- **Database:** MySQL


## **Features**
1. **Create Users:** Add new user registrations with details like name, email, date of birth, and phone number.
2. **View Users:** Display a list of registered users.
3. **Delete Users:** Remove a user from the database and UI.

Project Structure
Front Folder
Contains the files for the user interface:

index.html: Main HTML page.
style.css: CSS for styling.
script.js: JavaScript for handling interactions.
Back Folder
Contains the files for the server and database:

UserManagementApplication.java: Main application class.
UserController.java: Handles API endpoints.
User.java: Entity class for the user.
UserRepository.java: Data access layer.
UserService.java: Contains business logic.
application.properties: MySQL configuration.
data.sql: Initial data for the database.

Here’s the modified version without slashes in the folder structure:

User Management Application
This project is a simple application for managing user registrations. It supports creating, viewing, and deleting users.

Technologies Used
HTML, CSS, JavaScript: For the user interface.
Java (Spring Boot): For the server-side logic.
MySQL: For the database.
**Project Structure**
**Front Folder**
Contains the files for the user interface:

index.html: Main HTML page.
style.css: CSS for styling.
script.js: JavaScript for handling interactions.
**Back Folder**
Contains the files for the server and database:

UserManagementApplication.java: Main application class.
UserController.java: Handles API endpoints.
User.java: Entity class for the user.
UserRepository.java: Data access layer.
UserService.java: Contains business logic.
application.properties: MySQL configuration.
data.sql: Initial data for the database.



**Setup Instructions**
Step 1: Clone the Repository
Clone the project to your computer and go to the project folder.

Step 2: Back Folder Setup
Navigate to the back folder.
Open the application.properties file and update the MySQL configuration with your credentials.
Start the Spring Boot server with the appropriate command. The server will run at http://localhost:8080.
Step 3: Front Folder Setup
Navigate to the front folder.
Open the index.html file in your browser.
Step 4: Test the Application
Use the form to add new users, view the list of users, and delete users by clicking the "Delete" button.
The frontend communicates with the backend API running at http://localhost:8080.


**API Endpoints**
Create User
Method: POST
URL: /api/users
Payload:

**{
    "fullName": "John Doe",
    "email": "johndoe@example.com",
    "dob": "1995-07-20",
    "contactNumber": "1234567890"
}**
Get All Users
Method: GET
URL: /api/users

Delete User
Method: DELETE
URL: /api/users/{id}



**Database Setup**
Create a MySQL database named user_management.
Create the users table with the following structure:

**CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    contact_number VARCHAR(15),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);**
 Populate the database with initial data:

**INSERT INTO users (full_name, email, dob, contact_number)
VALUES
('Alice Smith', 'alice@example.com', '1990-05-15', '9876543210'),
('Bob Johnson', 'bob@example.com', '1985-11-22', '1234567890');**
