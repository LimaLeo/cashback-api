const Order = require("../models/entities/orders.model");
const usersService = require("./users.service")

function create(order) {
    return new Promise(async (resolve, reject) => {
        try {
            if (order.ni_user_id) {
                let user = await usersService.getById(order.ni_user_id); 
                
                if (user.tx_cpf == "15350946056") {
                    // "Approved"
                    order.ni_status_type_id = 1;
                } else {
                    // "InValidation"
                    order.ni_status_type_id = 2;
                }
            }

            let response = await Order.create(order);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function updateById(id, order) {
    return new Promise(async (resolve, reject) => {
        try {
            if (order.ni_user_id) {
                let user = await usersService.getById(order.ni_user_id); 
                
                if (user.tx_cpf == "15350946056") {
                    // "Approved"
                    order.ni_status_type_id = 1;
                } else {
                    // "InValidation"
                    order.ni_status_type_id = 2;
                }
            }

            let response = await Order.update(order, {
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