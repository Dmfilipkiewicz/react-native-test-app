import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Style.js'

const ShortCardDescription = ({data}) => {
    return (
    <View style={styles.list_item_card}>
        <Text>{data.name}</Text>
        <Text>{data.desc}</Text>
    </View>)
} 

export default ShortCardDescription;