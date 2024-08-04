import { VStack } from "@gluestack-ui/themed";

import { GroupList } from "./GroupList";
import { HomeHeader } from "./HomeHeader";

export function Home() {
    return (
        <VStack>
            <HomeHeader />
            <GroupList />
        </VStack>
    );
}
