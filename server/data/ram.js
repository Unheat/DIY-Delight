// Seed data for the `ram` table.
// Each object becomes one row: { id (auto), name, price }.
// custom_pcs.ram_id will reference ram.id.

const ram = [
    { name: '16GB', price: 80 },
    { name: '32GB', price: 150 },
    { name: '64GB', price: 300 }
]

export default ram
