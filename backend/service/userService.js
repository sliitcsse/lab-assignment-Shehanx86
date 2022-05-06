import { users } from "../fakeDatabase/index.js";

//create user profile service function
const createProfile = ctx => {
    const { name, email, password, role } = ctx.request.body;
    const result = users.createProfile(name, email, password, role);
    const status = result === 'User already exists!' ? 400 : 201;
    ctx.status = status;
    ctx.body = result;
}

//login function
const login = ctx => {
    const { email, password } = ctx.request.body;
    const result = users.authenticateUser(email, password);
    const status = result === 'auth fail' ? 401 : 200;
    ctx.status = status;
    ctx.body = result;
}

//get users by filtering role customers
const getCustomers = ctx => {
    const result = users.getUsersByRole('Customer');
    ctx.body = result;
    ctx.status = 200;
}

export { login, createProfile, getCustomers };