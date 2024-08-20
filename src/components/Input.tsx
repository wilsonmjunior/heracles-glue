import { ComponentProps } from "react";
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";

export type InputProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  isInvalid = false,
  ...props
}: InputProps) {
  return (
    <GluestackInput
      h="$14"
      borderWidth="$0"
      borderRadius="$md"
      isInvalid={isInvalid}
      $focus={{
        borderWidth: 1,
        borderColor: isInvalid ? "$error500" : "$green500",
      }}
      $invalid={{
        borderWidth: 1,
        borderColor: "$error500",
      }}
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
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
