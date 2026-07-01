import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { getAllCustomPcs } from '../services/CustomPcsAPI'

// PAGE: list all saved PC builds. (Built for you — read-only list.)

const ViewPcs = () => {
    const [pcs, setPcs] = useState([])

    useEffect(() => {
        const load = async () => {
            const data = await getAllCustomPcs()
            if (data) setPcs(data)
        }
        load()
    }, [])

    return (
        <div className='view-pcs'>
            <h2>Saved Builds</h2>

            {pcs.length === 0 ? (
                <p className='empty'>No builds yet. Head to Customize to create one!</p>
            ) : (
                <div className='pc-grid'>
                    {pcs.map((pc) => (
                        <Link key={pc.id} to={`/custompcs/${pc.id}`} className='pc-card'>
                            <h3>{pc.name}</h3>
                            <p className='price'>${pc.total_price}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ViewPcs
