const express = require('express');
const router = express.Router();
const { sendjournal } = require('../Controllers/journalController/sendJournal')
const { sendconference } = require('../Controllers/conferenceController/sendconference')
const { getjournal } = require('../Controllers/journalController/getjournal.js')
const { getconference } = require('../Controllers/conferenceController/getconference.js')
const { sendtodb } = require('../Controllers/sendDataroute')
const { editjournal } = require('../Controllers/journalController/editjournal')
const { editconference } = require('../Controllers/conferenceController/editconference')
const { getfacultynames } = require('../Controllers/userControllers/getfacultynames')
const { getyearslist } = require('../Controllers/journalController/getyearslist')
const { getdoilist } = require('../Controllers/journalController/getdoilist')

router.post("/sendjournal", sendjournal);
router.post("/getjournal", getjournal);
router.post("/editjournal", editjournal);

router.post("/sendconference", sendconference);
router.post("/getconference", getconference);
router.post("/editconference", editconference);

router.post("/getfacultynames", getfacultynames);
router.post("/getyearslist", getyearslist);
router.post("/getdoilist", getdoilist);

router.post("/senddata", sendtodb);



module.exports = router;
