import React, { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View >
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: '#ffffff',
    },
})

export default GoalItem;