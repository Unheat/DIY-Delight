// Seed data for the `gpus` table.
// Each object becomes one row: { id (auto), name, price }.
// custom_pcs.gpu_id will reference gpus.id.
// Note: RTX 4090 triggers the impossible-combo rule (RTX 4090 requires Liquid cooling).

const gpus = [
    { name: 'RTX 4060', price: 300 },
    { name: 'RTX 4070', price: 600 },
    { name: 'RTX 4090', price: 1600 }
]

export default gpus
