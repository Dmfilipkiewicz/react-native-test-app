import React, { useState } from 'react';
import { View, Text, ShadowPropTypesIOS } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ShortCardDescription from './shortCardDescription/Index';

const ListOfCardsContainer = ({cardList}) => {

    return (
    <View>
        <FlatList
            data = {cardList}
            renderItem={({item}) => <ShortCardDescription name = {item.name} desc = {item.desc}/>}
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