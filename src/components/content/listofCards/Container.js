import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ListOfCards from './listOfCards/Index.js';
import SearchForCards from './SearchForCards.js';
import {useDataCardApi, axiosGet } from '../../../../requests/api.js';
import { connect } from 'react-redux';
import { CardRequest } from '../../../../requests/apiCards.js';

const Container = ({oneCard}) => {

    const [cardData, setCardData] = useState({})

    useEffect(() => {
        console.log("cardData")
        setCardData(oneCard[0])
    },[oneCard])

    const showComponents = (() => {
        if (Object.keys(oneCard).length !== 0) {
            return (
                <View>
                    <ListOfCards/>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Nie znaleziono karty :(</Text>
                </View>
            )
        }
    })

    return (
        <View>
            <SearchForCards/>
            {showComponents()}
        </View>
        )
} 

const mapStateToProps = state => {   
    return{
        oneCard: state.cardReducer.dataFromOneCard,
    }
}


export default connect(mapStateToProps)(Container);