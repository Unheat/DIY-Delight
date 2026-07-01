import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'
import { getCustomPc, deleteCustomPc } from '../services/CustomPcsAPI'

// PAGE: detail view of one saved build. (Built for you — read + delete.)
// Relies on getCustomPc(id) returning JOINed names: cpu, gpu, ram, cooling, case_color, hex_color.

const PcDetails = () => {
    const { id } = useParams()
    const [pc, setPc] = useState(null)

    useEffect(() => {
        const load = async () => {
            const data = await getCustomPc(id)
            if (data) setPc(data)
        }
        load()
    }, [id])

    const handleDelete = async () => {
        await deleteCustomPc(id)
        window.location = '/custompcs'
    }

    if (!pc) return <p className='loading'>Loading...</p>

    return (
        <div className='pc-details'>
            <div
                className='color-swatch'
                style={{ backgroundColor: pc.hex_color }}
                title={pc.case_color}
            />

            <h2>{pc.name}</h2>
            <p className='price'>${pc.total_price}</p>

            <ul className='spec-list'>
                <li><strong>CPU:</strong> {pc.cpu}</li>
                <li><strong>GPU:</strong> {pc.gpu}</li>
                <li><strong>RAM:</strong> {pc.ram}</li>
                <li><strong>Cooling:</strong> {pc.cooling}</li>
                <li><strong>Case Color:</strong> {pc.case_color}</li>
            </ul>

            <div className='actions'>
                <Link to={`/edit/${id}`}><button className='edit-btn'>Edit</button></Link>
                <button className='delete-btn' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default PcDetails
