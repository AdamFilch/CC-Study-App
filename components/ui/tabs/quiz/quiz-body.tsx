import { Quiz } from "@/types/Quiz";
import QUIZ from 'json/170+ ISC2 CC Dump Questions.json';
import { useState } from "react";
import { ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export function QuizContent() {
    const [quizIndex, setQuizIndex] = useState<number>(3)
    const [answers, setAnswers] = useState<boolean[]>(new Array(QUIZ.length).fill(null))
    const [isAnsRevealed, setIsAnsRevealed] = useState<boolean>(false)

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <QuizCard data={QUIZ[quizIndex]} isAnsRevealed={isAnsRevealed} />
            <QuizButtons
                onClickNext={() => {
                    if (quizIndex < QUIZ.length) {
                        setQuizIndex(prev => prev + 1)
                    }
                }}
                onClickBack={() => {
                    if (quizIndex > 0) {
                        setQuizIndex(prev => prev - 1)
                    }
                }}
                onClickReveal={() => {
                    const updated = !isAnsRevealed
                    setIsAnsRevealed(updated)
                }}
            />
        </View>
    )
}


function QuizCard({
    data,
    isAnsRevealed
}: {
    data: Quiz,
    isAnsRevealed: boolean
}) {

    const nuselectedOption: StyleProp<ViewStyle> = {

    }

    const selectedOption: StyleProp<ViewStyle> = {
        
    }

    const correctOption: StyleProp<ViewStyle> = {
        
    }

    const incorrectOption: StyleProp<ViewStyle> = {
        
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            margin: 15,
            padding: 14,
            borderRadius: 2,
        }}>
            <ScrollView style={{
                paddingBottom: 15,
                paddingHorizontal: 15,
                paddingVertical: 20,
                flex: 1,
                alignContent: 'flex-end'
            }}>
                <Text style={{
                    fontSize: 24,
                    alignItems: 'baseline',
                    overflowX: 'scroll'
                }}>
                    {data.question}
                </Text>
            </ScrollView>
            <View style={{
                paddingHorizontal: 15,
                gap: 20,
            }}>
                {Object.entries(data.options).map(([option, desc], idx) => {
                    if (isAnsRevealed && data.answer == desc) {
                        return <View key={option}
                            style={{
                                backgroundColor: 'green',
                                padding: 10,
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
                                    width: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'gray',
                                    borderRadius: 5
                                }}>
                                    <Text >
                                        {option.split('option')[1]}
                                    </Text>

                                </View>
                                <View style={{
                                    flex: 1,
                                    marginRight: 10
                                }}>
                                    <Text style={{
                                        flexWrap: 'wrap',
                                        flexShrink: 1,
                                        fontSize: 17,
                                        color: 'black'
                                    }}>
                                        {desc}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }

                    return (
                        <TouchableOpacity key={option}
                            style={{
                                backgroundColor: 'lightgray',
                                padding: 10,
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
                                    width: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'gray',
                                    borderRadius: 5
                                }}>
                                    <Text >
                                        {option.split('option')[1]}
                                    </Text>

                                </View>
                                <View style={{
                                    flex: 1,
                                    marginRight: 10
                                }}>
                                    <Text style={{
                                        flexWrap: 'wrap',
                                        flexShrink: 1,
                                        fontSize: 17,
                                        color: 'black'
                                    }}>
                                        {desc}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>

        </View>
    )
}

function QuizButtons({
    onClickNext,
    onClickBack,
    onClickReveal,
}: {
    onClickNext: () => void
    onClickBack: () => void
    onClickReveal: () => void
}) {

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
            alignSelf: 'flex-end'
        }}>
            <TouchableOpacity
                style={[buttonStyle,]}
                onPress={onClickBack}

            >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[buttonStyle, {
                    flex: 3,
                }]}
                onPress={onClickReveal}
            >
                <Text>
                    Reveal
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[buttonStyle]}
                onPress={onClickNext}
            >
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}