import { Controller, ControllerProps, FieldValues } from "react-hook-form";

import { Input, InputProps } from "@components/Input";

export type InputFormProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  "render"
> &
  InputProps;

export function InputForm<T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...othersProps
}: InputFormProps<T>) {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <Input value={value} onChangeText={onChange} {...othersProps} />
      )}
    />
  );
}
