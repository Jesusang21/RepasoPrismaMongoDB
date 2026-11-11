import express from 'express'
import { createtUserController } from '../controllers/user.controlle.js';


const router=express.Router();

router.get('/getuser', (req,res)=>{
    res.send('ruta de usuario')
})

router.post("/createuser", createtUserController)
// router.post("/createproducto", createtProductoController)

export default router