import { useState } from "react";
import { FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { ExerciseCard, GroupList, HomeHeader } from "@components/screens/Home";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
    const [exercises, setExercises] = useState([
        "Puxada frontal",
        "Remada unilateral",
        "Levantamento terra",
        "Agachamento",
        "Pulley",
        "Elevação lateral",
        "Corda horizontal",
        "Corda vertical",
        "Cadeira extensora",
        "Cadeira flexora",
        "Mesa flexora",
    ]);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails() {
        navigation.navigate("Exercise");
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <GroupList />

            <VStack px="$8" flex={1}>
                <HStack alignItems="center" justifyContent="space-between">
                    <Heading color="$gray200">Exercícios</Heading>
                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <ExerciseCard onPress={handleOpenExerciseDetails} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    );
}
