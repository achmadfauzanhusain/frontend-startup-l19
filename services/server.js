import callApi from "@/lib/api";

const ROOT_API = "http://localhost:8000"

export async function createServer(data) {
    const url = `${ROOT_API}/server/create`
    return callApi({
        url,
        method: "POST",
        data,
        token: true
    })
}

export async function getAllServers() {
    const url = `${ROOT_API}/server/all`
    return callApi({
        url,
        method: "GET",
    })
}

export async function getMyServers() {
    const url = `${ROOT_API}/server/my/server`
    return callApi({
        url,
        method: "GET",
        token: true
    })
}

export async function getDetailServer(idServer) {
    const url = `${ROOT_API}/server/${idServer}`
    return callApi({
        url,
        method: "GET"
    })
}

export async function getJoinedServers(hashAddress) {
    const url = `${ROOT_API}/server/joined/${hashAddress}`
    return callApi({
        url,
        method: "GET",
        token: true
    })
}