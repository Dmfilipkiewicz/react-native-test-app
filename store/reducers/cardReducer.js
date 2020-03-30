const template = {
    users: [{name: 'test', age: 29, id: '1'}],
    cards: []
  };
  
  function cardReducer(state = template, {type, payload}) {
    switch (type) {
      case 'ADD_TO_LIST': {
        console.log(payload)
        console.log(state)
        return state.cards.push(...payload);
      }
      default:
        return state;
    }
  }
  
  export default cardReducer;