import React from 'react';
import { Image, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    image: {
        height: theme.image.height,
        width: theme.image.width,
        margin: 10,
        position: 'absolute',
    },
  });

const AuthorImage = ({ item }) => {
    return (
        <Image
           style={styles.image}
            source={{
            uri: item.ownerAvatarUrl,
            }}
        />
    )
}

export default AuthorImage;