import React, { useState } from 'react';
import { View, Text, ShadowPropTypesIOS } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ShortCardDescription from './shortCardDescription/Index';
import ImageCard from './imageCard/Index';

const ListOfCardsContainer = ({cardList}) => {

    return (
    <View>
        <FlatList
            data = {cardList}
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
    return{
        cardList: state.cardReducer.cards
    }
}

export default connect(mapStateToProps)(ListOfCardsContainer);