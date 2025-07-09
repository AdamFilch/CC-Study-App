import { FlashcardsMainLanding } from '@/components/ui/tabs/flashcards/settings';
import { SafeAreaView } from 'react-native';


export default function FlashcardsPage() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {/* <FlashCardsHeader /> */}
            {/* <FlashcardsContent /> */}

            <FlashcardsMainLanding />
        </SafeAreaView>
    )
}