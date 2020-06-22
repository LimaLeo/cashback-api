const OrderItem = require("../models/orderItem.model");

function create(orderItem) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await OrderItem.create(orderItem);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function updateById(id, orderItem) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await OrderItem.update(orderItem, {
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
            let response = await OrderItem.findOne({
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
            let response = await OrderItem.destroy({
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