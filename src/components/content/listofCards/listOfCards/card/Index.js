import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CardImageContainer from './cardImageContainer/Index';
import CardDescriptionContainer from './cardDescriptionContainer/Index';
import { connect } from 'react-redux';

const Card = ({oneCard}) => {
    const cardData = oneCard[0];

    return (
    <View>
        <CardImageContainer oneCard = {cardData}/>
        <CardDescriptionContainer oneCard = {cardData}/>
    </View>)
} 

const mapStateToProps = state => {
    return {
        oneCard: state.cardReducer.dataFromOneCard
    }
}

export default connect(mapStateToProps)(Card);