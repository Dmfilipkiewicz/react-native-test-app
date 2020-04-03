import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import styles from './Style'


const CardImageContainer = ({oneCard}) => {
    const imgSrcCard = oneCard.card_images[0].image_url

    return (
    <SafeAreaView style={styles.image_view}>
        <View>
            <Image source={{uri: imgSrcCard}}
                    style={styles.image_card}
            />
        </View>
    </SafeAreaView>)
} 

export default CardImageContainer;