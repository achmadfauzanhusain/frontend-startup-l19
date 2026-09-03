import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function getAllPosts() {
    const url = `${ROOT_API}/post/all`
    return callApi({
        url,
        method: "GET",
    })
}