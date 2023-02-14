import React from 'react';
import { ScrollView } from 'react-native';
import {View, Text, StyleSheet, TextInput, Image,ActivityIndicator} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useEffect, useState } from 'react';
import axios from "axios"
const ScreenOne =() =>{
    return (
        <ScrollView>
            <View style = {styles.screen}>

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    screen:{
      backgroundColor: 'hsl(207, 26%, 17%)',
      height:'100%',
      alignItems:'center'
    },
    

})