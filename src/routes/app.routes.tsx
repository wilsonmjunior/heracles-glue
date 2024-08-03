import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

type IAppRoutes = {
    Exercise: undefined;
    History: undefined;
    Home: undefined;
    Profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<IAppRoutes>;

const Tabs = createBottomTabNavigator<IAppRoutes>();

export function AppRoutes() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="History" component={History} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Exercise" component={Exercise} />
        </Tabs.Navigator>
    );
}
