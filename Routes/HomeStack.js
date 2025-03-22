import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";



const screens=
{
    Home:{
        screen:Home,
        navigationOptions:{
            title:"GameZone",
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:"ReviewDetails",
        }
    },
   
}
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);