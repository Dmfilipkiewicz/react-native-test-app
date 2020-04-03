import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ImageModal from 'react-native-image-modal';
import styles from './Style'

const ImageCard = ({cardImages}) => {

// console.log({cardImages})
    return (
    <View style={styles.image_view}>
        <ImageModal
            resizeMode = "contain"
            imageBackgroundColor = "#e9eff7"
            style={styles.image_card}
            source= {{
                uri: cardImages.image_url
            }}
        />
    </View>)
} 

export default ImageCard;