import { pool } from '../config/database.js'

const getAllCustomPCs = async (req, res) => {
    try {
        const sql = `
            SELECT * FROM custom_pcs
        `
        const result = await pool.query(sql)
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getCustomPc = async (req, res) => {
    try {
        const sql = `
        SELECT c.id, c.name, c.total_price,
        c.cpu_id, c.gpu_id, c.ram_id, c.cooling_id, c.case_color_id,
        cpu.name AS cpu, gpu.name AS gpu, ram.name AS ram,
        cool.name AS cooling, col.name AS case_color, col.hex_color
        FROM custom_pcs c
        JOIN cpus cpu        ON c.cpu_id = cpu.id
        JOIN gpus gpu        ON c.gpu_id = gpu.id
        JOIN rams ram        ON c.ram_id = ram.id
        JOIN coolings cool   ON c.cooling_id = cool.id
        JOIN case_colors col ON c.case_color_id = col.id
        WHERE c.id = $1

        `
        const result = await pool.query(sql, [req.params.id])
        res.status(200).json(result.rows[0])
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const createCustomPc = async (req, res) => {
    try {
        const sql = `
            INSERT INTO custom_pcs (name, total_price, cpu_id, gpu_id, ram_id, cooling_id, case_color_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `
        const result = await pool.query(sql, [
            req.body.name,
            req.body.total_price,
            req.body.cpu_id,
            req.body.gpu_id,
            req.body.ram_id,
            req.body.cooling_id,
            req.body.case_color_id
        ])
        res.status(201).json(result.rows[0])
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const updateCustomPc = async (req, res) => {
    try {
        const sql = `
            UPDATE custom_pcs
            SET name = $1, total_price = $2, cpu_id = $3, gpu_id = $4, ram_id = $5, cooling_id = $6, case_color_id = $7
            WHERE id = $8
            RETURNING *
        `
        const result = await pool.query(sql, [
            req.body.name,
            req.body.total_price,
            req.body.cpu_id,
            req.body.gpu_id,
            req.body.ram_id,
            req.body.cooling_id,
            req.body.case_color_id,
            req.params.id
        ])
        res.status(200).json(result.rows[0])
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const deleteCustomPc = async (req, res) => {
    try {
        const sql = `
            DELETE FROM custom_pcs WHERE id = $1
        `
        const result = await pool.query(sql, [req.params.id])
        res.status(200).json(result.rows[0])
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export { getAllCustomPCs, getCustomPc, createCustomPc, updateCustomPc, deleteCustomPc }