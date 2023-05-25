const express = require('express');
const Appointments = require('../models/Appointments');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');

router.post('/getAppointments',  async (req, res) => {

    try {
      const app = await Appointments.find()
      res.send(app)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

  router.put('/updateapp/:id', fetchuser, async (req, res) => {
    try {
        // Create a newNote object
        const newApp = {};
        newApp.Status = "Approved";

        // Find the note to be updated and update it
        let appointment = await Appointments.findById(req.params.id);
        if (!appointment) { return res.status(404).send("Not Found") }

        if (appointment.username !== req.username) {
            return res.status(401).send("Not Allowed");
        }
        appointment = await Appointments.findByIdAndUpdate(req.params.id, { $set: newApp }, { new: true })
        res.json({ appointment });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})








  module.exports = router