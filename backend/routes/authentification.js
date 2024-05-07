const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../connection');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Users WHERE Email = ? AND Password = ?';
    connection.query(query, [email, password], async (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Erreur lors de la vérification des informations d\'identification' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Identifiants invalides' });
      }

      const user = results[0];
      const userId = user.UserID;
      const role = user.UserType;
      const token = jwt.sign({ userId, role }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
      res.status(200).json({ token, role });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const checkQuery = 'SELECT * FROM Users WHERE Email = ?';
    connection.query(checkQuery, [email], async (error, results) => {

      if (error) {
        return res.status(500).json({ message: 'Erreur lors de la vérification de l\'email' });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: 'Un utilisateur avec cet email existe déjà' });
      }

      // Hasher le mot de passe
      // const hashedPassword = await bcrypt.hash(password, 10);

      // Insérer l'utilisateur dans la base de données
      const insertQuery = 'INSERT INTO Users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)';
      connection.query(insertQuery, [firstName, lastName, email, password], (error, results) => {
        if (error) {
          return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
        }

        // Générer un token JWT
        const userId = results.insertId;
        const role = 'Regular';
        const token = jwt.sign({ userId, role }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });

        res.status(201).json({ token, role });
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
