import { getUserService,createServiceUser } from "../services/user.service.js"

export async function getUserController(req,res) {
    res.status(200).send(await getUserService())
}
export async function createtUserController(req,res) {
    const body = req.body
    res.status(200).send(await createServiceUser(body))
}

