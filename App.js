
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [id,setId] = useState(1);
  const [inputText,setText] = useState('');
  const [animals,setAnimals] = useState([{
    id:1,
    name:'octopus',
  }]);
  
  const onPressButton = ()=>{
    setAnimals([...animals,{id: id+1,name: inputText}]);
    setId(id+1);
    setText("");
  }
  console.log(animals);

  const oneAnimal = ({item})=>(
    <View style = {styles.item}>
      <Text style={styles.textAnimal} >{item.id}</Text>
      <Text style={styles.textAnimal} >{item.name}</Text>
      <Button title='hello boy'/>
    </View>
  )
  const itemSeparator = ()=>{
    return <View style = {styles.itemSeparator}/>
  }
  const headerComponent = ()=>{
    return <Text style = {styles.listHeaderLine}>List of Animals</Text>
  }
  //main
  return (
    <View style = {styles.container}>
      <View style = {styles.input}>
        <TextInput style={styles.text} placeholder='type something here' 
                   onChangeText={newText =>setText(newText) } value = {inputText}/>
        <Button title='add' onPress={onPressButton} />
      </View>

      <SafeAreaView style= {styles.area}>
        <FlatList
          ListHeaderComponentStyle = {styles.listHeader}
          ListHeaderComponent={headerComponent}

          data = {animals}
          renderItem = {oneAnimal}
          keyExtractor = {(item) => item.id}

          ItemSeparatorComponent = {itemSeparator}
          ListEmptyComponent = {<Text>this is very animals</Text>}
        
        />
      </SafeAreaView>
    </View>  
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  input:{
    flexDirection: 'row',
    marginHorizontal:16,
    marginVertical:16,

  },
  text:{
    flex:1,
    borderWidth:1,
    marginEnd:8,
  },
  textAnimal:{
    fontSize:16,
    fontWeight:'bold',
  }
  ,
  listHeader:{
    height:55,
    justifyContent:'center',
    alignItems:'center',
    
  },
  listHeaderLine:{
    fontSize:21,
    fontWeight:'bold',
  },
  area:{
  
  },
  item:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:13,
    paddingHorizontal:13,
  },
  itemSeparator:{
    height:1,
    width:'100%',
    backgroundColor:'#CCC',
  },
});
