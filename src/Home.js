import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TextInput,  TouchableOpacity, FlatList, } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards';
const Home = (props) => {
  const [city,setCity]=useState('');

const cities=[
  {
    name:'Daska',
    image:require('../assets/images/image3.jpg')
  },
  {
    name:'Sialkot',
    image:require('../assets/images/image4.jpg')
  },
  {
    name:'Gujranwala',
    image:require('../assets/images/image5.jpg')
  },
  {
    name:'Pasrur',
    image:require('../assets/images/image6.jpg')
  },
  {
    name:'Sambrial',
    image:require('../assets/images/image7.jpg')
  },
 
]

  return (
    <View>
      <ImageBackground source={require('../assets/images/image2.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
      />
      <View style={{
        position: 'absolute',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: deviceWidth - 20
        }}>
          <Icon name='menu' size={40} color='white' />
          <Image source={require('../assets/images/user.jpg')}
            style={{ height: 46, width: 46, borderRadius: 50, }} />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: 'white' }}>Hello A.V</Text>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Search the city by the name</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 50,
          borderWidth: 1,
          borderColor: 'white',
          marginTop: 16,
          marginHorizontal: 15,
          paddingHorizontal: 10,

        }}>
          <TextInput
          value={city}
          onChangeText={(val)=>setCity(val)}
          placeholder='Search City' placeholderTextColor='white'
            style={{
              paddingHorizontal: 10,
              color: 'white',
              fontSize: 16,
            }}
          />
          <TouchableOpacity onPress={() =>props.navigation.navigate('Details',
            {name:city}
          )}>
            <Icon name='search' color='white' size={22} />
          </TouchableOpacity>
        </View>

        <Text style={{
          color:'white',
           fontSize:25,
           paddingHorizontal:10,
           marginTop:220,
           marginBottom:20
           }}>My Locations:</Text>
        
        <FlatList 
        horizontal
        data={cities}
         renderItem={({item})=>(
         <Cards name={item.name} image={item.image} navigation={props.navigation} />
        )}/>
      </View>
    </View>
  )
}

export default Home;