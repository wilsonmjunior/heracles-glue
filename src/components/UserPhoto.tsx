import { ComponentProps } from "react";
import { Avatar, AvatarImage } from "@gluestack-ui/themed";
import { Loading } from "./Loading";

type UserPhotoProps = ComponentProps<typeof Avatar> & {
  uri: string;
  isLoading?: boolean;
};

export function UserPhoto({
  isLoading,
  size = "lg",
  uri,
  ...props
}: UserPhotoProps) {
  return (
    <Avatar size={size} bg="$gray600" {...props}>
      {isLoading ? (
        <Loading bgColor="transparent" />
      ) : (
        <AvatarImage
          source={{
            uri,
          }}
          borderWidth="$2"
          borderColor="$gray400"
          alt="Imagem do usuário"
        />
      )}
    </Avatar>
  );
}
