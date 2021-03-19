import { NavigationContainer } from '@react-navigation/native';
import React, {Fragment} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import navigationStrings from '../constants/navigationStrings';
import HomePage from '../Screens/HomePage/HomePage';


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

</Stack.Navigator>
        </NavigationContainer>
    )

}