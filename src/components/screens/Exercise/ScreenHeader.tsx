import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { ArrowLeft } from "lucide-react-native";

import BodySvg from "@assets/body.svg";

export function ScreenHeader() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack bg="$gray600" px="$8" pt="$12">
            <TouchableOpacity onPress={handleGoBack}>
                <Icon as={ArrowLeft} color="$green500" size="xl" />
            </TouchableOpacity>

            <HStack
                mt="$3"
                alignItems="center"
                justifyContent="space-between"
                mb="$8"
            >
                <Heading color="$gray100" fontSize="$lg" flexShrink={1}>
                    Puxada frontal
                </Heading>
                <HStack gap="$1" alignItems="center">
                    <BodySvg />
                    <Text color="$gray200" textTransform="capitalize">
                        Costas
                    </Text>
                </HStack>
            </HStack>
        </VStack>
    );
}
