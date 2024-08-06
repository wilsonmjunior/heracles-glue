import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type UserPhotoProps = ComponentProps<typeof Avatar> & {
    uri: string;
};

export function UserPhoto({ uri, size = "lg", ...props }: UserPhotoProps) {
    return (
        <Avatar size={size} {...props}>
            <AvatarFallbackText>Wilson Junior</AvatarFallbackText>
            <AvatarImage
                source={{
                    uri,
                }}
                borderWidth="$2"
                borderColor="$gray400"
                alt="Imagem do usuário"
            />
        </Avatar>
    );
}
