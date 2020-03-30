import {axiosGet} from './api.js'

export const CardRequest = {
    getCards:(success, failure) => {
        axiosGet('https://db.ygoprodeck.com/api/v6/cardinfo.php', success, failure)
    }
}