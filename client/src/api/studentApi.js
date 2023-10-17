import { $host } from "./index";

export const getAllStudents = async () => {
    const {data} = await $host.get('/getStudent')
    return data
}