import React, { useState } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("")

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler2() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/images/goal.jpg")}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler2}
                            color="#b180f0"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancelModal}
                            color="#f31282"
                        />

                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
})

export default GoalInput;