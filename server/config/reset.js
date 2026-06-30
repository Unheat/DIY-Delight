import './dotenv.js'
import { pool } from './database.js'
import caseColors from '../data/caseColors.js'
import cpus from '../data/cpus.js'
import coolings from '../data/coolings.js'
import gpus from '../data/gpus.js'
import rams from '../data/rams.js'
// import customPCs from './data/customPCs.js'

const createCPUTable = async () => {
    const sql = `
        DROP TABLE IF EXISTS cpus CASCADE;
        CREATE TABLE IF NOT EXISTS cpus (
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
    const sql = `
        DROP TABLE IF EXISTS gpus CASCADE;
        CREATE TABLE IF NOT EXISTS gpus (
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
    const sql = `
        DROP TABLE IF EXISTS rams CASCADE;
        CREATE TABLE IF NOT EXISTS rams (
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
    const sql = `
        DROP TABLE IF EXISTS coolings CASCADE;
        CREATE TABLE IF NOT EXISTS coolings (
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
    const sql = `
        DROP TABLE IF EXISTS case_colors CASCADE;
        CREATE TABLE IF NOT EXISTS case_colors (
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
    const sql = `
        DROP TABLE IF EXISTS custom_pcs;
        CREATE TABLE IF NOT EXISTS custom_pcs (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        total_price INT NOT NULL,
        cpu_id INT REFERENCES cpus(id),
        gpu_id INT REFERENCES gpus(id),
        ram_id INT REFERENCES rams(id),
        cooling_id INT REFERENCES coolings(id),
        case_color_id INT REFERENCES case_colors(id)
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

const seedCPUTable = async () => {
    await createCPUTable();
    for (const cpu of cpus) {
        const sql = `
            INSERT INTO cpus (name, price)
            VALUES ('${cpu.name}', ${cpu.price})
        `
        try {
            const events_result = await pool.query(sql);
            console.log(`CPU ${cpu.name} added to table`);
        }
        catch (err) {
            console.log(`could not add CPU ${cpu.name} to table`);
            throw err;
        }
    }
    
}

const seedGPUTable = async () => {
    await createGPUTable();
    for (const gpu of gpus) {
        const sql = `
            INSERT INTO gpus (name, price)
            VALUES ('${gpu.name}', ${gpu.price})
        `
        try {
            const events_result = await pool.query(sql);
            console.log(`GPU ${gpu.name} added to table`);
        }
        catch (err) {
            console.log(`could not add GPU ${gpu.name} to table`);
            throw err;
        }
    }
}


const seedRAMTable = async () => {
    await createRAMTable();
    for (const ram of rams) {
        const sql = `
            INSERT INTO rams (name, price)
            VALUES ('${ram.name}', ${ram.price})
        `
        try {
            const events_result = await pool.query(sql);
            console.log(`RAM ${ram.name} added to table`);
        }
        catch (err) {
            console.log(`could not add RAM ${ram.name} to table`);
            throw err;
        }
    }
}

const seedCoolingTable = async () => {
    await createCoolingTable();
    for (const cooling of coolings) {
        const sql = `
            INSERT INTO coolings (name, price)
            VALUES ('${cooling.name}', ${cooling.price})
        `
        try {
            const events_result = await pool.query(sql);
            console.log(`Cooling ${cooling.name} added to table`);
        }
        catch (err) {
            console.log(`could not add Cooling ${cooling.name} to table`);
            throw err;
        }
    }
}

const seedCaseColorTable = async () => {
    await createCaseColorTable();
    for (const caseColor of caseColors) {
        const sql = `
            INSERT INTO case_colors (name, price, hex_color)
            VALUES ('${caseColor.name}', ${caseColor.price}, '${caseColor.hex_color}')
        `
        try {
            const events_result = await pool.query(sql);
            console.log(`Case Color ${caseColor.name} added to table`);
        }
        catch (err) {
            console.log(`could not add Case Color ${caseColor.name} to table`);
            throw err;
        }
    }
}

// const seedCustomPCsTable = async () => {
//     await createCustomPCsTable();
//     for (const customPC of customPCs) {
//         const sql = `
//             INSERT INTO custom_pcs (name, total_price, cpu_id, gpu_id, ram_id, cooling_id, case_color_id)
//             VALUES ('${customPC.name}', ${customPC.total_price}, ${customPC.cpu_id}, ${customPC.gpu_id}, ${customPC.ram_id}, ${customPC.cooling_id}, ${customPC.case_color_id})
//         `
//         try {
//             const events_result = await pool.query(sql);
//             console.log(`Custom PC ${customPC.name} added to table`);
//         }
//         catch (err) {
//             console.log(`could not add Custom PC ${customPC.name} to table`);
//             throw err;
//         }
//     }    
// }

const seedTables = async () => {

    try{
        await seedCPUTable();
        await seedGPUTable();
        await seedRAMTable();
        await seedCoolingTable();
        await seedCaseColorTable();

        await createCustomPCsTable();
        console.log('All tables created');
    }
    catch (err) {
        console.log('could not create all tables');
        throw err;
    } finally {
        await pool.end();
    }
}


seedTables();
