const StatusType = require("../models/statusType.model");

function create(statusType) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await StatusType.create(statusType);

            resolve(response.dataValues);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

function updateById(id, statusType) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await StatusType.update(statusType, {
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
            let response = await StatusType.findOne({
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
            let response = await StatusType.destroy({
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