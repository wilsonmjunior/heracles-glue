import { useState } from "react";
import { FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { ExerciseCard } from "@components/screens/Exercise";
import { GroupList, HomeHeader } from "@components/screens/Home";

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
                    renderItem={({ item }) => <ExerciseCard />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    );
}
