const template = {
    cards: [],
    searchedCard: []
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
          cards: payload
        }
      }
      default:
        return state;
    }
  }
  
  export default cardReducer;