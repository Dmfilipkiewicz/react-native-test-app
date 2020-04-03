const template = {
    cards: [],
    searchedCards: [],
    dataFromOneCard: {},
    searchCardText: '',
  };
  
  function cardReducer(state = template, {type, payload}) {
    switch (type) {
      case 'ADD_TO_LIST': {
        return {
          ...state,
          cards: payload
        }
      }
      case 'ADD_INFO_ONE_CARD':{
        return{
          ...state,
          dataFromOneCard: payload
        }
      }
      case 'ADD_SEARCHED_CARDS_TO_LIST': {
        return{
          ...state,
          searchedCards: payload
        }
      }
      case 'SEARCH_CARD':
        return{
          ...state,
          searchCardText: payload
        }
      default:
        return state;
    }
  }
  
  export default cardReducer;