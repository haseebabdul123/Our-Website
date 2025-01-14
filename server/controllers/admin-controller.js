const Contact = require("../models/contact-model")
const User = require("../models/user-model")

const getAllUser = async (req , res) =>{
    try {
        const users = await User.find({} , {password:0})
        console.log(users)
        if(!users || users.length === 0 ){
            return res.status(404).json({message : "No Users Found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

const getAllContact = async (req,res) =>{
    try {
        const contacts = await Contact.find()
        if(!contacts || contacts.length === 0 ){
            return res.status(404).json({message : "No Contacts Found"})
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req,res) =>{
    try {
        const id = req.params.id
        await User.deleteOne( {_id : id})
        return res.status(200).json({message : "User deleted successfully"})
    } catch (error) {
        next(error)
    }
}

const deleteContact = async (req,res) =>{
    try {
        const id = req.params.id
        await Contact.deleteOne( {_id : id})
        return res.status(200).json({message : "Contact deleted successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUser ,getAllContact ,deleteUser , deleteContact}