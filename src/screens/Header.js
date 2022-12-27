import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity } from 'react-native';

export default function Header(props){
    return(
        <View style ={styles.Header}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
                    <Text style={styles.logo}>Golden Beauty</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{props.navigation.navigate('Contact')}} style ={{height : 20}}>
                    <View onMagicTap={()=> console.log('PRessed')} style ={{height : 20 , justifyContent : 'space-between' , }}>
                        <View style={styles.lines}></View>
                        <View style={styles.lines}></View>
                        <View style={styles.lines}></View>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        alignContent : 'space-between',
        padding : 10  ,
        paddingHorizontal : 20,
        backgroundColor : '#f6f7f1',
       
    },
    logo : {
        fontWeight : 'bold',
        fontSize : 28,
        color: '#27787a',
    },
    lines :{
        width : 35,
        height : 4,
        backgroundColor: '#000'
    }
})