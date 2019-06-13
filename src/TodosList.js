import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class TodoList extends React.Component {
    render() {
        const { todo, image, handleDeleteTodo, handleEditTodo } = this.props;
        return (
            <View style={[styles.listStyles, styles.shadow]}>
                <Image resizeMode="cover" source={image} style={styles.imageStyles} />
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', width: 200 }}>{todo}</Text>
                <View style={{ width: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEditTodo}>
                        <Icon name="ios-create" size={30} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDeleteTodo}>
                        <Icon name="ios-trash" size={30} color="#dc3545" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    listStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
    },
    imageStyles: {
        width: 35,
        height: 35,
        marginRight: 20,
        borderRadius: 5
    }
})