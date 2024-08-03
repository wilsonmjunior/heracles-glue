import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Page } from "@components/Page";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Page>
            <VStack flex={1}>
                <Image
                    w="$full"
                    h={624}
                    source={BackgroundImage}
                    defaultSource={BackgroundImage}
                    alt="Pessoas Treinando"
                    position="absolute"
                />

                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                        <Logo />

                        <Text color="$gray100" fontSize="$sm">
                            Treine sua mente e seu corpo
                        </Text>
                    </Center>

                    <Center gap="$4">
                        <Heading color="$gray100">Crie sua conta</Heading>

                        <Input placeholder="Nome" />
                        <Input placeholder="E-mail" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Input
                            placeholder="Confirme sua senha"
                            secureTextEntry
                        />

                        <Button title="Criar conta" mt="$4" isLoading={false} />
                    </Center>

                    <Center flex={1} mt="$4" justifyContent="flex-end">
                        <Button
                            title="Voltar para o login"
                            variant="outline"
                            onPress={handleGoBack}
                        />
                    </Center>
                </VStack>
            </VStack>
        </Page>
    );
}
