import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      bgColor="$gray600"
      px="$5"
      py="$4"
      mb="$3"
      alignItems="center"
      justifyContent="space-between"
      rounded="$lg"
    >
      <VStack flex={1} gap="$1" mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$gray300">08:56</Text>
    </HStack>
  );
}
