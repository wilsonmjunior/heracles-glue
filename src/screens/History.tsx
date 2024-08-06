import { useState } from "react";
import { SectionList } from "react-native";
import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { HistoryCard, ScreenHeader } from "@components/screens/History";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "22.07.24",
            data: ["Puxada lateral", "Remada unilateral"],
        },
        {
            title: "24.07.24",
            data: ["Puxada frontal"],
        },
    ]);

    return (
        <VStack>
            <ScreenHeader />

            <SectionList
                sections={exercises}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading color="$gray200" fontSize="$md" mt="$10" mb="$3">
                        {section.title}
                    </Heading>
                )}
                style={{ paddingHorizontal: 32 }}
                contentContainerStyle={
                    exercises.length === 0 && {
                        flex: 1,
                        justifyContent: "center",
                    }
                }
                ListEmptyComponent={() => (
                    <Text color="$gray100" textAlign="center">
                        Não há exercícios registrados ainda {"\n"}
                        Vamos treinar hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    );
}
