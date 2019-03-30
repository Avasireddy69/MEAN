var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controller.js');


router.route('/hotels/AddNew').post(ctrlHotels.hotelsAddOne);
router.route('/hotels').get(ctrlHotels.hotelsGetAll);
router.route('/hotels/:hotelid').get(ctrlHotels.hotelsGetOne);


module.exports = router;