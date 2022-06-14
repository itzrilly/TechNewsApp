import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Article from '../components/Article'

const HomeScreen = () => {
    return (
        <ScrollView>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen