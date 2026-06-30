// Seed data for the `cpus` table.
// Each object becomes one row: { id (auto), name, price }.
// reset.js inserts these, and custom_pcs.cpu_id will reference cpus.id.

const cpus = [
    { name: 'Ryzen 5', price: 200 },
    { name: 'Ryzen 7', price: 350 },
    { name: 'Ryzen 9', price: 550 }
]

export default cpus
