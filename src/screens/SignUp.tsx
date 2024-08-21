import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { InputForm } from "@components/Form";
import { Page } from "@components/Page";

const formSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha de ter pelo menos 6 dígitos"),
  confirmPassword: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password"), ""], "A confirmação de senha não confere"),
});

type FormData = yup.InferType<typeof formSchema>;

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSingUp(data: FormData) {
    // console.warn("data:: ", data);
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

            <InputForm
              name="name"
              placeholder="Nome"
              control={control}
              error={errors.name?.message}
            />
            <InputForm
              name="email"
              placeholder="E-mail"
              control={control}
              error={errors.email?.message}
            />
            <InputForm
              name="password"
              placeholder="Senha"
              control={control}
              secureTextEntry
              error={errors.password?.message}
            />
            <InputForm
              name="confirmPassword"
              placeholder="Confirme a senha"
              control={control}
              secureTextEntry
              onSubmitEditing={handleSubmit(handleSingUp)}
              error={errors.confirmPassword?.message}
            />

            <Button
              title="Criar conta"
              mt="$4"
              isLoading={false}
              onPress={handleSubmit(handleSingUp)}
            />
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
