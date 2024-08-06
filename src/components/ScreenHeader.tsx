import { Center, Heading } from "@gluestack-ui/themed";

type ScreenHeaderProps = {
    title: string;
};

export function ScreenHeader({ title }: ScreenHeaderProps) {
    return (
        <Center bg="$gray600" pt="$16" pb="$6">
            <Heading color="$gray100">{title}</Heading>
        </Center>
    );
}
