import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";


const screens=
{
    About:{
        screen:About,
        navigationOptions:{
            title:"About GameZone",
            //headerStyle:{backgroundColor:"#eee"}
        }
    },
   
   
}
const AboutStack=createStackNavigator(screens,{defaultNavigationOptions:
    {
        headerTintColor:"#444",
        headerStyle:{backgroundColor:"#eee",height:90}
    }
});

export default AboutStack;