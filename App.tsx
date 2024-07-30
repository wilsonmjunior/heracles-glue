import {
    Roboto_400Regular,
    Roboto_700Bold,
    useFonts,
} from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { StatusBar, StyleSheet, View } from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GluestackUIProvider>
            <View style={styles.container}>
                <Text color="white">Welcome</Text>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
            </View>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
});
