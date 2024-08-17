import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast as useGluestackToast,
} from "@gluestack-ui/themed";

type ToastProps =
  import("@gluestack-ui/toast/lib/typescript/types").InterfaceToastProps;

type ToastShowProps = {
  title: string;
  description?: string;
  action?: "error" | "warning" | "success" | "info" | "attention";
  options?: ToastProps;
};

export function useToast() {
  const toast = useGluestackToast();

  return {
    ...toast,
    show: ({
      title,
      description,
      action = "success",
      options,
    }: ToastShowProps) =>
      toast.show({
        ...options,
        placement: "top",
        render({ id }) {
          const uniqueToastId = `toast-${id}`;
          return (
            <Toast nativeID={uniqueToastId} action={action} variant="accent">
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{description}</ToastDescription>
            </Toast>
          );
        },
      }),
  };
}
