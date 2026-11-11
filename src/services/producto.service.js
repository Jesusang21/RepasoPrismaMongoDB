import { consultarProductoModel, createProductoModel, deleteProductoModel, updateProductoModel } from "../models/producto.model.js"


export function createServiceProducto(body) {
    const {codigo, name, descripcion} = body

    return createProductoModel(codigo, name, descripcion)
}
export function consultarServiceProducto(codigo) {

    return consultarProductoModel(codigo)
}

export function updateServiceProducto(body) {
    const {codigo, descripcion} = body
    return updateProductoModel(codigo, descripcion)
}
export function deleteServiceProducto(codigo) {
    return deleteProductoModel(codigo)
}