import { NumInput } from "@/components/common/input-value";
import { TwoChoiceButton } from "@/components/common/two-choice-button";
import { useFlashcardsStore } from "@/services/flashcards";
import Checkbox from "expo-checkbox";
import { ScrollView, StyleProp, Switch, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";


export function FlashcardsMainLanding() {
    return (
        <ScrollView style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            backgroundColor: '#FFF'
        }}>
            <View style={{
                flex: 1,
            }}>

                <FlashcardSettings />
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


function FlashcardSettings() {

    const {
        topics,
        progress_tracker,
        display_chapter_category,
        shuffle,
        endless,
        flipped_randomly,
        show_first,
        setField,
        setTopic,
    } = useFlashcardsStore()

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
            paddingHorizontal: 40,
            paddingTop: 30,
        }}>
            <View>
                <Text>
                    Just Practice
                </Text>
            </View>
            <View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'

                }}>
                    <Text>Cards show{" "}</Text>
                    <TwoChoiceButton selected={show_first} choice1="Description" choice2="Term" onSelect={(v) => setField('show_first', v as typeof show_first)} />
                    <Text>{" "}first</Text>

                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Cards are flipped randomly</Text>
                    <Switch
                        value={flipped_randomly}
                        onValueChange={(v) => {
                            setField('flipped_randomly', v)
                        }}

                    />
                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Shuffle</Text>
                    <Switch
                        value={shuffle}
                        onValueChange={(v) => {
                            setField('shuffle', v)
                        }}
                    />
                </View>

            </View>
            <View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Display Chapter and Category</Text>
                    <Switch
                        value={display_chapter_category}
                        onValueChange={(v) => {
                            setField('display_chapter_category', v)
                        }}
                    />
                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Display Progress Tracker</Text>
                    <Switch
                        value={progress_tracker}
                        onValueChange={(v) => {
                            setField('progress_tracker', v)
                        }}
                    />
                </View>
            </View>
            <View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Repeat Endlessly</Text>
                    <Switch value={endless} onValueChange={(v) => {
                        setField('endless', v)
                    }} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text>Limit to{" "}</Text>
                    <NumInput value="" onChange={(v) => {
                        
                    }} />
                    <Text>{" "}Cards</Text>
                </View>
            </View>
            <View>
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
                                console.log('ChapterChange', v)
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