
"use strict";

const chai = require("chai");
const expect = chai.expect;
const Order = require("../../api/models/entities/orders.model");
const OrderId = 1;

describe("Test Get Order Database", function () {
    it("verifies successful response", async () => {        
        const order = await Order.findOne({
            where: {
                ni_id: OrderId                
            }
        });
        expect(order).to.be.an("object");
        expect(order.ni_id).equal(OrderId);
    });
});
