import React, { useState, useEffect } from 'react'
import '../App.css'
import { getAllOptions } from '../services/OptionsAPI'
import { createCustomPc } from '../services/CustomPcsAPI'
import { calcTotalPrice } from '../utilities/calcPrice'
import { checkCombo } from '../utilities/validation'

// PAGE: Customize / create a new PC build.

const FEATURES = [
    { key: 'cpu', label: 'CPU', listKey: 'cpus' },
    { key: 'gpu', label: 'GPU', listKey: 'gpus' },
    { key: 'ram', label: 'RAM', listKey: 'rams' },
    { key: 'cooling', label: 'Cooling', listKey: 'coolings' },
    { key: 'caseColor', label: 'Case Color', listKey: 'caseColors' }
]

const CreatePc = () => {
    const [options, setOptions] = useState(null)
    const [selections, setSelections] = useState({})
    const [name, setName] = useState('')

    // fetch the catalog once on mount
    useEffect(() => {
        const load = async () => {
            const data = await getAllOptions()
            if (data) setOptions(data)
        }
        load()
    }, [])

    const handleSelect = (featureKey, listKey, optionId) => {
        const option = options[listKey].find(o => o.id === Number(optionId))
        setSelections(prev => ({ ...prev, [featureKey]: option }))
    }

    const totalPrice = calcTotalPrice(selections)
    const comboError = checkCombo(selections)
    const hex = selections.caseColor?.hex_color

    const allChosen = FEATURES.every(f => selections[f.key])

    const handleSubmit = async () => {
        if (comboError || !allChosen || !name) return
        const pc = {
            name,
            total_price: totalPrice,
            cpu_id: selections.cpu.id,
            gpu_id: selections.gpu.id,
            ram_id: selections.ram.id,
            cooling_id: selections.cooling.id,
            case_color_id: selections.caseColor.id
        }
        await createCustomPc(pc)
        window.location = '/custompcs'
    }

    if (!options) return <p className='loading'>Loading...</p>

    return (
        <div className='create-pc pc-form'>
            <h2>Customize your PC</h2>

            <div className='color-swatch' style={{ backgroundColor: hex || '#333' }} />

            <label>
                Build name
                <input
                    placeholder='e.g. My Gaming Rig'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            {FEATURES.map(({ key, label, listKey }) => (
                <label key={key}>
                    {label}
                    <select
                        value={selections[key]?.id ?? ''}
                        onChange={(e) => handleSelect(key, listKey, e.target.value)}
                    >
                        <option value='' disabled>Select {label}...</option>
                        {options[listKey].map(opt => (
                            <option key={opt.id} value={opt.id}>
                                {opt.name}{opt.price ? ` ($${opt.price})` : ''}
                            </option>
                        ))}
                    </select>
                </label>
            ))}

            <p className='price'>Total: ${totalPrice}</p>
            {comboError && <p className='error'>{comboError}</p>}

            <button
                className='save-btn'
                onClick={handleSubmit}
                disabled={!!comboError || !allChosen || !name}
            >
                Save Build
            </button>
        </div>
    )
}

export default CreatePc
