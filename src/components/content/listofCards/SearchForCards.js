import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { CardRequest } from '../../../../requests/apiCards';
import { connect } from 'react-redux';

const SearchForCards = ({dispatchCardToState}) => {

    const [inputData, setInputData] = useState('')
    const [search, setSearch] = useState('Dark Magician')

    const handleSearchValue = ((search) => {
        setSearch(search)
    })

    useEffect( () =>{
        CardRequest.getOneCard(search, response => {
            dispatchCardToState(response.data)
        }, () => {
            dispatchCardToState({})
        })
    }, [search])
    return (
    <View>
        <TextInput placeholder={"Wpisz kartę"} value={inputData} onChangeText={editedText => setInputData(editedText)}/>
        <Button title = 'Szukaj' onPress={() => handleSearchValue(inputData)}/>
    </View>)
} 

const mapDispatchToProps = dispatch =>{
    return {
        dispatchCardToState: (card) => dispatch({type: 'ADD_INFO_ONE_CARD', payload: card})
    }
}

export default connect(null, mapDispatchToProps)(SearchForCards);