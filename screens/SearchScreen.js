import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import Article from '../components/Article'
import axios from 'axios'

const SearchScreen = () => {
    const [ searchText, setSearchText ] = useState('')
    const [ articles, setArticles ] = useState([])

    const searchArticles = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=80da886259cd4f718da1cff1621a275a',{
            params: {
                category: 'sports',
                q: searchText
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

    return(
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles} />
            <FlatList
                data={articles}
                renderItem = { ({item}) => 
                    <Article
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
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#fff'
    }
})