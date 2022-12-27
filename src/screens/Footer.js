import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity } from 'react-native';

export default function Footer(){
    return(
    <View style={styles.MainFooter}>
        <View >
            <Text style = {styles.H2}>Opening Times</Text>
            <View style={styles.UL}>
                <Text>Monday, Sunday: Closed</Text>
                <Text>Tuesday, Weds, Friday: 10:00 - 18:00</Text>
                <Text>Thursday: 10:00 - 20:00</Text>
                <Text>Saturday: 09:00 - 19:00</Text>
            </View>
        </View>

        <View style={styles.Centre}>
            <Text style = {styles.H2}>Telephone</Text>
            {/* <a className="phone-link" href="tel:07723401958"> */}
                <Text>0000000000</Text>
            {/* </a> */}
        </View>

        {/* <View>
            <ul id="social-links">
                <li><a href="#facebook" target="_blank" rel="noopener"
                        aria-label="Visit our Facebook Page (Opens in a new window)"><i
                            className="fab fa-facebook-square"></i></a></li>
                <li><a href="#twitter" target="_blank" rel="noopener"
                        aria-label="Visit our Twitter Feed (Opens in a new window)"><i
                            className="fab fa-twitter-square"></i></a></li>
                <li><a href="#instagram" target="_blank" rel="noopener"
                        aria-label="Visit our Instagram Feed (Opens in a new window)"><i
                            className="fab fa-instagram-square"></i></a></li>
            </ul>
        </View> */}
        {/* <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License"
                style={{borderWidth : "0px"}} src={"https://i.creativecommons.org/l/by/4.0/88x31.png"} /></a><br />This work is
        licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons
            Attribution 4.0 International License</a>. */}
    </View>
)
}

const styles =StyleSheet.create({
    MainFooter :{
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 40 ,
        color : '#4f5051',
        backgroundColor : 'gainsboro', 
    },

    H2 : {
        fontSize : 30,
        textShadowColor: "#27787a",
        textShadowOffset :{width : 5 , height : 10}
    }, 
    UL :{
        alignItems : 'center',
        justifyContent : 'center',
    }, 

    Centre : {
        alignItems : 'center'
    }
})