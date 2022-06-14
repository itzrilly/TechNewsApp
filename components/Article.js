import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native'

const Article = () => {
    return (
        <SafeAreaView style={styles.container}>
            { /* image */ }
            <Image  
                source={{ uri: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' }}  
                style={styles.image} 
            />

            <View style={{ padding: 20 }}>
                { /* title */ }
                <Text style={styles.title}>Tech News Application using React Native</Text>
                
                { /* description */ }
                <Text style={styles.description}>
                    You are watching this tutorial from ProgrammingKnowledge Youtube Channel!
                    You are watching this tutorial from ProgrammingKnowledge Youtube Channel!
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>Ridwane Garba</Text></Text>
                    <Text style={styles.date}>Aug 9th 22</Text>
                </View>

                {/*  source  */}
                <View style={{ marginTop: 10 }}>
                    <Text>source: <Text style={styles.source}>ProgrammingKnowledge</Text></Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: Dimensions.get('window').width * .9,
        alignSelf: 'center',
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: '#fff',
        marginTop: 20
    },
    image: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    heading: {

    },
    author: {
        fontWeight: 'bold',
        fontSize: 15
    },
    date: {
        fontWeight: 'bold',
        color: '#e63946',
        fontSize: 15
    },
    source: {
        color: '#e63946',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Article