import {View, TextInput } from 'react-native';
import React from 'react';
const SearchBar=()=>{
    return(
        <View>
               <TextInput
        placeholder='Search for a country'
        // value={search}
        // onChangeText={text=>this.searchCountry(text)}
        />
        </View>
    )
}
export default SearchBar