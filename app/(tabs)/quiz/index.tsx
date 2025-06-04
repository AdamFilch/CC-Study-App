import { QuizHeader } from "@/components/ui/tabs/quiz/header";
import { QuizContent } from "@/components/ui/tabs/quiz/quiz-body";
import { SafeAreaView } from "react-native";


export default function QuizPage() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <QuizHeader />
            <QuizContent />
        </SafeAreaView>
    )
}
