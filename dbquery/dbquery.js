
//queries for get all dish, get dish with certain keyword order by ID, create dish, update dish, delete dish

const getDish = 'SELECT * FROM dish ORDER BY dishid ASC';
const getDishAtKey = 'SELECT * FROM dish WHERE keyword = $1 ORDER BY dishid ASC'
const getDishAtID = 'SELECT * FROM dish WHERE dishid = $1';
const createDish = 'INSERT INTO dish (dishname, keyword, type, ingredients, howtomade) VALUES ($1, $2, $3, $4, $5)';
const updateDish = 'UPDATE dish SET dishname = COALESCE(NULLIF($1,dishname), dishname), keyword = COALESCE(NULLIF($2,keyword), keyword), type= COALESCE(NULLIF($3,type), type), ingredients= COALESCE(NULLIF($4,ingredients),ingredients), howtomade=COALESCE(NULLIF($5,howtomade),howtomade) WHERE dishid = $6';
const deleteDish = 'DELETE FROM dish WHERE dishid = $1';

//queries for get all user, create user, update user, delete user

const getUsers = 'SELECT * FROM users ORDER BY userid ASC';
const createUser = 'INSERT INTO users (useracc, password, username) VALUES ($1, $2, $3)';
const updateUser = 'UPDATE users SET useracc = COALESCE(NULLIF($1,useracc), useracc), password = COALESCE(NULLIF($2,password), password), username = COALESCE(NULLIF($3,username), username) WHERE userid = $4';
const deleteUser = 'DELETE FROM users WHERE userid = $1';

//queries for get menu, create menu, update menu, delete menu

const getMenu = 'SELECT * FROM dailymenu ORDER BY menuid ASC';
const createMenu = 'INSERT INTO dailymenu (userid, breakfast, lunch, dinner) VALUES ($1, $2, $3, $4)';
const updateMenu = 'UPDATE dailymenu SET userid= COALESCE(NULLIF($1,userid),userid), breakfast = COALESCE(NULLIF($2,breakfast),breakfast), lunch= COALESCE(NULLIF($3,lunch),lunch), dinner=COALESCE(NULLIF($4,dinner),dinner) WHERE menuid=$5'
const updateBreakfast = 'UPDATE dailymenu SET breakfast = $1 WHERE menuid = $2';
const updateLunch = 'UPDATE dailymenu SET lunch=$1 WHERE menuid = $2';
const updateDinner = 'UPDATE dailymenu SET dinner=$1 WHERE menuid = $2'
const deleteMenu = 'DELETE FROM dailymenu WHERE menuid = $1';

module.exports ={
    getDish, getDishAtKey, getDishAtID, createDish, updateDish, deleteDish, getUsers, createUser, updateUser, deleteUser, getMenu, createMenu, updateMenu, updateBreakfast, updateLunch, updateDinner, deleteMenu
}