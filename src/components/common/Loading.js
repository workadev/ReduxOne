import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ loadersize }) => {
    return (
        <View style={styles.loadingStyle}>
            <ActivityIndicator size={loadersize || 'large'} />
        </View>
    );
};

const styles = {
    loadingStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Loading };
