import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ShortCardDescription from './shortCardDescription/Index';
import ImageCard from './imageCard/Index';

const ListOfCardsContainer = ({cardList, dispatchSearchToState, filteredCardList}) => {

    const [inputData, setInputData] = useState('')
    const [searchCards, setSearchCards] = useState('')

    useEffect( () =>{
        dispatchSearchToState(searchCards)
    }, [searchCards])

    const handleSearchValue = ((search) => {
        setSearchCards(search)
    })

    return (
    <View>
        <View>
            <TextInput value={inputData} onChangeText={editedText => setInputData(editedText)}/>
            <Button title = 'Szukaj' onPress={() => handleSearchValue(inputData)}/>
        </View>
        <FlatList
            data = {filteredCardList}
            renderItem={({item}) => 
            <View>
                <ImageCard
                    cardImages = {item.card_images[0]}
                />
                <ShortCardDescription 
                    name = {item.name} 
                    desc = {item.desc}
                />
            </View>}
            keyExtractor={item => item.id.toString()}
        />
    </View>)
} 

const mapStateToProps = state => {   
    const {item} = state.cardReducer.cards
    let searchedValues = state.cardReducer.cards.filter(function(item) {
        return item.name.includes(state.cardReducer.searchCardText);
    });
    return{
        cardList: item,
        filteredCardList: searchedValues
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchSearchToState: (searchText) => dispatch({type: 'SEARCH_CARD', payload: searchText})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCardsContainer);