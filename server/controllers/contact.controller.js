import Contact from "../models/contact.model.js";

// ➕ CREATE Contact
export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📄 READ All Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 READ Contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ UPDATE Contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact updated successfully", contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ DELETE Contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🗑️ DELETE All Contacts
export const deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.status(200).json({ message: "All contacts deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
