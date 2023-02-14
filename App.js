import React from 'react';
import { ScrollView } from 'react-native';
import {View, Text, StyleSheet, TextInput, Image,ActivityIndicator} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useEffect, useState } from 'react';
import axios from "axios"
import SearchBar from './src/components/searchbar';
import {NavigationContainer} from '@react-navigation/native';



const App = ()=>{
  const data = [
    {key:'1', value: 'Africa'},
    {key:'2', value: 'America'},
    {key:'3', value: 'Europe'},
    {key:'4', value: 'Oceania'},
    {key:'5', value: 'Asia'}, 
  ];
  const [selected, setSelected] = React.useState("");
  const [search, setSearch] = useState('');
  const [displayedCount, setDisplayedCount] = React.useState([]);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setDisplayedCount(response.data);
    } catch (error) { 
      console.error(error);
    }
  }
  const onRender = async ()=>{
   await getUser()
   setLoading(false)
  
  }
  useEffect(onRender,[]);

  const searchCountry = (text) => {
    alert(textToSearch);
  }
  
  return(
    <ScrollView>
    <View style = {styles.screen}>
      <View style={styles.mode}>
        <Text style={styles.modeText}>Where in the world?</Text>
        <Text style={styles.modeText}>Dark Mode</Text>
      </View>
      <View>
     <SearchBar/>
      </View>
      <View style={styles.combobox}>
       <SelectList style = {styles.list}
        setSelected={setSelected} 
        data={data} 
    /> 
      
      </View>
      {loading ? 
      <ActivityIndicator size="large"/>
      : 
      displayedCount?.map((country) => {
        return <View key={country.idd} style={styles.countyScreen}>
            <Image 
            style={{height:180 ,width:"100%"}}
                    source={{uri:country.flags.png}}/>
            <View style={styles.countryInfo}>
            <Text style={styles.commonName}>{country.name.common}</Text>
            <Text style={{fontWeight:'600', fontSize:15}}>Population: {country.population}</Text>
            <Text style={{fontWeight:'600', fontSize:15}}>Region: {country.region}</Text>
            <Text style={{fontWeight:'600', fontSize:15}}>Capital: {country.capital}</Text>
            </View>
          </View>
      })}

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
mode:{
  backgroundColor:'hsl(209, 23%, 22%)',
  height:100,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  color:' hsl(0, 0%, 100%)',
  alignItems:'center',
},
modeText:{
  fontSize:20,
  fontWeight:'600',
  marginHorizontal:20
},
search:{
  backgroundColor:'hsl(209, 23%, 22%)',
  width:'90%',
  borderRadius:8,
  alignItems:'center',
  marginVertical:30
},
combobox:{
width:'60%',
marginRight:100,
backgroundColor:'hsl(209, 23%, 22%)',
borderRadius:5
},
countyScreen:{
  width:'70%',
  height:300,
  backgroundColor:'hsl(209, 23%, 22%)',
  marginVertical:50,
  borderRadius:10
}

})
export default App;