// Service: calls to the read-only parts catalog (/api/options).
// This is your reference example for how a service function works.
// Thanks to the Vite proxy, we use a relative '/api/...' URL (no localhost:3000).

const getAllOptions = async () => {
    const response = await fetch('/api/options')   // GET is the default method
    const data = await response.json()             // parse the JSON body
    return data                                     // { cpus:[...], gpus:[...], rams:[...], coolings:[...], caseColors:[...] }
}

export { getAllOptions }
