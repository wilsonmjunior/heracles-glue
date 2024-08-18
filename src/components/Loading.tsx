import { ComponentProps } from "react";
import { Center, Spinner } from "@gluestack-ui/themed";

type LoadingProps = ComponentProps<typeof Center>;

export function Loading({ bg = "$gray700", ...props }: LoadingProps) {
  return (
    <Center flex={1} bg={bg} {...props}>
      <Spinner color="$green700" />
    </Center>
  );
}
