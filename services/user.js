import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function dataUser(hashAddress) {
    const url = `${ROOT_API}/user/${hashAddress}`
    return callApi({
        url,
        method: "GET",
    })
}

export async function editProfile(data) {
    const url = `${ROOT_API}/user/profile`
    return callApi({
        url,
        method: "PUT",
        token: true,
        data
    })
}