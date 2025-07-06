import { QuizMainLandingPage } from "@/components/ui/tabs/quiz/settings";
import { SafeAreaView } from "react-native";


export default function QuizPage() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {/* <QuizHeader />
            <QuizContent /> */}
            <QuizMainLandingPage />
        </SafeAreaView>
    )
}
