import { useState } from "react";
import { FlatList } from "react-native";

import { Group } from "@components/Group";

const groups = ["costas", "ombro", "perna", "peito"];

export function GroupList() {
    const [groupSelected, setGroupSelected] = useState("costas");

    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <Group
                    name={item}
                    isActive={item === groupSelected}
                    onPress={() => setGroupSelected(item)}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                gap: 12,
                paddingHorizontal: 32,
            }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        />
    );
}
