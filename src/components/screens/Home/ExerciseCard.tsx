import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";

export type ExerciseProps = TouchableOpacityProps;

export function ExerciseCard({ ...props }: ExerciseProps) {
    return (
        <TouchableOpacity {...props}>
            <HStack
                bg="$gray500"
                alignItems="center"
                p="$2"
                pr="$4"
                rounded="$md"
                mb="$3"
            >
                <Image
                    source={{
                        uri: "https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas-m%C3%BAsculos.png",
                    }}
                    alt="Imagem do exercicio"
                    w="$16"
                    h="$16"
                    rounded="$md"
                    mr="$4"
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="$lg" color="$white">
                        Puxada frontal
                    </Heading>
                    <Text
                        fontSize="$sm"
                        color="$gray200"
                        mt="$1"
                        numberOfLines={2}
                    >
                        3 séries x 12 repetições
                    </Text>
                </VStack>

                <Icon as={ChevronRight} color="$gray300" size="xl" />
            </HStack>
        </TouchableOpacity>
    );
}
