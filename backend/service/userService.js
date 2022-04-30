import { users } from "../fakeDatabase/index.js";

const createProfile = ctx => {
    const { name, email, password, role } = ctx.request.body;
    const result = users.createProfile(name, email, password, role);
    // if (result === 'User already exists!') return ctx.status = 400;
    // ctx.status = 201;
    ctx.body = result
}

const login = ctx => {
    const { email, password } = ctx.request.body;
    const result = users.authenticateUser(email, password);
    // if (result === 'auth fail') return ctx.status = 401;
    // ctx.status = 200;
    ctx.body = result
}

export { login, createProfile };