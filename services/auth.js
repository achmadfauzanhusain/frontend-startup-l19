import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function setRegister(data) {
    const url = `${ROOT_API}/auth/register`
    return callApi({
        url,
        method: "POST",
        data,
    })
}