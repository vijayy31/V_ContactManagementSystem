import express from "express"
import { showContacts, postContacts, deleteContacts, updateContacts } from "../controller/contact.controller.js";

const router = express.Router();

router.get("/",showContacts);
router.post("/",postContacts);
router.delete("/:id",deleteContacts);
router.put("/:id",updateContacts);


export default router;
