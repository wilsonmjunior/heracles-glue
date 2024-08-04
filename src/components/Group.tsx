import { ComponentProps } from "react";
import { Button, Text } from "@gluestack-ui/themed";

type GroupProps = ComponentProps<typeof Button> & {
    name: string;
    isActive: boolean;
};

export function Group({ name, isActive, ...othersProps }: GroupProps) {
    return (
        <Button
            minWidth="$24"
            h="$10"
            rounded="$md"
            justifyContent="center"
            alignItems="center"
            bg="$gray600"
            borderWidth={isActive ? "$1" : "$0"}
            borderColor="$green500"
            sx={{
                ":active": {
                    borderWidth: 1,
                },
            }}
            {...othersProps}
        >
            <Text
                color={isActive ? "$green500" : "$gray100"}
                fontFamily={isActive ? "$heading" : "$body"}
                fontSize="$xs"
            >
                {name.toUpperCase()}
            </Text>
        </Button>
    );
}
