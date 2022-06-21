import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Text, ScrollView, FlatList } from 'react-native'
import Article from '../components/Article'
import axios from 'axios'

const HomeScreen = () => {
    const [articles,setArticles] = useState([])
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=80da886259cd4f718da1cff1621a275a',{
            params: {
                category: 'technology'
            }
        }).then((response) => {
            // en cas de réussite de la requête
            // console.log(response.data.articles)
            setArticles(response.data.articles)
        })
        .catch(function (error) {
            // en cas d’échec de la requête
                console.log(error);
        })
        .then(function () {
            // dans tous les cas
        });
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem = {
                    ({item}) => <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />
                }
                keyExtractor={(item) => item.title}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen