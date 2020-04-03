import React from 'react';
import { View } from 'react-native';
import CardImageContainer from './cardImageContainer';
import CardDescriptionContainer from './cardDescriptionContainer';
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