import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED, ENTER_ITEM_AMOUNT, ADD_ITEM, DELETE_ITEM, SHOW_PRICE } from './constants'

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ``
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, { error: action.payload, isPending: false })
        default:
            return state
    }
}

const initialStateAmount = {
    amount: []
}

export const enterItemAmount = (state = initialStateAmount, action = {}) => {
    switch(action.type) {
        case ENTER_ITEM_AMOUNT:
            return {
                ...state, amount: [...state.amount, action.payload]
            }
        default:
            return state
    }
}

const initialStateItems = {
    items: []
}

export const addOrDeleteItems = (state = initialStateItems, action = {}) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state, items: [...state.items, action.payload]
            }
        default:
            return state

    }
}

const initialStatePrice = {
    bool: false
}

export const showPrice = (state = initialStatePrice, action = {}) => {
    switch(action.type) {
        case SHOW_PRICE:
            return Object.assign({}, { bool: true })
        default:
            return state
    }
}