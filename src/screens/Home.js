import Footer from "./Footer";
import Header from './Header';

import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity , ScrollView } from 'react-native';


export default function Home({navigation}){
    return(
        <ScrollView>
            <Header navigation={navigation}/>

            <View>
        <View style={styles.Center}>
            <Text style={styles.Head}>What we offer</Text>
            <View >

                <View style={styles.CentredBorder} >
                    <Image source={require('../../assets/nails-homepage.jpg')} style={ styles.img} />
                    <TouchableOpacity style={styles.Center} onPress={()=>{navigation.navigate('Nails')}}>
                            <Text style={styles.Inner}>Nails</Text>
                            <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.CentredBorder} >
                    <Image source={require('../../assets/waxing-homepage.jpg')} style={ styles.img} />
                    <TouchableOpacity style={styles.Center} onPress={()=>{navigation.navigate('Waxing')}}>
                            <Text style={styles.Inner}>Waxing</Text>
                            <Text style={{marginHorizontal : 7}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.CentredBorder} >
                    <Image source={require('../../assets/relaxation-main-image.jpg')} style={ styles.img} />
                    <TouchableOpacity style={styles.Center} onPress={()=>{navigation.navigate('Relaxing')}}>
                            <Text style={styles.Inner}>Relaxation</Text>
                            <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        
                    </TouchableOpacity>
                </View>

            </View>
        </View>

        <View style={styles.Center}>
            <Text style={styles.Head}>Daily Feed</Text>

            <View>

                <View style={styles.CentredBorder}>

                    <Text style={{fontSize : 17 , marginVertical : 5}}>New Products</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>


                </View>

                <View style={styles.CentredBorder}>

                    <Text style={{fontSize : 17 , marginVertical : 5}}>Relaxation Benefits</Text>
                    <Text  style={{fontSize : 14 , marginHorizontal : 5 ,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>


                </View>

                <View style={styles.CentredBorder}>

                    <Text  style={{fontSize : 17 , marginVertical : 5}}>Famous celebrities</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>


                </View>
            </View>
        </View>


        <View style={styles.Center}>
            <Text style={styles.Head}>About Us</Text>

            <View style={styles.Padded}>


                <View>
                    <Text style={styles.paras}>We take great pride in providing the most exceptional and high-quality services on the market
                        right now. We make every item with a lot of love and care, from our family to yours. We
                        sincerely hope you take pleasure in it as much as we do in presenting it to you.</Text>
                    <Text style={styles.paras}>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit. </Text>
                    <Text style={styles.paras}>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</Text>
                    <Text style={styles.paras}>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</Text>
                    <Text style={styles.paras}>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit.
                    </Text>
                </View>

            </View>
        </View>
    </View>
            <Footer />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Center : {
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
        
    },

    Inner :{
        fontSize : 16,
        fontWeight : '500',
    },

    Padded : {
        paddingTop : 20 ,
        paddingHorizontal : 40,

    },

    CentredBorder :{
        marginTop : 20,
        borderColor : '#db9487',
        borderWidth : 2,
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
    
    },

    Head : {
        color : '#27787a',
        marginTop : 30,
        fontSize : 20,
        marginTop : 30,
        fontSize : 23,
        fontWeight : 'bold'
    } ,

    img : {width : 50 , height : 50 },
    

    Box : {
        marginTop : 20,
        borderColor : '#db9487',
        borderWidth : 2
    },

    paras :{
        fontSize : 15 ,
        textAlign : 'center',
    }
})