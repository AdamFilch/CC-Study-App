import { FlashcardsContent } from '@/components/ui/tabs/flashcards/content';
import { FlashCardsHeader } from '@/components/ui/tabs/flashcards/header';
import { SafeAreaView } from 'react-native';


export default function FlashcardsPage() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <FlashCardsHeader />
            <FlashcardsContent />

            {/* <FlashcardsMainLanding /> */}
        </SafeAreaView>
    )
}