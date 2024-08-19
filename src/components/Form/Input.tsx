import { Controller, ControllerProps } from "react-hook-form";

import { Input, InputProps } from "@components/Input";

type InputFormProps = Omit<ControllerProps, "render"> & InputProps;

export function InputForm({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...othersProps
}: InputFormProps) {
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
