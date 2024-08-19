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

  const colorScheme = {
    error: "$error300",
    warning: "$warning300",
    success: "$success300",
    info: "$info300",
    attention: "$gray300",
  };

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
            <Toast
              nativeID={uniqueToastId}
              action={action}
              bgColor={colorScheme[action]}
            >
              <ToastTitle color="$white" fontFamily="$heading">
                {title}
              </ToastTitle>
              <ToastDescription color="$white" fontFamily="$body">
                {description}
              </ToastDescription>
            </Toast>
          );
        },
      }),
  };
}
