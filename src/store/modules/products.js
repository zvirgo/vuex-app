import db from '../../assets/data/db'
const state = {
    all: []
}
const getters = {
    allProducts: state => state.all
}
const actions = {
    getAllProducts({ commit }) {
        db.getProducts(products => {
            commit('receiveProduct', { products })
        })
    }
}
const mutations = {
    receiveProduct(state, { products }) {
        state.all = products
    },
    addToCard(state, { id }) {
        state.all.find(productItem => productItem.id === id).inventory--;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}