import {
    ButtonSpinner,
    Button as GluestackButton,
    Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof GluestackButton> & {
    title: string;
    isLoading?: boolean;
};

export function Button({ title, isLoading, ...props }: ButtonProps) {
    return (
        <GluestackButton
            w="$full"
            h="$14"
            bg="$green700"
            borderWidth="$0"
            borderColor="$green500"
            rounded="$sm"
            $active-bg="$green500"
            disabled={isLoading}
            {...props}
        >
            {!isLoading ? (
                <Text color="$white" fontFamily="$heading" fontSize="$sm">
                    {title}
                </Text>
            ) : (
                <ButtonSpinner color="$white" />
            )}
        </GluestackButton>
    );
}
