const express = require('express');
const router = express.Router();
const connection = require('../connection');
const authenticateToken = require('../middleware/verifyToken');

router.get('/getprofile', authenticateToken, (req, res) => {
    console.log("getprofile :req.user", req.user);
    try {
        const userId = req.user.userId; 
        console.log("userId", userId);
        const query = 'SELECT * FROM Users WHERE UserID = ?';
        connection.query(query, [userId], (error, results) => {
            if (error) {
                console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
                return res.status(500).json({ message: 'Erreur lors de la récupération du profil de l\'utilisateur' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'Profil utilisateur non trouvé' });
            }

            const userProfile = results[0];
            res.status(200).json({ userProfile });
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
        res.status(500).json({ message: 'Erreur lors de la récupération du profil de l\'utilisateur' });
    }
});

router.get('/getrentedcars/:userId', authenticateToken, (req, res) => {
    console.log("req.params.userId", req.params.userId);
    try {
        const userId = req.params.userId;
        console.log("Fetching rented cars for user:", userId);
        const query = 'SELECT * FROM Rentals WHERE UserID = ?';
        connection.query(query, [userId], (error, results) => {
            if (error) {
                console.error("Error fetching rented cars:", error);
                return res.status(500).json({ message: 'Error fetching rented cars' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'No rented cars found for the user' });
            }

            const rentedCars = results;
            res.status(200).json({ rentedCars });
        });
    } catch (error) {
        console.error("Error fetching rented cars:", error);
        res.status(500).json({ message: 'Error fetching rented cars' });
    }
});


module.exports = router;
