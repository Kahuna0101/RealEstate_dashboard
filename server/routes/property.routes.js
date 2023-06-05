import express from 'express';

// IMPORT ALL THE CONTROLLERS ...

import { getAllProperties, getPropertyDetail, createProperty, updateProperty, deleteProperty, } 
from '../controlers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;