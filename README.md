# Book Library App

A modern and responsive book management app built with React. This project was developed as the final assignment for the Frontend Development course (FFU1200) and showcases key frontend principles including component-based architecture, API integration, CRUD operations with Firebase, and modular CSS styling using BEM methodology.

## Features

- Login system using localStorage (admin/1234)

- View book list stored in Firebase Firestore

- Add books manually via a form with validation

- Search for books from the Open Library API

- Delete books from Firestore

- Responsive design using custom media queries

- Component styling using CSS and BEM naming convention

- Fallback image if book image is missing

- Navigation bar dynamically adjusts links based on login status


## Technologies Used

React (Vite) – SPA structure with functional components

React Router DOM – page routing

Firebase Firestore – database for persistent storage

Open Library API – book search integration

CSS (vanilla) – scoped styling with BEM and variables

localStorage – login session persistence

## Folder Structure
src/
├── assets/ # Icons and fallback image
├── components/ # Reusable UI components (Header, Footer, BookCard)
├── css/ # Modular CSS files 
│ ├── variables.css
│ ├── reset.css
│ ├── mediaqueries.css
│ ├── form.css, header.css, etc.
├── pages/ # Main views (Home, Login, etc.)
├── Firebase.js # Firebase configuration
├── App.jsx # Route structure
└── main.jsx # Entry point

---

##  How to Run the Project

1. Clone the repository:  
   `https://github.com/moa-reidar/final_project.git`  
2. Install dependencies:  
   `npm install`  
3. Start the server:  
   `npm run dev`

>  Ensure you have Firebase configured and that the Firestore database includes a `books` collection.


## Login Credentials

- **Username:** `admin`  
- **Password:** `1234`

---

## Notable Concepts

### 1. Storage Event Handling  
Used to dynamically update the navbar when login/logout occurs.  
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

### 2. Fallback Image  
Fallback icon is shown if the book image is missing or broken.

---

## Future Improvements

- ✏️ Add book editing support  
- Use Firebase Auth for secure login  
- Filter by genre/type  
- Add better error feedback for API/network issues  

---

## Developed By

- **Moa**  
- Frontend Development – FFU1200  
- Høyskolen Kristiania – 2025
