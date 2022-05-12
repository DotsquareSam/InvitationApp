import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_visible:false,
      imagePath:require('./asset/appstore.png'),
      font_family:'',
      text_model_visible:false,
      heading:'Almost before we knew it, we had left the ground.'
    };
  }
  openModel(){
    this.setState({image_visible:true})
    this.forceUpdate()
  }
  changeFont(){
    this.setState({text_model_visible:true})
    this.forceUpdate()
  }
  render() {
    return (
      <View style={{backgroundColor:'#80493E',flex:1}}>
        <Modal 
        animationInTiming={1500}
        // animationOutTiming={1000}
        // backdropTransitionInTiming={800}
        // backdropTransitionOutTiming={800}
        style={{backgroundColor:"white",flex:1}} animationIn="rubberBand" backdropColor="#FFFFFF9F" 
        isVisible={this.state.image_visible}>
        <View style={{ flex: 1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:10 }}>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/image.png'),image_visible:false})}>
        <Image source={require('./asset/image.png')} style={{width:100,height:100}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/imageApp.png'),image_visible:false})}>
        <Image source={require('./asset/imageApp.png')} style={{width:100,height:100}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/image.png'),image_visible:false})}>
        <Image source={require('./asset/image.png')} style={{width:100,height:100}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/image.png'),image_visible:false})}>
        <Image source={require('./asset/image.png')} style={{width:100,height:100,marginTop:20}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/imageApp.png'),image_visible:false})}>
        <Image source={require('./asset/imageApp.png')} style={{width:100,height:100,marginTop:10}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/image.png'),image_visible:false})}>
        <Image source={require('./asset/image.png')} style={{width:100,height:100,marginTop:20}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({imagePath:require('./asset/imageApp.png'),image_visible:false})}>
        <Image source={require('./asset/imageApp.png')} style={{width:100,height:100,marginTop:20}}></Image>
        </TouchableOpacity>
        </View>
      </Modal>
      <Modal style={{backgroundColor:"white",flex:1}} animationIn="shake"  backdropColor="#FFFFFF9F" isVisible={this.state.text_model_visible}>
        <View style={{ flex: 1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:10 }}>
        <TouchableOpacity onPress={()=>{this.setState({text_model_visible:true,font_family:'Ephesis-Regular'})}} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>Ephesis-Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({text_model_visible:false,font_family:'BonheurRoyale-Regular'})} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>BonheurRoyale-Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({text_model_visible:false,font_family:'Ephesis-Regular'})} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>NotoSansJP-Black</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({text_model_visible:false,font_family:'NotoSansJP-Black'})} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>BonheurRoyale-Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({text_model_visible:false,font_family:'Ephesis-Regular'})} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>Ephesis-Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({text_model_visible:false,font_family:'BonheurRoyale-Regular'})} style={{padding:15,backgroundColor:'yellow',alignSelf:'center'}}>

        <Text>BonheurRoyale-Regular</Text>
        </TouchableOpacity>
         <TextInput style={{fontFamily:this.state.font_family}} value={this.state.heading} onChangeText={(value)=>this.setState({heading:value})} placeholder="Enter your details"></TextInput>
        </View>
      </Modal>
        <Text style={{fontFamily:this.state.font_family,fontSize:40}} onPress={()=>this.changeFont()}>{this.state.heading}</Text>
        <View style={{backgroundColor:'green',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>this.openModel()}>
          <Image source={this.state.imagePath} style={{width:100,height:100}}></Image>
           </TouchableOpacity>
           <TextInput placeholder="Enter your details"></TextInput>
        </View>
      </View>
    );
  }
}
