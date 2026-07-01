// Utility: compute the total price of a build from the selected options.
// TEMPLATE — fill in the logic.
//
// The idea: each selection is an option object (or its price). Sum the prices.
// You decide the exact shape based on how you store selections in CreatePc.

// Example signature — adjust to your data shape.
// selectedOptions might be an object like:
//   { cpu: {id, name, price}, gpu: {...}, ram: {...}, cooling: {...}, caseColor: {...} }
const calcTotalPrice = (selectedOptions) => {
    // TODO: add up the price of each selected option and return the total.
    // Hint: Object.values(selectedOptions) gives you an array to reduce/sum over,
    //       but guard against selections that aren't chosen yet (undefined).
}

export { calcTotalPrice }
