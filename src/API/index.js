import {API} from './api'
import { changeCardIsRememberedRoute, createNewCardRoute, deleteCardsRoute, getCardsRoute } from './routes'

export const createNewCard = (data, userId) =>{
    return API.post(JSON.stringify(data), createNewCardRoute,userId)
}

export const getCards = userId => {
    return API.get(getCardsRoute, userId)
}
export const deleteCard = (userId, cardId) => {
    return API.delete(deleteCardsRoute, userId , cardId)
}
export const changeCardIsRemembered = (body,userId, cardId) => {
    return API.patch(body, changeCardIsRememberedRoute, userId, cardId)
}
