const template = {
    cards: [],
    searchedCard: [],
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
      case 'ADD_CARD_TO_LIST': {
        state.searchedCard.push(...payload);
        return{
          ...state,
          searchedCard: payload
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