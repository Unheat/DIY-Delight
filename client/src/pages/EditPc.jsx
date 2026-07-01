import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { getAllOptions } from '../services/OptionsAPI'
import { getCustomPc, updateCustomPc, deleteCustomPc } from '../services/CustomPcsAPI'
import { calcTotalPrice } from '../utilities/calcPrice'
import { checkCombo } from '../utilities/validation'

// PAGE: edit an existing build. (Built for you — mirrors the CreatePc pattern, pre-filled.)
// Uses the contracted `selections` shape: { cpu, gpu, ram, cooling, caseColor } of option objects.

const FEATURES = [
    { key: 'cpu', label: 'CPU', listKey: 'cpus' },
    { key: 'gpu', label: 'GPU', listKey: 'gpus' },
    { key: 'ram', label: 'RAM', listKey: 'rams' },
    { key: 'cooling', label: 'Cooling', listKey: 'coolings' },
    { key: 'caseColor', label: 'Case Color', listKey: 'caseColors' }
]

const EditPc = () => {
    const { id } = useParams()
    const [options, setOptions] = useState(null)
    const [selections, setSelections] = useState({})
    const [name, setName] = useState('')

    useEffect(() => {
        const load = async () => {
            const catalog = await getAllOptions()
            const pc = await getCustomPc(id)
            if (!catalog || !pc) return
            setOptions(catalog)
            setName(pc.name)
            // rebuild selections (option objects) from the saved ids
            setSelections({
                cpu: catalog.cpus.find(o => o.id === pc.cpu_id),
                gpu: catalog.gpus.find(o => o.id === pc.gpu_id),
                ram: catalog.rams.find(o => o.id === pc.ram_id),
                cooling: catalog.coolings.find(o => o.id === pc.cooling_id),
                caseColor: catalog.caseColors.find(o => o.id === pc.case_color_id)
            })
        }
        load()
    }, [id])

    const handleSelect = (featureKey, listKey, optionId) => {
        const option = options[listKey].find(o => o.id === Number(optionId))
        setSelections(prev => ({ ...prev, [featureKey]: option }))
    }

    const totalPrice = calcTotalPrice(selections)
    const comboError = checkCombo(selections)
    const hex = selections.caseColor?.hex_color

    const handleUpdate = async () => {
        if (comboError) return
        const pc = {
            name,
            total_price: totalPrice,
            cpu_id: selections.cpu?.id,
            gpu_id: selections.gpu?.id,
            ram_id: selections.ram?.id,
            cooling_id: selections.cooling?.id,
            case_color_id: selections.caseColor?.id
        }
        await updateCustomPc(id, pc)
        window.location = '/custompcs'
    }

    const handleDelete = async () => {
        await deleteCustomPc(id)
        window.location = '/custompcs'
    }

    if (!options) return <p className='loading'>Loading...</p>

    return (
        <div className='edit-pc pc-form'>
            <h2>Edit build</h2>

            <div className='color-swatch' style={{ backgroundColor: hex }} />

            <label>
                Build name
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            {FEATURES.map(({ key, label, listKey }) => (
                <label key={key}>
                    {label}
                    <select
                        value={selections[key]?.id ?? ''}
                        onChange={(e) => handleSelect(key, listKey, e.target.value)}
                    >
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

            <div className='actions'>
                <button className='edit-btn' onClick={handleUpdate} disabled={!!comboError}>Update</button>
                <button className='delete-btn' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default EditPc
