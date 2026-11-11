import express from 'express'
import { consultarProductoController, createtProductoController, deleteProductoController, updateProductoController } from '../controllers/producto.controller.js';


const router=express.Router();

router.post("/createproducto", createtProductoController)
router.get("/consultarproducto", consultarProductoController)
router.post("/updateproducto", updateProductoController)
router.post("/deleteproducto", deleteProductoController)

export default router