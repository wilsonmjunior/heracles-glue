import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type IAuthRoutes = {
    SignIn: undefined;
    SignUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<IAuthRoutes>;

const Stack = createNativeStackNavigator<IAuthRoutes>();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
