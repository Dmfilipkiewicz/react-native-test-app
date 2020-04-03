import {axiosGet} from '../config/api.js'

export const CardRequest = {
    getCards: async () => await axiosGet(''),
    getOneCard: async (search) => await axiosGet(`?name=${search}`),
    getSpecificCards: async (search) => await axiosGet(`?fname=${search}`)
}