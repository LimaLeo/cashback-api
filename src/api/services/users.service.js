const User = require("../models/users.model");

function create(user) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.create(user);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

module.exports = {
    create,
}