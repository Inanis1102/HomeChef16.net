const getDish = 'SELECT * FROM dish ORDER BY id ASC';
const getDishAt = 'SELECT * FROM dish d WHERE "d.keyword" = $1'
const createDish = 'INSERT INTO dish (dishname, keyword, type, ingredients, howtomade) VALUES ($1, $2, $3, $4, $5)';
const updateDish = 'UPDATE dish SET dishname = $1, keyword = $2, type=$3, ingredients=$4, howtomade=$5 WHERE id = $6';
const deleteDish = 'DELETE FROM dish WHERE id = $1';

const getUsers = 'SELECT * FROM users ORDER BY userid ASC';
const getUserAt = 'SELECT * FROM users u WHERE u.username = $1';
const createUser = 'INSERT INTO users (useracc, password, username) VALUES ($1, $2, $3)';
const updateUser = 'UPDATE users SET useracc = $1, password = $2, username = $3 WHERE userid = $4';
const deleteUser = 'DELETE FROM users WHERE userid = $1';


module.exports ={
    getDish, getDishAt, createDish, updateDish, deleteDish, getUsers, getUserAt, createUser, updateUser, deleteUser
}