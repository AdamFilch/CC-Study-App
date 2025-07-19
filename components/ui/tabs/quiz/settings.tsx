
import { NumInput } from '@/components/common/input-value';
import { TwoChoiceButton } from '@/components/common/two-choice-button';
import { useQuizStore } from '@/services/quiz';
import Checkbox from 'expo-checkbox';
import { ScrollView, StyleProp, Switch, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";


export function QuizMainLandingPage() {
    return (
        <ScrollView style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#FFF'
        }}>
            <View style={{
                flex: 1,
            }}>
                <QuizSettings />

            </View>

            <View style={{
                // flex: 1,
                marginBottom: 20,
                paddingHorizontal: 30,
            }}>
                <TouchableOpacity style={{
                    borderRadius: 5,

                    height: 60,
                    opacity: 0.7,
                    backgroundColor: '#F6BD60',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <Text>
                        Begin
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


function QuizSettings() {

    const {
        topics,
        total_questions,
        passing_score,
        timer,
        timer_type,
        no_timer,
        reveal_type,
        progress_tracker,
        setTopic,
        setField
    } = useQuizStore()

    const spacedTitleAndButton: StyleProp<ViewStyle> = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    }

    const settingDescription: StyleProp<TextStyle> = {
        maxWidth: 280,
        fontSize: 16,
        fontWeight: 600
    }

    const chaptersStyle: StyleProp<ViewStyle> = {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            // padding: 20,
            paddingHorizontal: 40,
            paddingTop: 20,
        }}>
            <View >
                <Text>Scoring</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text>Total Number of Questions</Text>
                    <NumInput value={total_questions} onChange={(v) => {
                        setField('total_questions', v)
                    }} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text>Passing Score</Text>
                    <NumInput value={passing_score} onChange={(v) => {
                        setField('passing_score', v)
                    }} />
                </View>
            </View>
            <View style={[chaptersStyle]}>
                <Text>Timer</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text>15 Min{" "}</Text>
                    <TwoChoiceButton choice1='Per Question' choice2='Full Time' selected={timer_type} onSelect={(v) => setField('timer_type', v as typeof timer_type)} />

                </View>
                <View style={[spacedTitleAndButton, {

                }]}>
                    <Text style={[settingDescription]}>No Timer</Text>
                    <Switch
                        value={no_timer}
                        onValueChange={(v) => {
                            setField('no_timer', v)
                        }}
                    />
                </View>
            </View>
            <View style={[chaptersStyle]}>
                <Text>Display</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text>Reveal answer in{" "}</Text>
                    <TwoChoiceButton choice1='Every Step' choice2='Completion' selected={reveal_type} onSelect={(v) => setField('reveal_type', v as typeof reveal_type)} />
                </View>
                <View style={[spacedTitleAndButton, {

                }]}>
                    <Text style={[settingDescription]}>Progress Tracker</Text>
                    <Switch
                        value={progress_tracker}
                        onValueChange={(v) => {
                            setField('progress_tracker', v)
                        }}
                    />
                </View>
            </View>
            <View style={[chaptersStyle]}>
                <Text>Select Chapters</Text>
                <View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 1 - Security Principles</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter1}
                            onValueChange={(v) => {
                                setTopic('chapter1', v)
                            }}
                        />
                    </View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 2 - Incident Response, Business Continuity and Disaster Recovery Concepts</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter2}
                            onValueChange={(v) => {
                                setTopic('chapter2', v)
                            }}
                        />

                    </View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 3 - Access Control Concepts</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter3}
                            onValueChange={(v) => {
                                setTopic('chapter3', v)
                            }}
                        />

                    </View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 4 - Network Security</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter4}
                            onValueChange={(v) => {
                                setTopic('chapter4', v)
                            }}
                        />

                    </View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 5 - Security Operations</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter5}
                            onValueChange={(v) => {
                                setTopic('chapter5', v)
                            }}
                        />

                    </View>
                </View>
            </View>

        </View>
    )
}