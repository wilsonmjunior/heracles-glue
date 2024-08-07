import { Box, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";

import RepetitionSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";

import { ScreenHeader } from "@components/screens/Exercise";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";

export function Exercise() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flex: 1,
                paddingBottom: 32,
            }}
        >
            <ScreenHeader />

            <VStack p="$8" gap="$3">
                <Image
                    source={{
                        uri: "https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas-m%C3%BAsculos.png",
                    }}
                    alt="Imagem do exercicio"
                    resizeMode="cover"
                    w="$full"
                    h="$80"
                    rounded="$lg"
                />

                <Box
                    bg="$gray600"
                    pt="$5"
                    pb="$4"
                    px="$4"
                    rounded="$md"
                    gap="$6"
                >
                    <HStack justifyContent="space-around">
                        <HStack gap="$1" alignItems="center">
                            <Icon as={SeriesSvg} color="$green700" />
                            <Text color="$gray200" fontSize="$lg">
                                3 Séries
                            </Text>
                        </HStack>
                        <HStack gap="$1" alignContent="center">
                            <Icon as={RepetitionSvg} color="$green700" />
                            <Text color="$gray200" fontSize="$lg">
                                12 Repetições
                            </Text>
                        </HStack>
                    </HStack>

                    <Button title="Marcar como realizado" />
                </Box>
            </VStack>
        </ScrollView>
    );
}
