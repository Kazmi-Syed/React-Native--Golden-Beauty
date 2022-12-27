import { useState , useEffect } from 'react';
import { StyleSheet, Text, View, TextInput , Button, TouchableOpacity , ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

import Checkbox from 'react-native-custom-checkbox';


export default function Contact({navigation}){


    //For storing the information of the 
    const [FirstName, setFirstName] = useState(()=> '');
    const [LastName, setLastName] = useState(()=> '');
    const [Email, setEmail] = useState(()=> '');
    const [Query, setQuery] = useState(()=> '');
    
    const [Wax, setWax] = useState(false);
    const [Nails, setNails] = useState(false);
    const [Relax, setRelax] = useState(false);
    
    const sendData =async()=>{
        try {
            var res =await fetch("https://formdump.codeinstitute.net" ,
            {
                method : "POST" ,
                headers : {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : "*",
                },
                body : JSON.stringify(
                    {
                        "first_name" : FirstName,
                        "last_name" : LastName, 
                        "email_address" : Email , 
                        "query-topic-nails" : Nails,
                        "query-topic-waxing" : Wax,
                        "query-topic-relaxation" : Relax,
                        "comment-box" : Query ,
                    }
                    )
                }
                )
                
                
                if(res === 200){navigation.navigate("Home")}
                else{
                    navigation.navigate("Error")
                }
            } 
            
            catch (error){
                navigation.navigate("Error")
                
            }
    }

    return(
        <ScrollView>
            <Header navigation={navigation}/>
        <View style={{marginTop:30, paddingVertical:30, color : '#4F5051' , backgroundColor : "rgba(52, 160, 164, 0.7)"}}>
            <Text style={{textAlign : 'center' , fontSize: 25 , fontStyle : 'italic' ,}}>Get In Touch</Text>
            <TextInput style={styles.Inputs} placeholder='Enter your First Name' onChangeText={(e)=>{setFirstName(e)}}/> 
            <TextInput style={styles.Inputs} placeholder='Enter you Last Name' onChangeText={(e)=>{setLastName(e)}} /> 
            <TextInput style={styles.Inputs} placeholder='Enter you Email address'onChangeText={(e)=>{setEmail(e)}} /> 

            <Text style={styles.Banner}>Please Select your Query Topic</Text>
            

            <View style={{paddingHorizontal : 70}}>
                <View style={{flexDirection : 'row', marginBottom :15 , alignItems:'center'}}>
                <Checkbox name='Waxi' size={20} onChange = {(e , value)=>{setWax(value)}}/>
                <Text style={styles.Options}>Waxing</Text>
                </View>
            
            
                <View style={{flexDirection : 'row', marginBottom :15 , alignItems:'center'}}>
                <Checkbox name='Naili' size={20} onChange = {(e , value)=>{setNails(value)}}/>
                <Text style={styles.Options}>Nails</Text>
                </View>
            
            
                <View style={{flexDirection : 'row', marginBottom :15 , alignItems:'center'}}>
                <Checkbox name='Relaxi' size={20} onChange = {(e,value)=>{setRelax(value)}}/>
                <Text style={styles.Options}>Relaxation</Text>
                </View>


            </View>
            <TextInput style={styles.Multi}   multiline={true} onChangeText={(e)=> {setQuery(e)}}/>

            <TouchableOpacity onPress={sendData}>
                <Text style={styles.But}>Submit</Text>
            </TouchableOpacity>
        </View>
            <Footer />
        </ScrollView>
    )
    
}


const styles = StyleSheet.create(
    {
        Inputs : {
            fontStyle : 'italic',
            backgroundColor : 'white',
            marginTop : 20,
            marginHorizontal : 40,
            fontSize : 20,
            paddingHorizontal : 15,
            paddingVertical : 5,
            borderWidth : 1 , 
            borderRadius : 23,
            borderColor : 'black'
        },
        Multi : {
            height : 150,
            fontStyle : 'italic',
            backgroundColor : 'white',
            marginTop : 20,
            marginHorizontal : 40,
            fontSize : 14,
            paddingHorizontal : 15,
            paddingVertical : 0,
            borderWidth : 2,
            marginBottom : 20,
            borderColor : 'black'
        },

        Options : {
            fontStyle : 'italic' , 
            fontSize : 16 , 
        },

        Banner :{
            color : '#4F5051' ,
            marginLeft : 50 ,
            marginTop : 20 , 
            fontSize : 17 , 
            marginBottom : 10,
            fontWeight : "700",
        } , 
        
        But : {
            textAlign : 'center',
            backgroundColor : '#93625B',
            fontSize : 20,
            color : 'white',
            fontWeight : '400',
            borderRadius : 15 ,
            paddingVertical : 6,
            marginHorizontal : 50 ,
        }
    }
)