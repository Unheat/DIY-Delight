// Seed data for the `cooling` table.
// Each object becomes one row: { id (auto), name, price }.
// custom_pcs.cooling_id will reference cooling.id.
// Note: "Liquid" is required when GPU = RTX 4090 (impossible-combo rule).

const coolings = [
    { name: 'Air', price: 40 },
    { name: 'Liquid', price: 120 }
]

export default coolings
