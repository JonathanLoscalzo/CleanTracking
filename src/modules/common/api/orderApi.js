import api from './index'

class OrderApi {

    URI = () => "/CleanOrder"
    TEST = () => this.URI() + "/test"
    PLACE_ORDER = () => this.URI() + "/PlaceOrder"
    ORDERS = () => this.URI() + "/orders"
    ORDER_BY_ID = (id) => this.URI() + `/orders/${id}`

    Test() {

    }

    Remove(id) {
        return api.delete(this.ORDER_BY_ID(id))
            .then().catch((error) => console.log(error));
    }

    EditPlaceOrder(order) {
        debugger;
        return api.put(this.ORDER_BY_ID(order.id), order)
            .then().catch((error) => console.log(error));
    }

    PlaceOrder(order) {
        return api.post(this.PLACE_ORDER(), order)
            .then().catch((error) => console.log(error));
    }

    Orders() {
        return api.get(this.ORDERS())
            .then()
            .catch((error) => console.log(error));
    }

    OrderById(id) {
        return api.get(this.ORDER_BY_ID(id))
            .then()
            .catch((error) => console.log(error));
    }
}

export default (new OrderApi())