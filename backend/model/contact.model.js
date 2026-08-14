import mongoose, { mongo } from "mongoose";

const contactSchema = new mongoose.Schema({

    name : {
        type:String,
        required:true
    },

    email : String,
    phone : String,
    company : String,

    status : {
        type: String,
        enum: ["Interested", "Follow-up", "Closed"],
        default: "Interested"
    }

},{timestamps:true})

const Contacts = mongoose.model("Contact",contactSchema);
export default Contacts;