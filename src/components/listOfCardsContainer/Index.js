import React, { useState, useEffect } from 'react';
import { View, Button, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ShortCardDescription from './shortCardDescription/Index';
import ImageCard from './imageCard/Index';
import { CardRequest } from '../../../requests/apiCards';

const ListOfCardsContainer = ({filteredCardList, dispatchSearchedCardsToState}) => {

    const [inputData, setInputData] = useState('')
    const [searchCards, setSearchCards] = useState('')
    const [Loading, setLoading] = useState(true)

    useEffect( () =>{
        setLoading(true)
        CardRequest.getSpecificCards(searchCards, response => {
            dispatchSearchedCardsToState(response.data)
            setLoading(false)
        })
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
                    data = {item}
                />
            </View>}
            keyExtractor={item => item.id.toString()}
        />
    </View>)
} 

const mapStateToProps = state => {   
    return{
        cardList: state.cardReducer.cards,
        filteredCardList: state.cardReducer.searchedCards
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchSearchedCardsToState: (cards) => dispatch({type: 'ADD_SEARCHED_CARDS_TO_LIST', payload: cards})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCardsContainer);