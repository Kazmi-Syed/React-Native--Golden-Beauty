import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import Testimonials from "./Testimonials";

import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity , ScrollView } from 'react-native';

    const TestimonialList = [
        
        {
                        
            name : 'xyz' , 
            imgSource : "https://i.pravatar.cc/100?img=36",
            testimony : 'After having years of nail problems, a month with golden beauty and my nails are immaculate!'
        },

        {
            name : 'xyz' , 
            imgSource : 'https://i.pravatar.cc/100?img=34',
            testimony : 'golden beauty came to my rescue just before a wedding when I had damaged my nails putting on my dress.the artist had them pristine and ready for the days festivities in no time at all.'
        },

        {
            name : 'xyz' , 
            imgSource : 'https://i.pravatar.cc/100?img=21',
            testimony : 'I have been going to golden beauty for years, no one else is getting anywhere near my fingers!'
        },
    ]
export default function Nails({navigation}){
    return(
        <ScrollView >
            <Header navigation={navigation}/>
            <Text style={styles.Head}>Nails</Text>
                  
                <View>

                    <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Like a great new haircut or a terrific skin care regimen, healthy, well-manicured nails are an integral
                        part of a neat, pulled-together appearance - one that can work as an asset in both the social and the
                        business world.</Text>
                    <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Unfortunately, experts say both men and women fall prey to myths and old wives' tales about how to care
                        for nails.</Text>
                    <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>wdo the hard work for you, so your nails remain in pristine condition, no
                        matter what you are doing.</Text>
                    <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>As with all treatments, after care is vitally important. Our YouTube video
                            below provides some hints and tips for gel nail care after you leave the salon. If you have any
                        questions at all, please do not hesitate to ask for further advice.</Text>
                </View>

                <View style={styles.Center} >
                    <Text style={styles.Head}>Price List</Text>
                    
                            <View style={styles.Row}>
                                <Text style={styles.Headings}>Treatment</Text>
                                <Text style={styles.Headings}>Price</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Gel polish - bare nails</Text>
                                <Text style={styles.Cost}>$20</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Gel polish - infill</Text>
                                <Text style={styles.Cost}>$23</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Hard gel overlay</Text>
                                <Text style={styles.Cost}>$30</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Extensions</Text>
                                <Text style={styles.Cost}>$40</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Extensions - infill</Text>
                                <Text style={styles.Cost}>$35</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Hard gel overlay</Text>
                                <Text style={styles.Cost}>$30</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Hard gel overlay - infill</Text>
                                <Text style={styles.Cost}>$35</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Gel polish - toes</Text>
                                <Text style={styles.Cost}>$20</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>Acrylic repair</Text>
                                <Text style={styles.Cost}>$5 per big toe, £2 all others</Text>
                            </View>
                            <View style={styles.Row}>
                                <Text style={styles.Cat}>File and polish</Text>
                                <Text style={styles.Cost}>$12</Text>
                            </View>
                </View>

            
            <Testimonials Data = {TestimonialList} />
            <Footer />
        </ScrollView>
    )   
}
const styles = StyleSheet.create({
    Head : {
        textAlign : 'center',
        color : '#27787a',
        marginTop : 30,
        fontSize : 23,
        fontWeight : 'bold'

    },

    SubHeading : {
        fontSize : 19,
    },
    Center  : {
        alignContent : 'center',
        justifyContent : 'center',
        alignItems : 'center',
    },
    Headings : {
        fontSize : 20,
        textAlign : 'center',
        borderColor : 'black',
        borderWidth : 2,
        width : 180,
        fontWeight : "bold"
    },
    img : {
        width : 30, height : 30
    },
    
    Row : {
        flexDirection : 'row',
    },
    Cat : {
        fontSize : 16,
        width : 180,
        borderColor : 'black',
        borderWidth : 2,
        paddingLeft : 10,
        borderTopWidth : 0,
    },
    Cost : {
        textAlign : 'center',
        fontSize : 16,
        borderColor : 'black',
        borderWidth : 2,
        width : 180,
        borderTopWidth : 0,
    }
})