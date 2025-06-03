import { Quiz } from "@/types/Quiz";
import QUIZ from 'json/170+ ISC2 CC Dump Questions.json';
import { useState } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export function QuizContent() {
    const [quizIndex, setQuizIndex] = useState<number>(3)
    const [answers, setAnswers] = useState<boolean[]>(new Array(QUIZ.length).fill(null))


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
            borderRadius: 2,
        }}>
            <View style={{
                alignItems: 'center',
                paddingBottom: 15,
                paddingHorizontal: 15,
                paddingVertical: 20,
                flex: 1,
                alignContent: 'flex-end'
            }}>
                <Text style={{
                    fontSize: 24,
                    alignItems: 'baseline'
                }}>
                    {data.question}
                </Text>
            </View>
            <View style={{
                paddingHorizontal: 15,
                gap: 20,
            }}>
                {Object.entries(data.options).map(([option, desc], idx) => {

                    return (
                        <TouchableOpacity key={option}
                            style={{
                                backgroundColor: 'lightgray',
                                height: 60,
                                borderRadius: 5
                            }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 20,
                                marginVertical: 'auto',
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    marginLeft: 10,
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    aspectRatio: 1,
                                    backgroundColor: 'gray',
                                    borderRadius: 5
                                }}>
                                    <Text >
                                        {option.split('option')[1]}
                                    </Text>

                                </View>
                                <Text>
                                    {desc}
                                </Text>
                            </View>
                        </TouchableOpacity>
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
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                buttonStyle
            ]}>
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}