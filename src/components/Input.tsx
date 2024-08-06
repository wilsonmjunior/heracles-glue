import { ComponentProps } from "react";
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";

type InputProps = ComponentProps<typeof InputField>;

export function Input({ ...props }: InputProps) {
    return (
        <GluestackInput
            h="$14"
            borderWidth="$0"
            borderRadius="$md"
            $focus={{
                borderWidth: 1,
                borderColor: "$green500",
            }}
        >
            <InputField
                bg="$gray700"
                px="$4"
                color="$white"
                fontFamily="$body"
                placeholderTextColor="$gray300"
                {...props}
            />
        </GluestackInput>
    );
}
