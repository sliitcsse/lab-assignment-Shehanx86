import User from "./user.js";

export default class Users {
    constructor() {
        this.users = [];
    }
}

Users.prototype.createProfile = function(name, email, password, role) {
    const user = this.users.find(user => user.email === email);
    if (user) return 'User already exists!';
    const newUser = new User(name, email, password, role);
    this.users.push(newUser);
    return newUser;
}

Users.prototype.authenticateUser = function(email, password){
    const user = this.users.find(user => user.email === email);
    if (!user) return 'auth fail';
    return user.password === password ? user : 'auth fail';
}

Users.prototype.getUserByEmail = function(email) {
    return this.users.find(user => user.email === email);
}

Users.prototype.getUsersByRole = function(role) {
    return this.users.filter(user => user.role === role);
}