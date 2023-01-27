import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (name, email, password) => {
    const { data } = await $host.post("api/user/register", { name, email, password })//role
    localStorage.setItem("token", data.jwt)
    const decode = jwt_decode(data.jwt)
    const user = {
        id: decode.id,
        name: decode.name,
        email: decode.email,
        role: decode.role
    }
    localStorage.setItem('user', JSON.stringify(user))

    return decode
}

export const login = async ( email, password) => {
    const { data } = await $host.post("api/user/login", { email, password })
    localStorage.setItem("token", data.jwt)
    const decode = jwt_decode(data.jwt)
    const user = {
        id: decode.id,
        name: decode.name,
        email: decode.email,
        role: decode.role
    }
    localStorage.setItem('user', JSON.stringify(user))

    return decode
}

export const chack = async () => {
    const { data } = await $authHost.get("api/user/auth")
    
    localStorage.setItem('token', data.token)
    const decode = jwt_decode(data.token)
    const user = {
        id: decode.id,
        name: decode.name,
        email: decode.email,
        role: decode.role
    }
    localStorage.setItem('user', JSON.stringify(user))
    return decode
}