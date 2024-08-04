import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HistorySvg from "@assets/history.svg";
import HomeSvg from "@assets/home.svg";
import ProfileSvg from "@assets/profile.svg";

import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Platform } from "react-native";

type IAppRoutes = {
    Exercise: undefined;
    History: undefined;
    Home: undefined;
    Profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<IAppRoutes>;

const Tabs = createBottomTabNavigator<IAppRoutes>();

export function AppRoutes() {
    const { tokens } = gluestackUIConfig;

    const iconSize = tokens.space["8"];

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: tokens.colors.green500,
                tabBarInactiveTintColor: tokens.colors.gray200,
                tabBarStyle: {
                    backgroundColor: tokens.colors.gray600,
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? "auto" : 96,
                    paddingBottom: tokens.space["10"],
                    paddingTop: tokens.space["6"],
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Exercise"
                component={Exercise}
                options={{ tabBarButton: () => null }}
            />
        </Tabs.Navigator>
    );
}
