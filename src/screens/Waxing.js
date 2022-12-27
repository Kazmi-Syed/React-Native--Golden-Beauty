import Header from "./Header";
import Footer from "./Footer";

import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity , ScrollView } from 'react-native';
import Table from "./Table";
import Testimonials from "./Testimonials";


export default function Waxing({navigation}){


    const TestimonialList = [
        {
            name : 'xyz',
            imgSource : 'https://i.pravatar.cc/100?img=49',
            testimony : 'golden beauty immediately puts you at ease. their waxing is the best around!'
        } ,
        {
            name : 'xyz',
            imgSource : 'https://i.pravatar.cc/100?img=43',
            testimony : 'Pain free and lasts for weeks...there\'s nothing else to say!'
        } ,
        {
            name : 'xyz',
            imgSource : 'https://i.pravatar.cc/100?img=45',
            testimony : 'golden beauty has been waxing me for years, I would never consider another beautician.'
        } ,
    ]



    const Data = [
        {
            cat : 'Brows' ,
            price : '$6' ,
            },
        
            {
            cat : 'Chin' ,
            price : '$6' ,
            },
        
            {
            cat : 'Brows, lip and chin' ,
            price : '$14' ,
            },
        
            {
            cat : 'Underarm' ,
            price : '$6' ,
            },
        
            {
            cat : 'Bikini line' ,
            price : '$10' ,
            },
        
            {
            cat : 'Brazilian' ,
            price : '$25' ,
            },
        
            {
            cat : 'Hollywood' ,
            price : '$30' ,
            },
        
            {
            cat : 'Full leg' ,
            price : '$20' ,
            },
        
            {
            cat : '3/4 leg' ,
            price : '$15' ,
            },
        
            {
            cat : '1/2 leg' ,
            price : '$12' ,
            },
        
    ]
    return(
        <ScrollView>
        <Header navigation={navigation}/>
        <Text style={{
        textAlign : 'center',
        color : '#27787a',
        marginTop : 30,
        fontSize : 23,
        fontWeight : "bold"
        }}>Waxing</Text>

    <View>
        <View >

            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Waxing is a complete hair removal solution suitable for both men and women. People tend to enjoy the
                benefits of waxing because they last longer than some other types of hair removal.</Text>
            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Waxing pulls hair from the root, which means the hair takes longer to grow back and, eventually, stops
                growing altogether. Also, waxing helps remove dead skin cells along with unwanted body hair. Its like
                getting a quick exfoliation every time. </Text>
            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Your skin stays hair-free longer with waxing, and your hair thins out over time. If you shave, the hair
                only gets thicker and grows back rapidly. The more you shave, the more you have to shave to keep it up!
            </Text>
        </View>

        </View>

        <Table Data= {Data} />
        <Testimonials Data = {TestimonialList} />
            <Footer />
        </ScrollView>


    )   
}