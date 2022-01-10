const express = require('express')
const router = express.Router()

const CarControll = require('./controllers/CarControl.')

router.get('/cars', CarControll.SearchAll);
router.get('/car/:id', CarControll.SearchOne);
router.post('/car', CarControll.InsertCar);
router.put('/car/:id', CarControll.AlterCar);
router.delete('/car/:id', CarControll.DeleteCar);


module.exports  = router;