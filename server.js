const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.json());

// Dummy data for users
let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', age: 35 },
];

// 1. Get all users
app.get('/users', (req, res) => {
  res.status(200).json({ success: true, data: users });
});

// 2. Get user details by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// 3. Add a new user
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const newUser = {
    id: users.length + 1, // Auto-increment ID
    name,
    email,
    age,
  };

  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});

// 4. Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({ success: true, data: deletedUser });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on.... http://localhost:${PORT}`);
});
