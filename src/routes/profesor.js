const express = require('express');
const router = express.Router();

const Profesor = require('../models/Profesor');
router.get('/users/login', (req, res) => {
    res.render('users/login');
});

router.get('/users/register', (req, res) => {
    res.render('users/register');
});

router.get('/users/regPro', (req, res) => {
    res.render('users/regPro');
});

router.post('/users/regPro', async (req, res) => {
    const {nomPro, apePro, emaPro, cedProPro, pasPro} = req.body;
    const errors = [];
    if (!nomPro) {
        errors.push({text: 'Escriba nombre del profesor'});
    }
    if (!apePro) {
        errors.push({text: 'Escriba apellidos del profesor'});
    }
    if (!emaPro) {
        errors.push({text: 'Escriba correo electronico'});
    }
    if (!cedProPro) {
        errors.push({text: 'Escriba cedula profesional'});
    }
    if (!pasPro) {
        errors.push({text: 'Escriba una contrasena'});
    }
    if (errors.length > 0) {
        res.render('users/regPro', {
            errors,
            nomPro,
            apePro,
            emaPro,
            cedProPro,
            pasPro
        });
    } else {
        const newPro = new Profesor({
            nomPro,
            apePro,
            emaPro,
            cedProPro,
            pasPro
        });
        await newPro.save();
        res.redirect('/profesores');
    }
});

router.get('/profesores', async (req, res) => {
    const profesores = await Profesor.find();
    res.render('users/all-profesores', {profesores});
});

// Edit Alumnos
router.get('/profesores/edit/:id', async (req, res) => {
    const profesor = await Profesor.findById(req.params.id);

    res.render('users/edit-profesor', {profesor});
});

router.put('/profesores/edit/:id', async (req, res) => {
    const {nomPro,
        apePro,
        emaPro,
        cedProPro,
        pasPro} = req.body;
    await Profesor.findByIdAndUpdate(req.params.id, {nomPro,
        apePro,
        emaPro,
        cedProPro,
        pasPro});
    res.redirect('/profesores');
});

// Delete Alumnos
router.delete('/profesores/delete/:id', async (req, res) => {
    await Profesor.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Profesor Deleted Successfully');
    res.redirect('/profesores');
});
module.exports = router;