const entities = require("../models/entities/");
const { boticarioV1 } = require('../httpClients/boticario');


function create(cashback) {
    return new Promise(async (resolve, reject) => {
        try {
            // regras de negócio colocar na camada de domínio em model
            if (cashback.ni_order_value <= 1000) {
                cashback.ni_value = cashback.ni_order_value * 0.1;
                cashback.ni_percentage = 10;
            } else if (cashback.ni_order_value <= 1500) {
                cashback.ni_value = cashback.ni_order_value * 0.15;
                cashback.ni_percentage = 15;
            } else {
                cashback.ni_value = cashback.ni_order_value * 0.2;
                cashback.ni_percentage = 20;
            }

            let response = await entities.Cashbacks.create(cashback);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function updateById(id, cashback) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await entities.Cashbacks.update(cashback, {
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
            let response = await entities.Cashbacks.findOne({
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
            let response = await entities.Cashbacks.destroy({
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

function getAccumulatedByCpf(cpf) {
    return new Promise(async (resolve, reject) => {
        boticarioV1.get(`/v1/cashback?cpf=${cpf}`)
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = {
    create,
    updateById,
    getById,
    deleteById,
    getAccumulatedByCpf,
}