const User = require("../models/entities/users.model");

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

function exist(email) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.findOne({
                where: {
                    tx_email: email
                }
            });

            resolve(response.dataValues);
        } catch (error) {
            reject("Usuário não existe, por favor se cadastrar");
        }
    });
}

function login(user) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.findOne({
                where: {
                    tx_email: user.tx_email
                }
            });
            let password = response.dataValues.tx_password;

            if (user.tx_password == password) {
                resolve("Login realizado com sucesso!");
            } else{
                resolve("Senha incorreta!");
            }

        } catch (error) {
            reject("Usuário não existe, por favor se cadastrar");
        }
    });
}

function updateById(id, user) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.update(user, {
                where: {
                    ni_id: id
                }
            });

            if (response[0] > 0) {
                resolve("Atualizado com sucesso.");
            } else {
                reject("Não foi possível realizar a atualização.");
            }
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function getById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.findOne({
                where: {
                    ni_id: id
                }
            });

            if (response !== null) {
                resolve(response.dataValues);
            } else {
                reject("Não foi possível realizar consulta.");
            }

        } catch (error) {
            reject(new Error(error));
        }
    });
}

function deleteById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await User.destroy({
                where: {
                    ni_id: id
                }
            });

            if (response > 0) {
                resolve("Excluído com sucesso.");
              } else {
                reject("Não foi possível excluir.");
              }
        } catch (error) {
            reject(new Error(error));
        }
    });
}

module.exports = {
    create,
    updateById,
    getById,
    deleteById,
    exist,
    login,
}