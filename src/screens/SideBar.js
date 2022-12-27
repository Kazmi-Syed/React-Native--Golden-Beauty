import { DrawerNavigatonItems } from "react-navigation-drawer";
import { ScrollView } from "react-native";

export default function SideBar(){
    return(
        <ScrollView>
            <View>
                <DrawerNavigatonItems {...props}/>
            </View>
        </ScrollView>

        
    )
}