import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const CardDescriptionContainer = ({oneCard}) => {

    console.log(oneCard)
    return (
    <View>
        <Text>{oneCard.name}</Text>
    </View>)
} 

export default CardDescriptionContainer;