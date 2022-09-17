const { Router } = require("express")
const router = Router();
const dishcontroller = require('../dbcontrollers/dishcontroller')
const usercontroller = require('../dbcontrollers/usercontroller')
const menucontroller = require('../dbcontrollers/menucontroller')

//routes for handling dish API

router.get("/dish", dishcontroller.getDish);
router.get("/dish/id/:id", dishcontroller.getDishAtID)
router.get("/dish/keyword/:keyword", dishcontroller.getDishAtKey)
router.post("/dish", dishcontroller.createDish);
router.put("/dish/:id", dishcontroller.updateDish);
router.delete('/dish/:id', dishcontroller.deleteDish);

//routes for handling user API

router.get("/users", usercontroller.getUsers);
router.post("/users", usercontroller.createUser);
router.put("/users/:id", usercontroller.updateUser);
router.delete('/users/:id', usercontroller.deleteUser);

//routes for handling menu API

router.get("/menu", menucontroller.getMenu);
router.post("/menu", menucontroller.createMenu);
router.put("/menu/:id", menucontroller.updateMenu);
router.put("/menu/:id", menucontroller.updateBreakfast);
router.put("/menu/:id", menucontroller.updateLunch);
router.put("/menu/:id", menucontroller.updateDinner);
router.delete("/menu/:id", menucontroller.deleteMenu);

module.exports = router;