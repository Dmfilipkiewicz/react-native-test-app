import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { CardRequest } from '../../../../requests/apiCards';
import { connect } from 'react-redux';

const SearchForCards = ({dispatchCardsToState}) => {

    const [inputData, setInputData] = useState('')
    const [search, setSearch] = useState('Dark Magician')

    const handleSearchValue = ((search) => {
        setSearch(search)
    })

    useEffect( () =>{
        CardRequest.getSpecificCards(search, response => {
            dispatchCardsToState(response.data)
        })
    }, [search])
    return (
    <View>
        <TextInput value={inputData} onChangeText={editedText => setInputData(editedText)}/>
        <Button title = 'Szukaj' onPress={() => handleSearchValue(inputData)}/>
    </View>)
} 

const mapDispatchToProps = dispatch =>{
    return {
        dispatchCardsToState: (cards) => dispatch({type: 'ADD_TO_LIST', payload: cards})
    }
}

export default connect(null, mapDispatchToProps)(SearchForCards);