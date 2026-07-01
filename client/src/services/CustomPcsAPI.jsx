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
}

// GET one build by id  ->  returns a single build object
const getCustomPc = async (id) => {
    // TODO: fetch(`/api/customPcs/${id}`), parse json, return it
}

// CREATE a build  ->  send the pc object in the body with method 'POST'
const createCustomPc = async (pc) => {
    // TODO: build the options object (POST), fetch('/api/customPcs', options)
}

// UPDATE a build  ->  method 'PATCH', id in the URL, pc in the body
const updateCustomPc = async (id, pc) => {
    // TODO: build the options object (PATCH), fetch(`/api/customPcs/${id}`, options)
}

// DELETE a build  ->  method 'DELETE', id in the URL, no body
const deleteCustomPc = async (id) => {
    // TODO: fetch(`/api/customPcs/${id}`, { method: 'DELETE' })
}

export { getAllCustomPcs, getCustomPc, createCustomPc, updateCustomPc, deleteCustomPc }
