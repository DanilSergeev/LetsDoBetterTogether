import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const { data } = await $host.post("api/user/register", { email, password })//role
    localStorage.setItem("token", data.jwt)
    const decode = jwt_decode(data.jwt)
    const user = {
        id: decode.id.id,
        email: decode.id.email,
        role: decode.id.role
    }
    localStorage.setItem('user', JSON.stringify(user))

    return decode
}

export const login = async (email, password) => {
    const { data } = await $host.post("api/user/login", { email, password })
    localStorage.setItem("token", data.jwt)
    const decode = jwt_decode(data.jwt)
    const user = {
        id: decode.id.id,
        email: decode.id.email,
        role: decode.id.role
    }
    localStorage.setItem('user', JSON.stringify(user))

    return decode
}

export const chack = async () => {
    const { data } = await $authHost.get("api/user/auth")
    localStorage.setItem('token', data.jwt)
    const decode = jwt_decode(data.jwt)
    const user = {
        id: decode.id.id,
        email: decode.id.email,
        role: decode.id.role
    }
    localStorage.setItem('user', JSON.stringify(user))
    return decode
}