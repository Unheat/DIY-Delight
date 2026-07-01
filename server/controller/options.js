import { pool } from '../config/database.js'

const getAllOptions = async (req, res) => {
    try {
        const [cpus, gpus, rams, coolings, caseColors] = 
            await Promise.all([
                pool.query('SELECT * FROM cpus ORDER BY id'),
                pool.query('SELECT * FROM gpus ORDER BY id'),
                pool.query('SELECT * FROM rams ORDER BY id'),
                pool.query('SELECT * FROM coolings ORDER BY id'),
                pool.query('SELECT * FROM case_colors ORDER BY id')
            ]);
        res.status(200).json({
            cpus: cpus.rows,
            gpus: gpus.rows,
            rams: rams.rows,
            coolings: coolings.rows,
            caseColors: caseColors.rows
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export default getAllOptions
