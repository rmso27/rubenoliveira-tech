import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "cwmg5h66",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;