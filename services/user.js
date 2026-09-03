import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function getAllPosts() {
    const url = `${ROOT_API}/post/all`
    return callApi({
        url,
        method: "GET",
    })
}

export async function getPersonalPosts() {
    const url = `${ROOT_API}/post/personal`
    return callApi({
        url,
        method: "GET",
    })
}

export async function createPost(data) {
    const url = `${ROOT_API}/post/create`
    return callApi({
        url,
        method: "POST",
        data,
        token: true
    })
}