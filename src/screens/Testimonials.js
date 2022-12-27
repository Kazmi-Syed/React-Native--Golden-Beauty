import { StyleSheet, Text, View , Image} from 'react-native';

export default function Testimonials(props){
    return(
<>
<View>

        {
            props.Data.map((Entry , k) => {
                return(
                    <View style={styles.Center}>
                        <Image key={k} source={{uri : Entry.imgSource}} style={styles.img} />
                        <Text key={k+1} style={styles.SubHeading}>xyz</Text>
                        <Text key={k+2}>{Entry.testimony}</Text>
                    </View>
                )
            })
        }

        </View>
</>

    )
}

const styles = StyleSheet.create({
    Center : {
            margin : 20,
            alignContent : 'center',
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : "#34A0A43B",
            borderColor : '#db9487',
            borderWidth : 2,
            padding : 20,
            shadowColor : "#db9487",
            shadowRadius : 3 ,
            shadowOffset : {width : 20 , height : 6},
            shadowOpacity : 100 , 
            
    },
    img : {
        width : 30, height : 30
    },
    

    SubHeading : {
        fontSize : 19,
    },
})
