const { Router } = require("express")
const router = Router();
const dishcontroller = require('../controllers/dishcontroller')
const usercontroller = require('../controllers/usercontroller')


router.get("/dish", dishcontroller.getDish);
router.post("/dish", dishcontroller.createDish);
router.put("/dish/:id", dishcontroller.updateDish);
router.delete('/dish/:id', dishcontroller.deleteDish);
router.get("/users", usercontroller.getUsers);
router.post("/users", usercontroller.createUser);
router.put("/users/:id", usercontroller.updateUser);
router.delete('/users/:id', usercontroller.deleteUser);

module.exports = router;