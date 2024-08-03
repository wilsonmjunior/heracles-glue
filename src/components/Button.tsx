import {
    ButtonSpinner,
    Button as GluestackButton,
    Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof GluestackButton> & {
    title: string;
    isLoading?: boolean;
    variant?: "solid" | "outline";
};

export function Button({
    title,
    isLoading,
    variant = "solid",
    ...props
}: ButtonProps) {
    const variants = {
        solid: {
            bg: "$green700",
            borderWidth: "$0",
            borderColor: "$green500",
            "$active-bg": "$green500",
            color: "$white",
        } as any,
        outline: {
            bg: "transparent",
            borderWidth: "$1",
            borderColor: "$green500",
            "$active-bg": "$gray500",
            color: "$green500",
        },
    };

    return (
        <GluestackButton
            w="$full"
            h="$14"
            bg={variants[variant].bg}
            borderWidth={variants[variant].borderWidth}
            borderColor={variants[variant].borderColor}
            rounded="$sm"
            $active-bg={variants[variant]["$active-bg"]}
            disabled={isLoading}
            {...props}
        >
            {!isLoading ? (
                <Text
                    color={variants[variant].color}
                    fontFamily="$heading"
                    fontSize="$sm"
                >
                    {title}
                </Text>
            ) : (
                <ButtonSpinner color="$white" />
            )}
        </GluestackButton>
    );
}
