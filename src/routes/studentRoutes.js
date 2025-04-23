// src/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// --- Student CRUD (from previous step) ---
router.post('/', protect, authorize('AdminInstitucion'), studentController.createStudent);

router.get('/', protect, authorize('AdminInstitucion', 'Profesor', 'AdminDistrito', 'AdminMinisterio'), studentController.getAllStudents);

router.get('/:studentId', protect, authorize('AdminInstitucion', 'Profesor', 'AdminDistrito', 'AdminMinisterio'), studentController.getStudentById); // Renamed :id to :studentId

router.put('/:studentId', protect, authorize('AdminInstitucion'), studentController.updateStudent); // Renamed :id to :studentId

module.exports = router;