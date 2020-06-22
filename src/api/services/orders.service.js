const Order = require("../models/orders.model");

function create(cashback) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await Order.create(cashback);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function updateById(id, cashback) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await Order.update(cashback, {
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
            let response = await Order.findOne({
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
            let response = await Order.destroy({
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
}