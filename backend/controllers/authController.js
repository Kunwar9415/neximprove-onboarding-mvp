const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

exports.register = (req, res) => {
  const { name, email, password, gstin, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const hash = bcrypt.hashSync(password, 10);

  const query =
    "INSERT INTO users (name, email, password_hash, gstin, role) VALUES (?, ?, ?, ?, ?)";

  db.run(query, [name, email, hash, gstin, role], function (err) {
    if (err) {
      return res.status(400).json({ message: "User already exists" });
    }
    res.json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const match = bcrypt.compareSync(password, user.password_hash);
      if (!match) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      res.json({ token });
    }
  );
};

exports.profile = (req, res) => {
  db.get(
    "SELECT id, name, email, gstin, role FROM users WHERE id = ?",
    [req.user],
    (err, user) => {
      res.json(user);
    }
  );
};
