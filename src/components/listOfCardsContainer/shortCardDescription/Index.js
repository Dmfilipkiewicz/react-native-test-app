import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Style.js'

const ShortCardDescription = ({name, desc}) => {

    return (
    <View style={styles.list_item_card}>
        <Text>{name} - {desc}</Text>
    </View>)
} 

export default ShortCardDescription;