import { Quiz } from "@/types/Quiz";
import QUIZ from 'json/170+ ISC2 CC Dump Questions.json';
import { useState } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export function QuizContent() {
    const [quizIndex, setQuizIndex] = useState<number>(3)


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <QuizCard data={QUIZ[quizIndex]} />
            <QuizButtons />
        </View>
    )
}


function QuizCard({
    data
}: {
    data: Quiz
}) {

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            margin: 15,
            padding: 14,
            borderRadius: 2
        }}>
            <View style={{
                alignItems: 'center',
                paddingBottom: 15
            }}>
                <Text>
                    {data.question}
                </Text>
            </View>
            <View>
                {Object.entries(data.options).map(([option, desc], idx) => {

                    return (
                        <View key={option}>
                            <Text>
                                {desc}
                            </Text>
                        </View>
                    )
                })}
            </View>

        </View>
    )
}

function QuizButtons() {


    const buttonStyle: StyleProp<ViewStyle> = {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flex: 1
    }


    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            marginHorizontal: 10,
            height: 50,
            marginBottom: 60,
            alignSelf: 'center'
        }}>
            <TouchableOpacity style={[
                buttonStyle
            ]}>
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}