import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CardImageContainer from './cardImageContainer/Index';
import CardDescriptionContainer from './cardDescriptionContainer/Index';

const Card = props => {

    return (
    <View>
        <CardImageContainer/>
        <CardDescriptionContainer/>
    </View>)
} 

export default Card;