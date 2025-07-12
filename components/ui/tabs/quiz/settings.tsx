
import { useQuizStore } from '@/services/quiz';
import Checkbox from 'expo-checkbox';
import { StyleProp, Switch, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";


export function QuizMainLandingPage() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            backgroundColor: '#FFF'
        }}>
            <View style={{
                flex: 1,
            }}>
                <QuizSettings />

            </View>

            <View style={{
                // flex: 1,
                marginBottom: 60,
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
        </View>
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
            padding: 20
        }}>
            <View >
                <Text>Scoring</Text>
                <View>
                    <Text>Total Number of Questions</Text>
                    <TextInput
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text>Passing Score</Text>
                    <TextInput
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={[chaptersStyle]}>
                <Text>Timer</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Text>15 Min</Text><TouchableOpacity><Text>Per Question</Text></TouchableOpacity><TouchableOpacity><Text>Full Time</Text></TouchableOpacity>

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
                    flexDirection: 'row'
                }}>
                    <Text>Reveal answer in</Text><TouchableOpacity><Text>Every Step</Text></TouchableOpacity><TouchableOpacity><Text>Completion</Text></TouchableOpacity>

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