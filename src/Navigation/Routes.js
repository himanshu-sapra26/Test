import { NavigationContainer } from '@react-navigation/native';
import React, {Fragment} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import navigationStrings from '../constants/navigationStrings';
import HomePage from '../Screens/HomePage/HomePage';
import DetailPage from '../Screens/DetailPage/DetailPage';
import Cart from '../Screens/Cart/Cart';
import Confirm from '../Screens/Confirm/Confirm';


const Stack = createStackNavigator();
Stack.Screen
export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    {AuthStack(Stack)}
                    <Stack.Screen
                component={HomePage}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.HOMEPAGE}

            />
           
                    <Stack.Screen
                component={DetailPage}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.DETAILPAGE}

            />
             <Stack.Screen
                component={Cart}
                options={{
                    headerShown: false
                }}
                name='cart'

            />
              <Stack.Screen
                component={Confirm}
                options={{
                    headerShown: false
                }}
                name='confirm'

            />
</Stack.Navigator>

        </NavigationContainer>
    )

}