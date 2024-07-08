const contactModel = require("../models/contactModel");

const createContact = async (req, resp, next) => {
  try {
    const data = req.body;

    const image = req.file.filename;
    const dataForDb = { ...data, image };

    const saveData = new contactModel(dataForDb);
    const response = await saveData.save();

    resp.json(response);
  } catch (error) {
    next(error);
  }
};

const readContact = async (req, resp, next) => {
  try {
    const contacts = await contactModel.find();
    if (!contacts) {
      return resp.json("no contacts found");
    }

    resp.json(contacts);
  } catch (error) {
    next(error);
  }
};

const getSingleContact = async (req, resp, next) => {
  try {
    const singleContact = await contactModel.findById(req.params.id);
    if (!singleContact) {
      return resp.json("no contact found");
    }

    resp.json(singleContact);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, resp, next) => {
  try {
    const deletedContact = await contactModel.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return resp.json("no contact found for delete");
    }

    resp.json({ message: "deleted successfully", contact: deletedContact });
  } catch (error) {
    next(error);
  }
};
const updateContact = async (req, resp, next) => {
  try {
    console.log(req.body);
    console.log(req.file);

    // const updatedContact = await contactModel.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: req.body },
    //   { new: true }
    // );

    // if (!updatedContact) {
    //   return resp.json("failed to update");
    // }

    // resp.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContact,
  readContact,
  getSingleContact,
  deleteContact,
  updateContact,
};
