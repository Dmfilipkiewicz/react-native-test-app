import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SearchForCards = ({handleSearchValue}) => {

    const [inputData, setInputData] = useState('')

    return (<View>
        <TextInput value = {inputData} onChangeText={text => setInputData({text})}/>
        <Button title = 'Szukaj' onPress={() => handleSearchValue}/>
    </View>)
} 

export default SearchForCards;