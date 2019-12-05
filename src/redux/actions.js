import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED, ENTER_ITEM_AMOUNT, ADD_ITEM, DELETE_ITEM, SHOW_PRICE } from './constants'

export const requestRobots = () => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

export const enterItemAmount = amount => ({
    type: ENTER_ITEM_AMOUNT,
    payload: amount
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id
})

export const showPrice = () => ({
    type: SHOW_PRICE
})