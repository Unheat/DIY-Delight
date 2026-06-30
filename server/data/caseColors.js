// Seed data for the `case_colors` table.
// Each object becomes one row: { id (auto), name, price, hex_color }.
// custom_pcs.case_color_id will reference case_colors.id.
// hex_color drives the VISUAL CHANGE requirement: the displayed PC recolors
// based on the selected case color (a change beyond text).

const caseColors = [
    { name: 'Black', price: 0, hex_color: '#1a1a1a' },
    { name: 'White', price: 0, hex_color: '#f5f5f5' },
    { name: 'Red',   price: 0, hex_color: '#c0392b' }
]

export default caseColors
