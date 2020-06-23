class Cashback {
    constructor(
            id, 
            status, 
            orderValue, 
            userId, 
            orderId) {
        this.ni_id = id;
        this.bl_status = status;
        this.ni_order_value = orderValue;
        this.ni_value = orderValue;
        this.ni_percentage = orderValue;
        this.ni_user_id = userId;
        this.ni_order_id = orderId;
    }

    static percentage(value) {
        this.ni_percentage = value;
    }

    set value(value) {
        this.ni_value = value;
    }

    static percentage(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

    static percentage(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

module.exports = Cashback;