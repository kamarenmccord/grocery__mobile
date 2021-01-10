import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './Header';

const LOCAL_API = 'http://localhost:9000';

export default function App() {

  const [mealData, setMealData] = useState('');

  useEffect(()=>{
    fetch(LOCAL_API+'/view', {
      method: 'get',
    }).then(res=>(res.json()))
      .then(data=>{setMealData(data)})
  }, [])

  return (
    <View className='app' style={styles.container}>
      <Header />
      {mealData? 
        mealData.map(meal=>(
          <ScrollView style={styles.smContainer}>
            <View style={styles.meal__content}>
              <Image 
                  key={meal._id}
                  source={{uri: meal.image}}
                  style={{width: 100, height: 100, borderRadius: 20}} 
              />
              <View style={styles.title}>{meal.title}</View>
            </View>

            <View>
              <View style={styles.instructions}>{meal.instructions}</View>
            </View>
          </ScrollView>))
        :
        <Text>
           'Stay here while we fetch the data'
        </Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbb",
    borderWidth:2,
    borderStyle: 'solid',
    borderColor:"black",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions:{
    maxHeight: 93,
    overflow: 'hidden',
  },
  smContainer:{
    display:"flex",
    flexDirection:"column",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    width: "80%",
  },
  meal__content:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingBottom: 10,
    marginBottom: 10,
  },
  title:{
    fontSize: 20,
    fontWeight:"bold",
  }
});
