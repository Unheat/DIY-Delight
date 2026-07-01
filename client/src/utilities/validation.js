// Utility: check for impossible feature combinations.
// TEMPLATE — fill in the rule(s).
//
// Required rule for this project:
//   "RTX 4090 requires Liquid cooling."
//   -> if GPU is RTX 4090 AND cooling is Air, the combo is invalid.
//
// Return something the UI can use — e.g. an error message string (or null if valid),
// or a boolean. Your choice; be consistent with how CreatePc uses it.

const checkCombo = (selectedOptions) => {
    // TODO: read the chosen gpu + cooling from selectedOptions.
    // If gpu is 'RTX 4090' and cooling is 'Air', return an error message.
    // Otherwise return null (valid).
}

export { checkCombo }
