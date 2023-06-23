import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'

const App = () => {
  return (
     <>
     <UploadSample/>
     </>
  )
}


const UploadSample = () =>{
  const [file,setFile] = useState<any>({});

  let options={
    title: 'Select Image',
    customButtons:[
      {
        name:'customOptionKey',
        title:'Choose photo from custom option'
      }
    ],
    storageOptions:{
      skipBackup:true,
      path:'images',
    }
  }
  const upload = () =>{
    launchImageLibrary({
      mediaType:'photo'
    },setFile)
  }

const postFile = () =>{
  const formData = new FormData()
  formData.append('profileImg',{
    uri:file.assets[0].uri,
    name:file.assets[0].fileName,
    type:file.assets[0].type
  })
  // formData.append('userId',5)
  axios.post("http://localhost:3000/api/upload",formData,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}
return(
  <SafeAreaView>
        <Button title='upload' onPress={upload}></Button>
    <Button title='ADD' onPress={postFile}></Button>
  </SafeAreaView>
)
}

export default App

const styles = StyleSheet.create({})