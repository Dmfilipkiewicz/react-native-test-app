const template = {
    cards: [],
    searchedCards: [],
    searchCardText: '',
  };
  
  function cardReducer(state = template, {type, payload}) {
    switch (type) {
      case 'ADD_TO_LIST': {
        state.cards.push(...payload);
        return {
          ...state,
          cards: payload
        }
      }
      case 'ADD_SEARCHED_CARDS_TO_LIST': {
        state.searchedCards.push(...payload);
        return{
          ...state,
          searchedCards: payload
        }
      }
      case 'SEARCH_CARD':
        state.searchCardText = payload
        return{
          ...state,
          searchCardText: payload
        }
      default:
        return state;
    }
  }
  
  export default cardReducer;