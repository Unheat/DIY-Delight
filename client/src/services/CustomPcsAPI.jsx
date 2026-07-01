// Service: full CRUD for saved builds (/api/customPcs).
// TEMPLATE — fill in each function. Use OptionsAPI.jsx as your reference for GET.
//
// Reminder of the fetch "options object" for POST/PATCH/DELETE:
//   const options = {
//     method: 'POST',                                   // or 'PATCH' / 'DELETE'
//     headers: { 'Content-Type': 'application/json' },  // "I'm sending JSON"
//     body: JSON.stringify(pc)                           // JS object -> JSON string
//   }
//   await fetch(url, options)
// DELETE needs no headers/body — just { method: 'DELETE' }.

// GET all saved builds  ->  returns an array of builds
const getAllCustomPcs = async () => {
    // TODO: fetch('/api/customPcs'), parse json, return the array
    try {
        const response = await fetch('/api/customPcs')
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        return []
    }
        
}

// GET one build by id  ->  returns a single build object
const getCustomPc = async (id) => {
    // TODO: fetch(`/api/customPcs/${id}`), parse json, return it
    try { 
        const response = await fetch(`/api/customPcs/${id}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        return null
    }
}

// CREATE a build  ->  send the pc object in the body with method 'POST'
const createCustomPc = async (pc) => {
    
    // TODO: build the options object (POST), fetch('/api/customPcs', options)
    try {
        const response = await fetch('/api/customPcs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(pc) })
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
        return null
    }
}

// UPDATE a build  ->  method 'PATCH', id in the URL, pc in the body
const updateCustomPc = async (id, pc) => {
    // TODO: build the options object (PATCH), fetch(`/api/customPcs/${id}`, options)
    try {
        const response = await fetch(`/api/customPcs/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(pc) })
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
        return null
    }   
}

// DELETE a build  ->  method 'DELETE', id in the URL, no body
const deleteCustomPc = async (id) => {
    // TODO: fetch(`/api/customPcs/${id}`, { method: 'DELETE' })
    try {
        const response = await fetch(`/api/customPcs/${id}`, { method: 'DELETE' })
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
        return null
    }   
}

export { getAllCustomPcs, getCustomPc, createCustomPc, updateCustomPc, deleteCustomPc }
