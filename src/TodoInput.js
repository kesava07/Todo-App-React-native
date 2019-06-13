import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons'

export default class TodoInput extends React.Component {
    render() {
        const { handleOnChange, todoText, handleAddTodo, edit, handleUpdate, cancelUpdate } = this.props;
        let displayButton = (
            <TouchableOpacity style={[styles.buttonStyles, styles.shadow]} onPress={handleAddTodo}>
                <Text style={{ color: "white", fontSize: 20 }}> <Icon name="plus" size={25} /> ADD</Text>
            </TouchableOpacity>
        );
        if (edit) {
            displayButton = (
                <React.Fragment>
                    <TouchableOpacity style={[styles.updateButton, styles.shadow]} onPress={handleUpdate}>
                        <IonIcons name="ios-done-all" color="white" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cancelButton, styles.shadow]} onPress={cancelUpdate}>
                        <IonIcons name="ios-close-circle-outline" color="white" size={25} />
                    </TouchableOpacity>
                </React.Fragment>
            )
        }
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.inputStyles, styles.shadow]}
                    onChangeText={handleOnChange}
                    value={todoText}
                    placeholder="Add a todo"
                />
                {displayButton}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
    },
    inputStyles: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        width: 250,
        height: 50,
        marginRight: 10,
        backgroundColor: 'white'
    },
    buttonStyles: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#64ddba",
        borderRadius: 5
    },
    updateButton: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1a73e8",
        borderRadius: 5
    },
    cancelButton: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dc3545",
        borderRadius: 5,
        marginLeft: 3
    }
})

