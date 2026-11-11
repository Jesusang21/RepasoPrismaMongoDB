import { consultarServiceProducto, createServiceProducto, deleteServiceProducto, updateServiceProducto } from "../services/producto.service.js"

export async function createtProductoController(req,res) {
    const body = req.body
    res.status(200).send(await createServiceProducto(body))
}
export async function consultarProductoController(req,res) {
    const codigoProducto = req.body.codigo
    res.status(200).send(await consultarServiceProducto(codigoProducto))
}
export async function updateProductoController(req,res) {
    const body = req.body
    res.status(200).send(await updateServiceProducto(body))
}
export async function deleteProductoController(req,res) {
    const codigoProducto = req.body.codigo
    res.status(200).send(await deleteServiceProducto(codigoProducto))
}

