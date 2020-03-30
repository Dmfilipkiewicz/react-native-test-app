import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ListOfCards from './ListOfCards.js';
import SearchForCards from './SearchForCards.js';
import {useDataCardApi, axiosGet } from '../../../../requests/api.js';
import { connect } from 'react-redux';
import { CardRequest } from '../../../../requests/apiCards.js';

const Container = (props) => {
    // const [{data}, doFetch] = useDataCardApi(
    //     'https://db.ygoprodeck.com/api/v6/cardinfo.php',
    //     {cards: []}
    //     )
    const [searchValue, setSearchValue] = useState('')
    const [cardsList, setCardsList] = useState([])

    useEffect( () => {
        console.log(props.cardsListProp)
         CardRequest.getCards(response => {
            console.log(response)
            props.dispatchCardsToState(response.data)
        })
    }, [])

    useEffect( () => {
        console.log(cardsList)
    },[cardsList])

    const handleSearchValue = ((search) => {
        setSearchValue(search)
    })

    return (<View>
        <SearchForCards handleSearchValue = {handleSearchValue}/>
        <ListOfCards/>
    </View>)
} 

const mapStateToProps = state => {
    console.log(state)
    return{
    }
}

const mapDispatchToProps =  dispatch =>{
    return {
        dispatchCardsToState: (cards) => dispatch({type: 'ADD_TO_LIST', payload: cards})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);