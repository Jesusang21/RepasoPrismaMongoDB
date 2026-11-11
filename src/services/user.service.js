import { createUserModel, getUserModel } from "../models/user.model.js"
export function getUserService() {
    return getUserModel() 
}

export function createServiceUser(body) {
    const {email, username, name} = body

    return createUserModel(email, username, name)
}