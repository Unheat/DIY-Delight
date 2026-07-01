import express from 'express'
import {
    getAllCustomPcs,
    getCustomPc,
    createCustomPc,
    updateCustomPc,
    deleteCustomPc
} from '../controller/customPcs.js'

const router = express.Router()

// Mounted at /api/customPcs in server.js, so paths here are relative to that.
router.get('/', getAllCustomPcs)        // GET  /api/customPcs        -> all builds
router.get('/:id', getCustomPc)         // GET  /api/customPcs/:id    -> one build
router.post('/', createCustomPc)        // POST /api/customPcs        -> create
router.patch('/:id', updateCustomPc)    // PATCH  /api/customPcs/:id  -> update
router.delete('/:id', deleteCustomPc)   // DELETE /api/customPcs/:id  -> delete

export default router
