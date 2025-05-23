import { FlashCardsHeader } from "@/components/ui/tabs/flashcards/header";
import { ScrollView, Text } from "react-native";



export default function FlashcardsPage() {
    return (
        <ScrollView>
            <FlashCardsHeader />
            <Text>
                Flashcards Page
            </Text>
        </ScrollView>
    )
}