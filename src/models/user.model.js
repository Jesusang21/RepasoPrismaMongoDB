import {db} from "../prisma/db.ts"
export function getUserModel() {
    return "getUserModel"
}

export async function createUserModel(name, description) {
   try {
    const user = await db.orm.productos.create({
        name, description
    })
     return `[${name}]  Se guardó exitosamente!!`
   } catch (error) {
    console.log(error)
    return "create fail"
   }
}