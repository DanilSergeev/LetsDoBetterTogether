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


