import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Style'

const Monster = ({atk, def, level, race, attribute, archetype}) => {

    return (
        <>
        <View style={styles.row_desc}>
                <View style={styles.row_desc_item_flex_2, styles.row_desc_item_padding}>
                    <Text>Rasa: {race}</Text>
                </View>
                <View style={styles.row_desc_item_flex_1, styles.row_desc_item_padding}>
                    <Text>Poziom: {level}</Text>
                </View>
                <View style={styles.row_desc_item_flex_2, styles.row_desc_item_padding}>
                    <Text>Atrybut: {attribute}</Text>
                </View>
        </View>
        <View style={styles.row_desc}>
                <View style={styles.row_desc_item_flex_2, styles.row_desc_item_padding}>
                    <Text>Archetyp: {archetype}</Text>
                </View>
                <View style={styles.row_desc_item_flex_1, styles.row_desc_item_padding}>
                    <Text>Atak: {atk}</Text>
                </View>
                <View style={styles.row_desc_item_flex_1, styles.row_desc_item_padding}>
                    <Text>Obrona: {def}</Text>
                </View>
        </View>
        </>)
} 

export default Monster;