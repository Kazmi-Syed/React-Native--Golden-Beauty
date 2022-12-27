import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity , ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import Testimonials from "./Testimonials";
export default function Relaxing({navigation}){
    const TestimonialList = [
        {
            name : 'xyz' ,
            imgSource : 'https://i.pravatar.cc/100?img=16',
            testimony : 'After a long day at work, there is nothing more satisfying than an hour long massage at golden beauty to destress and forget about your troubles for a moment.' ,
        },
        {
            name : 'xyz' ,
            imgSource : 'https://i.pravatar.cc/100?img=5',
            testimony : 'After a microdermabrasion treatment my family and friends could not get over how rejuvenated I looked...and even better I felt it as well!' ,
        },
        {
            name : 'xyz' ,
            imgSource : 'https://i.pravatar.cc/100?img=9',
            testimony : 'The first thing I do every payday is get booked in for some well needed reflexolgy with golden beauty. If only I could do it every day!' ,
        }
    ]


    const Data = [
        
        {
            cat : 'Microdermabrasion',
            price : '$40',
            }
        
            ,
            {
                cat : 'Aroma facial',
            price : '$35',
            }
        
            ,
            {
                cat : 'Reflexology',
            price : '$30',
            }
        
            ,
            {
                cat : 'Back massage',
            price : '$25',
            }
        
            ,
            {
                cat : 'Full body massage',
            price : '$35',
            }
    ]

    return(
        <ScrollView>
            <Header navigation={navigation}/>
            
            <Text style={styles.Head}>Relaxation</Text>

    

            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Practicing ‘relaxation’ is paramount to managing stress. When we relax, the flow of blood increases around our body giving us more energy. It helps us to have a calmer and clearer mind which aids positive thinking, concentration, memory and decision making.</Text>
            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>Relaxation slows our heart rate, reduces our blood pressure and relieves tension. It also aids digestion as we absorb essential nutrients more efficiently when relaxed, which helps to fight off disease and infection.</Text>
            <Text style={{paddingHorizontal : 20 , paddingVertical : 5}}>At Emma's Beauty Parlour we offer a range of relaxation therapies to help reduce stress levels and give your energy levels a boost.</Text>
                
        
            <Table Data = {Data} />
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
})