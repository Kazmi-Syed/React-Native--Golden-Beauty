import Header from "./Header";
import Footer from "./Footer";
import { StyleSheet, Text, View, TextInput , Button, TouchableOpacity , ScrollView } from 'react-native';


export default function Error({navigation}){

    return(
        <ScrollView>
            <Header navigation={navigation}/>

            <Text style={styles.Banners}>404 Error | Sorry, the page you are looking for cannot be found</Text>
            <Text style={styles.Banners}>Please navigate back to the main website using the navigation menu</Text>
            <Footer />
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    Banners : {
        fontSize : 20 ,
        marginTop : 40,
        textAlign  : 'center',
        marginHorizontal : 30
    }
})