import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, Text, View, VStack } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";

export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Center mt="$6" px="$10">
                    <UserPhoto
                        uri="https://github.com/wilsonmjunior.png"
                        size="2xl"
                    />

                    <View mt="$2" mb="$8">
                        <TouchableOpacity>
                            <Text
                                fontSize="$md"
                                fontFamily="$heading"
                                color="$green500"
                            >
                                Alterar Foto
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Center gap="$4">
                        <Input placeholder="Nome" bg="$gray600" />
                        <Input
                            placeholder="wilson@email.com"
                            bg="$gray600"
                            isReadOnly
                        />
                    </Center>

                    <>
                        <Heading
                            alignSelf="flex-start"
                            color="$gray200"
                            fontSize="$md"
                            mt="$12"
                            mb="$2"
                        >
                            Alterar senha
                        </Heading>

                        <Center w="$full" gap="$4">
                            <Input
                                placeholder="Senha antiga"
                                bg="$gray600"
                                secureTextEntry
                            />
                            <Input
                                placeholder="Nova Senha"
                                bg="$gray600"
                                secureTextEntry
                            />
                            <Input
                                placeholder="Confirmar senha"
                                bg="$gray600"
                                secureTextEntry
                            />
                            <Button title="Atualizar" />
                        </Center>
                    </>
                </Center>
            </ScrollView>
        </VStack>
    );
}
