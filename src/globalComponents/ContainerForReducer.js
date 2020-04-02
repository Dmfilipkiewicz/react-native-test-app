import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardRequest } from '../../requests/apiCards';

const ContainerForReducer = ({cards, cardsListProp, dispatchCardsToState}) => {

    useEffect( () => {
        // console.log(cardsListProp)
         CardRequest.getCards(response => {
            dispatchCardsToState(response.data)
        })
    }, [])
    return (
        <>
        </>
    )

} 

const mapStateToProps = state => {
    console.log("To jest maptostate")
    console.log(state)
    
    return{
        cards: state.cardReducer.cards
    }
}

const mapDispatchToProps =  dispatch =>{
    return {
        dispatchCardsToState: (cards) => dispatch({type: 'ADD_TO_LIST', payload: cards})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerForReducer);