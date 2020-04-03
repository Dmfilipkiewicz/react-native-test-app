import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { returnCardType, typeCard } from '../../../../../../enumHelpers/TypeCard';
import Monster from './descriptions/Monster'
import styles from './Style'

const CardDescriptionContainer = ({oneCard}) => {

    const descriptionSwitch = () => {
        switch(returnCardType(oneCard.type)){
            case typeCard.MonsterCard.name: return (
                <Monster 
                    atk = {oneCard.atk}
                    def = {oneCard.def}
                    level = {oneCard.level}
                    race = {oneCard.race}
                    attribute = {oneCard.attribute}
                    archetype = {oneCard.archetype}/>
            )
            default:
                return <View><Text>Blablabla</Text></View>
        }
    }
    return (
    <View>
        <View style={styles.column_desc}>
        <View style={styles.row_desc}>
            <View style={styles.row_desc_item_flex_1}><Text>Nazwa:</Text></View>
            <View style={styles.row_desc_item_flex_2}><Text>{oneCard.name}</Text></View>
            <View style={styles.row_desc_item_flex_1}><Text>Typ:</Text></View>
            <View style={styles.row_desc_item_flex_2}><Text>{oneCard.type}</Text></View>
        </View>
        <View style={styles.row_desc}>
            <View style={styles.row_desc_item_flex_1}><Text>Opis:</Text></View>
            <View style={styles.row_desc_item_flex_6}><Text>{oneCard.desc}</Text></View>
        </View>
        {descriptionSwitch()}
        </View>
    </View>)
} 

export default CardDescriptionContainer;