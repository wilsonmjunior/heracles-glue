import { ScrollView } from "@gluestack-ui/themed";

export function Page({ children }: { children: React.ReactNode }) {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
}
