import React from 'react';
import { View, Text } from 'react-native';
import ListOfCards from './listOfCards/index.js';
import SearchForCards from './SearchForCards.js';
import { connect } from 'react-redux';

const Container = ({oneCard}) => {

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