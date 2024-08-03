import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Page } from "@components/Page";

export function SignIn() {
    return (
        <Page>
            <VStack flex={1} bg="$gray700">
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
                        <Heading color="$gray100">Acesse sua conta</Heading>
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Input placeholder="Senha" secureTextEntry />

                        <Button title="Entrar" mt="$4" isLoading={false} />
                    </Center>

                    <Center flex={1} mt="$4" justifyContent="flex-end" gap="$3">
                        <Text
                            color="$gray100"
                            fontSize="$sm"
                            fontFamily="$body"
                        >
                            Ainda não tem acesso?
                        </Text>

                        <Button title="Criar conta" variant="outline" />
                    </Center>
                </VStack>
            </VStack>
        </Page>
    );
}
