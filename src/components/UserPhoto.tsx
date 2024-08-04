import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";

type UserPhotoProps = {
    uri: string;
};

export function UserPhoto({ uri }: UserPhotoProps) {
    return (
        <Avatar size="lg">
            <AvatarFallbackText>Wilson Junior</AvatarFallbackText>
            <AvatarImage
                source={{
                    uri,
                }}
                w="$16"
                h="$16"
                borderWidth="$2"
                borderColor="$gray400"
                alt="Imagem do usuário"
            />
        </Avatar>
    );
}
