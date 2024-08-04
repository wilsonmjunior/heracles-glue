import { UserPhoto } from "@components/UserPhoto";
import { CloseIcon, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";
import { Pressable } from "react-native";

export function HomeHeader() {
    return (
        <HStack
            pt="$16"
            pb="$6"
            px="$8"
            bg="$gray600"
            alignItems="center"
            justifyContent="space-between"
        >
            <HStack alignItems="center">
                <UserPhoto uri="https://github.com/wilsonmjunior.png" />

                <VStack ml="$4">
                    <Text color="$gray100" fontFamily="$body" fontSize="$md">
                        Olá,
                    </Text>
                    <Text color="$gray100" fontFamily="$heading">
                        Wilson Junior
                    </Text>
                </VStack>
            </HStack>

            <Pressable
                onPress={() => {
                    console.warn("sair");
                }}
            >
                <Icon as={LogOut} color="$gray200" size="xl" />
            </Pressable>
        </HStack>
    );
}
