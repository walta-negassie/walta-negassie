/* Reset some defaults */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

header {
    background: #2c3e50;
    color: #fff;
    padding: 1rem 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

section {
    width: 90%;
    margin: 2rem auto;
}

h2 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.project-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.project-card button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: #2980b9;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.project-card button:hover {
    background: #3498db;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

form input, form textarea {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form button {
    padding: 0.5rem 1rem;
    border: none;
    background: #27ae60;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

form button:hover {
    background: #2ecc71;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background: #2c3e50;
    color: #fff;
    margin-top: 2rem;
}

