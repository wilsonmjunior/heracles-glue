import { Controller, ControllerProps, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@gluestack-ui/themed";

import { Input, InputProps } from "@components/Input";

export type InputFormProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  "render"
> &
  InputProps & {
    error?: string;
    isInvalid?: boolean;
  };

export function InputForm<T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  error,
  isInvalid,
  ...othersProps
}: InputFormProps<T>) {
  const invalid = !!error || isInvalid;

  return (
    <FormControl isInvalid={invalid} width="$full">
      <Controller
        control={control}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            isInvalid={invalid}
            onChangeText={onChange}
            {...othersProps}
          />
        )}
      />

      <FormControlError>
        <FormControlErrorText color="$error500">{error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
