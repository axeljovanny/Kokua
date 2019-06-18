const express = require('express');
const router = express.Router();

const Alumno = require('../models/Alumno');
router.get('/users/login', (req, res) => {
    res.render('users/login');
});

router.get('/users/register', (req, res) => {
    res.render('users/register');
});

router.post('/users/register', async (req, res) => {
    const {nomAlu, apeAlu, emaAlu, numConAlu, carAlu, pasAlu} = req.body;
    const errors = [];
    if (!nomAlu) {
        errors.push({text: 'Escriba nombre del alumno'});
    }
    if (!apeAlu) {
        errors.push({text: 'Escriba apellidos del alumno'});
    }
    if (!emaAlu) {
        errors.push({text: 'Escriba correo electronico'});
    }
    if (!numConAlu) {
        errors.push({text: 'Escriba numero de control'});
    }
    if (!carAlu) {
        errors.push({text: 'Eliga carrera del alumno'});
    }
    if (!pasAlu) {
        errors.push({text: 'Escriba una contrasena'});
    }
    if (errors.length > 0) {
        res.render('users/register', {
            errors,
            nomAlu,
            apeAlu,
            emaAlu,
            numConAlu,
            carAlu,
            pasAlu
        });
    } else {
        const newAlu = new Alumno({
            nomAlu,
            apeAlu,
            emaAlu,
            numConAlu,
            carAlu,
            pasAlu
        });
        await newAlu.save();
        res.redirect('/alumnos');
    }
});



router.get('/alumnos', async (req, res) => {
    const alumnos = await Alumno.find();
    res.render('users/all-alumnos', {alumnos});
});

// Edit Alumnos
router.get('/alumnos/edit/:id', async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);

    res.render('users/edit-alumno', {alumno});
});

router.put('/alumnos/edit/:id', async (req, res) => {
    const {nomAlu,
        apeAlu,
        emaAlu,
        numConAlu,
        carAlu,
        pasAlu} = req.body;
    await Alumno.findByIdAndUpdate(req.params.id, {nomAlu,
        apeAlu,
        emaAlu,
        numConAlu,
        carAlu,
        pasAlu});
    res.redirect('/alumnos');
});

// Delete Alumnos
router.delete('/alumnos/delete/:id', async (req, res) => {
    await Alumno.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Alumno Deleted Successfully');
    res.redirect('/alumnos');
});
module.exports = router;
