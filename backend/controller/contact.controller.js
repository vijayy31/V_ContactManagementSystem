import Contacts from "../model/Contact.model.js"

export const postContacts =async (req, res)=>{
    
    try {
        const {name, email, phone, company, status}= req.body;

        if(!name || !company){
            return res.status(400).json({error: "Name or Company is missing"})
        }

        const contact = new Contacts({
            name:name.trim(),
            email:email.trim(),
            phone:phone.trim(),
            company:company.trim(),
            status:status
        })

        if(contact){
            await contact.save();
            res.status(200).json(contact)
        }

        else{
            res.status(400).json({error:"Invalid contact data"});
        }

    } catch (error) {
        console.log(`Error in postContacts controller ${error}`);
        res.status(500).json({error:`Internal server error ${error}`});
    }

}

export const showContacts = async(req,res)=>{
    try {
        
        const {status,search} = req.query;
        let filter = {};
        
        if(status)filter.status=status;

        if(search){
            const regex = new RegExp(search,"i");

            filter.$or = [
                {name:regex},
                {company:regex}
            ]
        }

        const filteredContacts = await Contacts.find(filter).sort({createdAt:-1});
        //
        res.status(200).json(filteredContacts);

    } catch (error) {
        console.log(`Error in showContacts controller ${error}`);
        res.status(500).json({error:"Internal server error"});
    }
}

export const deleteContacts = async (req,res)=>{
    try {
        
        const {id}= req.params;
        
        const contact = await Contacts.findById(id);
        if(contact){
            await Contacts.findByIdAndDelete(id);
            res.status(200).json({message: "Contact deleted successfully"});
        }
        else{
            res.status(400).json({error:"user not found"})
        }
        

    } catch (error) {
        console.log(`Error in deleteContacts controller ${error}`);
        res.status(500).json({error:"Internal Server error"});
    }
}

export const updateContacts = async (req,res)=>{
    try {
        const {id} = req.params;
        const {status} = req.body;

        const contact = await Contacts.findById(id);

        //not required as i am changing only the status
        // if(!name || !company){
        //     return res.status(400).json({error:"Name or Company is missing"});
        // }
        
        if(contact){
            // contact.name = name;
            // contact.company = company;
            contact.status = status;
            // contact.phone =  phone;
            // contact.email = email;

            await contact.save();
            res.status(200).json(contact);
        }

        else{
            res.status(400).json({error: "User not found"});
        }

    } catch (error) {
        console.log(`Error in updateContacts controller ${error}`);
        res.status(500).json({error:"Internal server error"});
    }
}