import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, View, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { useToast } from "../context/toast";

export function Profile() {
  const [loading, setLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/wilsonmjunior.png",
  );

  const toast = useToast();

  async function handleChangePhoto() {
    try {
      setLoading(true);

      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [2, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photo = photoSelected.assets[0];

      if (photo.uri) {
        const photoInfo = (await FileSystem.getInfoAsync(photo.uri)) as {
          size: number;
        };

        if (photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB.",
            action: "error",
          });
        }
      }

      setUserPhoto(photo.uri);
    } catch (error) {
      toast.show({ title: "Erro ao alterar imagem", action: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Center mt="$6" px="$10">
          <UserPhoto uri={userPhoto} isLoading={loading} size="2xl" />

          <View mt="$2" mb="$8">
            <TouchableOpacity onPress={handleChangePhoto}>
              <Text fontSize="$md" fontFamily="$heading" color="$green500">
                Alterar Foto
              </Text>
            </TouchableOpacity>
          </View>

          <Center gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input placeholder="wilson@email.com" bg="$gray600" isReadOnly />
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
              <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
              <Input placeholder="Nova Senha" bg="$gray600" secureTextEntry />
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
