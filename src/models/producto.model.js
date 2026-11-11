import {db} from "../prisma/db.ts"

export async function createProductoModel(codigo, name, description) {
   try {
    const user = await db.orm.productos.create({
        codigo, name, description
    })
     return `[${name}]  Se guardó exitosamente!!`
   } catch (error) {
    console.log(error)
    return "create fail"
   }
}
export async function consultarProductoModel(codigo) {
   try {
    const data = await db.orm.productos.where({ codigo: codigo }).first();
    //todos los productos
    // const data = await db.orm.productos.all();
     return data
   } catch (error) {
    console.log(error)
    return "consult fail"
   }
}
export async function updateProductoModel(codigo, descripcion) {
   try {
    await db.orm.productos.where({ codigo: codigo }).update({ description: descripcion });
     return  `Se actualizó exitosamente!!`
   } catch (error) {
    console.log(error)
    return "update fail"
   }
}
export async function deleteProductoModel(codigo) {
   try {
    await db.orm.productos.where({ codigo: codigo }).delete();
     return  `Se eliminó exitosamente!!`
   } catch (error) {
    console.log(error)
    return "delete fail"
   }
}