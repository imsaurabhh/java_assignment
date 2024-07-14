# Spring Boot and React CRUD Application

This repository contains a CRUD (Create, Read, Search) application built with Spring Boot for the backend REST API and React for the frontend user interface.

## Getting Started

### Prerequisites
To run this application, you need to have the following prerequisites:

- Java Development Kit (JDK) 8 or above
- Node.js and npm (Node Package Manager)
- MySQL database (with a schema named `customer`)

### Setup

1. Clone the repository to your local machine.
`git clone https://github.com/imsaurabhh/java_assignment.git`

2. Set up the MySQL database:
- Create a MySQL database with the name `customers`
- Update the database connection properties in the application.properties file located in the customer_CRUD folder. Set the correct values for spring.datasource.url, spring.datasource.username, and spring.datasource.password

3. Build and run the Spring Boot backend:
- Open a terminal and navigate to the customer_CRUD folder
- Build the backend application using Maven: `./mvnw clean package`
- Run the backend application: `./mvnw spring-boot:run`

4. Install dependencies and run the frontend:
- Open another terminal and navigate to the Customer_Front folder
- Install dependencies using npm: `npm install`
- Start the React development server: `npm start`

5. Access the application:
- Open a web browser and go to http://localhost:3000 to access the React frontend

# Application Structure

The repository is structured as follows:
- `customer_CRUD`: Contains the Spring Boot backend application
- `Customer_front`: Contains the React frontend application

- The Spring Boot backend follows a standard structure with packages for different components:
- `com.customer_crud`: Base package
- `com.customer_crud.model`: Contains the data transfer objects (DTOs) or entity classes
- `com.customer_crud.dao`: Contains the repository interfaces for interacting with the database
- `com.customer_crud.service`: Contains the service interfaces and implementations
- `com.customer_crud.controller`: Contains the REST API controllers

The React frontend code is located in the Customer_front folder

# How to Use

- The React frontend provides a user interface to interact with the backend REST API
- You can add, view all, and search by name items through the frontend
- The backend stores the items in the MySQL database
- Update the application.properties file with your own database connection details if needed

# React App

- Navigate to the project directory: cd react-app
- Install the dependencies: npm install
- Start the development server: npm start
- Open your browser and visit `http://localhost:3000` to see the application


## Usage
- The home page displays a list of all items retrieved from the database
- Click on the "Add" link in the navigation bar to add a new item
