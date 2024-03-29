const express = require("express");
const { JournalDataModel } = require("../../models/journal");

exports.getjournal = async (req, res) => {
  let jou = [];
  console.log("req.query");
  console.log(req.body);
  // console.log(req.body);
  if (
    req.body.Designation === "coordinator" ||
    req.body.Designation === "hod"
  ) {
    jou = await JournalDataModel.find({
      Data_Submitting_Author_department: req.body.Department,
    });

    const filters = req.query;
    const filteredUsers = jou.filter((user) => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });

    jou = filteredUsers;
  } else if (req.body.Designation === "faculty") {
    let asFirstAuthor = await JournalDataModel.find({
      Data_Submitting_Author_department: req.body.Department,
      First_Author_name: req.body.name,
    });

    let asSubmittingAuthor = await JournalDataModel.find({
      First_Author_name: {$ne : req.body.name},
      Data_Submitting_Author_department: req.body.Department,
      Data_Submitting_Author_name: req.body.name,
    });

    let asOtherAuthor = await JournalDataModel.find({
      First_Author_name: {$ne : req.body.name},
      Data_Submitting_Author_name: {$ne : req.body.name},
      Names_of_Other_Author_From_DDU: new RegExp(".*" + req.body.name + ".*"),
    });

    jou = [].concat(asFirstAuthor, asOtherAuthor, asSubmittingAuthor);
  }

  res.send({
    message: "user is valid",
    data: jou,
  });
};