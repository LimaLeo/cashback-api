
"use strict";

const chai = require("chai");
const expect = chai.expect;
const entities = require("../../src/api/models/entities/");
const OrderId = 1;

describe("Test Get Order Database", function () {
    it("verifies successful response", async () => {        
        const order = await entities.Orders.findOne({
            where: {
                ni_id: OrderId                
            }
        });
        expect(order).to.be.an("object");
        expect(order.ni_id).equal(OrderId);
    });
});
