// Q5: Implement user management routes
// Code By - Sandeepan Chakraborty (21MIM10072)


let users = [];

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  users.push(req.body);
  res.json({ message: "User added" });
});

app.put('/users/:id', (req, res) => {
  users = users.map(u => u.id == req.params.id ? req.body : u);
  res.json({ message: "User updated" });
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

