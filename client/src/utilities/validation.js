// Utility: check for impossible feature combinations.
// TEMPLATE — fill in the rule(s).
//
// Required rule for this project:
//   "RTX 4090 requires Liquid cooling."
//   -> if GPU is RTX 4090 AND cooling is Air, the combo is invalid.
//
// Return something the UI can use — e.g. an error message string (or null if valid),
// or a boolean. Your choice; be consistent with how CreatePc uses it.

const checkCombo = (selections) => {
    if (selections.gpu?.name === 'RTX 4090' && selections.cooling?.name === 'Air') {
        return 'RTX 4090 requires Liquid cooling.'
    }
    return null
}

export { checkCombo }

