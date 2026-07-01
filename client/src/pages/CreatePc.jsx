import React, { useState, useEffect } from 'react'
import '../App.css'
import { getAllOptions } from '../services/OptionsAPI'
import { createCustomPc } from '../services/CustomPcsAPI'
import { calcTotalPrice } from '../utilities/calcPrice'
import { checkCombo } from '../utilities/validation'

// PAGE: Customize / create a new PC build.
// TEMPLATE — follow the numbered TODOs. This is the biggest page; take it step by step.

const CreatePc = () => {

    // 1. STATE ---------------------------------------------------------------
    // TODO: state to hold the fetched catalog (cpus, gpus, ...). Start as null.
    //   const [options, setOptions] = useState(null)
    // TODO: state for the user's current selections (chosen option per feature).
    //   const [selections, setSelections] = useState({})  // e.g. { cpu:{...}, gpu:{...} }
    // TODO: state for the build name (text input).
    // TODO: (optional) state for an error message from checkCombo.

    // 2. FETCH CATALOG ON MOUNT ---------------------------------------------
    // TODO: useEffect(() => { ... }, []) that calls getAllOptions() and stores it.
    //   Remember: the fetch is async, so define an async fn inside and call it.

    // 3. DERIVED VALUES ------------------------------------------------------
    // TODO: const totalPrice = calcTotalPrice(selections)
    // TODO: const comboError = checkCombo(selections)
    // TODO: figure out the selected case color's hex_color for the visual change.

    // 4. HANDLERS ------------------------------------------------------------
    // TODO: handleSelect(feature, option) -> update selections state.
    // TODO: handleSubmit() -> if comboError, block + show message.
    //       Otherwise build the pc object (name, total_price, cpu_id, gpu_id, ...)
    //       call createCustomPc(pc), then redirect (window.location = '/custompcs').

    // 5. RENDER --------------------------------------------------------------
    // While options is null, show a loading message.
    // TODO: for each feature, render a <select> (dropdown) built from options.<feature>.
    //       On change, call handleSelect.
    // TODO: a visual element (e.g. a box) whose background uses the selected hex_color.
    // TODO: show the live totalPrice.
    // TODO: a text input for the build name.
    // TODO: show comboError if present.
    // TODO: a Save button that calls handleSubmit (disabled if comboError).

    return (
        <div className='create-pc'>
            <h2>Customize your PC</h2>
            {/* TODO: build the UI described above */}
        </div>
    )
}

export default CreatePc
