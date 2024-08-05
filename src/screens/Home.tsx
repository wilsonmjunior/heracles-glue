import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { GroupList, HomeHeader } from "@components/screens/Home";

export function Home() {
    return (
        <VStack>
            <HomeHeader />

            <GroupList />

            <VStack px="$8">
                <HStack alignItems="center" justifyContent="space-between">
                    <Heading color="$gray200">Exercícios</Heading>
                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        4
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
}
