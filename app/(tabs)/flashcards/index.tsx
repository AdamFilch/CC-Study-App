import { SafeAreaView } from 'react-native';

import { FlashcardsContent } from '@/components/ui/tabs/flashcards/content';
import { FlashCardsHeader } from '@/components/ui/tabs/flashcards/header';

export default function FlashcardsPage() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <FlashCardsHeader />
            <FlashcardsContent />
        </SafeAreaView>
    )
}