import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import List from './src/screens/List';

export default function App() {
  const [show,setshow] = useState(false);
  const [textInputValueName,setTextInputValueName] = useState('');
  const [textInputValueDesc,setTextInputValueDesc] = useState('');
  const [textInputValueLink,setTextInputValueLink] = useState('');
  const [addList,setAddList] = useState([
    {id: 0,name: 'a' , desc: 'a' , link: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg'},
    {id: 1, name: 'b' , desc: 'b', link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg'},
    {id: 2, name: 'c' , desc: 'c', link: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'}
  ]); 
  const [idx, incr] = useState(1);
  const list = [{ id: 0, name: 'fasdf'}];
  const  pushToList = () => {
    if(textInputValueName&&textInputValueDesc&&textInputValueLink){
      setTextInputValueName('');
      setTextInputValueLink('');
      setTextInputValueDesc('');
      incr(idx + 1);
      var newArray = {id: idx,name: textInputValueName,desc: textInputValueDesc,link: textInputValueLink};
      setAddList([...addList,newArray]);
    }else{
      alert('no data');
    }
    
  }

  return (
    <View style={styles.container}>
      <Text>
        Họ tên: Nguyễn Khắc Đại
      </Text>
      <Text>MSV: PH25469</Text>
      <Button title='Thêm mới' onPress={()=> setshow(!show)} />
      {show ? (
    <>
      <TextInput 
        style = {styles.textInput}
        placeholder='Tên'
        onChangeText={(data) => setTextInputValueName(data)}
        value={textInputValueName}
      />
      <TextInput 
        style = {styles.textInput}
        placeholder='Mô tả'
        onChangeText={(data) => setTextInputValueDesc(data)}
        value={textInputValueDesc}
      />
      <TextInput 
        style = {styles.textInput}
        placeholder='Link'
        onChangeText={(data) => setTextInputValueLink(data)}
        value={textInputValueLink}
      />
      <View style={styles.buttonadd}>
        <Button style={styles.button} title='Hủy' onPress={()=> setshow(!show)}  />
        <Button style={styles.button} title='Lưu'  onPress={()=>pushToList()} />
      </View>
      
    </>  ): null
    }
    <List data={addList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',

  },
  textInput: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
    width: 400,
  },
  buttonadd: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  button: {
    width: '40%',
    height: 40,
    marginLeft: 20,
  }
});
