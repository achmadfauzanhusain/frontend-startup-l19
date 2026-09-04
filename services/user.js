import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function editProfile() {
    const url = `${ROOT_API}/user/profile`
    return callApi({
        url,
        method: "PUT",
        token: true
    })
}