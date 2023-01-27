import { $authHost, $host } from "./index"

export const createStatus = async (titleStatus) => {
    const { data } = await $host.authHost("api/status/", { titleStatus })

    return data
}

export const getAllStatus = async () => {
    const { data } = await $authHost.get("api/status/")
    
    return data
}
export const getOneStatus = async (id) => {
    const { data } = await $authHost.get("api/status/" + id)
    
    return data
}