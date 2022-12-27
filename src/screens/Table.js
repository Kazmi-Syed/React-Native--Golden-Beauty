import { StyleSheet, Text, View} from 'react-native';

export default function Table(props){
    
    return(
        <View style={styles.Center} >
        <Text style={styles.Head}>Price List</Text>
        
                <View style={styles.Row}>
                    <Text style={styles.Headings}>Treatment</Text>
                    <Text style={styles.Headings}>Price</Text>
                </View>

                {
                    props.Data.map((Entry , Key) => {return(            
                        <View style={styles.Row}>
                            <Text key={Key} style={styles.Cat}>{Entry.cat}</Text>
                            <Text key={Key+2} style={styles.Cost}>{Entry.price}</Text>
                        </View>

                    )})
                }
    </View>

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