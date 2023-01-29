import { $authHost, $host } from "./index"

export const createStatus = async (titleStatus) => {
    const { data } = await $authHost.post("api/status/", { titleStatus })
    return data
}
export const getAllStatus = async () => {
    const { data } = await $host.get("api/status/")
    return data
}
export const getOneStatus = async (id) => {
    const { data } = await $host.get("api/status/" + id)
    return data
}


export const createCategory = async (title) => {
    const { data } = await $authHost.post("api/category", { title })
    return data
}
export const getAllCategory = async () => {
    const { data } = await $host.get("api/category/")
    return data
}
export const delitCategory = async (id) => {
    const { data } = await $authHost.delete("api/category/"+ id)
    return data
}



export const createRequest = async ( getRequest ) => {
    const { data } = await $authHost.post("api/request/", getRequest)
    return data
}
export const getAllRequest = async () => {
    const { data } = await $host.get("api/request/")
    return data
}
export const delitRequest = async (id) => {
    const { data } = await $authHost.delete("api/request/"+ id)
    return data
}

