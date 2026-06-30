import '/dotenv.js'
import { pool } from './database.js'
import {caseColors} from '../data/caseColors.js'
import {cpus} from '../data/cpus.js'
import {cooling} from '../data/cooling.js'
import {gpus} from '../data/gpus.js'
import {ram} from '../data/ram.js'

const createCPUTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS cpus (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('CPU table created');
    }
    catch (err) {
        console.log('could not create CPU table');
        throw err;
    }
}

const createGPUTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS gpus (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('GPU table created');
    }
    catch (err) {
        console.log('could not create GPU table');
        throw err;
    }
}


const createRAMTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS ram (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('RAM table created');
    }
    catch (err) {
        console.log('could not create RAM table');
        throw err;
    }
}

const createCoolingTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS cooling (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('Cooling table created');
    }
    catch (err) {
        console.log('could not create Cooling table');
        throw err;
    }
}

const createCaseColorTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS case_colors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        hex_color VARCHAR(255) NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('Case Color table created');
    }
    catch (err) {
        console.log('could not create Case Color table');
        throw err;
    }
}

const createCustomPCsTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS custom_pcs (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        total_price INT NOT NULL,
        cpu_id INT NOT NULL,
        gpu_id INT NOT NULL,
        ram_id INT NOT NULL,
        cooling_id INT NOT NULL,
        case_color_id INT NOT NULL
    )`
    try {
        const events_result = await pool.query(sql);
        console.log('Custom PCs table created');
    }
    catch (err) {
        console.log('could not create Custom PCs table');
        throw err;
    }
}

