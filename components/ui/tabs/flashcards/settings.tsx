import { useFlashcardsStore } from "@/services/flashcards";
import Checkbox from "expo-checkbox";
import { StyleProp, Switch, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";


export function FlashcardsMainLanding() {
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

                <FlashcardSettings />
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


function FlashcardSettings() {

    const {
        topics
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
            padding: 20
        }}>
            <View>
                <Text>
                Just Practice
                </Text>
            </View>
            <View>
                <View>
                    <Text>Cards show </Text><TouchableOpacity><Text>Description</Text></TouchableOpacity><TouchableOpacity><Text>Term</Text></TouchableOpacity><Text> first</Text>

                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Cards are flipped randomly</Text>
                    <Switch
                    />
                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Shuffle</Text>
                    <Switch

                    />
                </View>

            </View>
            <View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Display Chapter and Category</Text>
                    <Switch

                    />
                </View>
                <View style={[spacedTitleAndButton]}>
                    <Text style={[settingDescription]}>Display Progress Tracker</Text>
                    <Switch

                    />
                </View>
            </View>
            <View>
                <View style={[spacedTitleAndButton]}>
                <Text style={[settingDescription]}>Repeat Endlessly</Text>
                <Switch />
                </View>
                <Text>Limit to </Text><TextInput
                    keyboardType="numeric"
                /><Text> Cards</Text>
            </View>
            <View>
                <Text>Select Chapters</Text>
                <View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 1 - Security Principles</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter1}

                        />
                    </View>
                    <View style={[spacedTitleAndButton]}>

                        <Text style={[settingDescription]}>Chapter 2 - Incident Response, Business Continuity and Disaster Recovery Concepts</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter2}

                        />
                    </View>
                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 3 - Access Control Concepts</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter3}

                        />
                    </View>

                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 4 - Network Security</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter4}

                        />
                    </View>

                    <View style={[spacedTitleAndButton]}>
                        <Text style={[settingDescription]}>Chapter 5 - Security Operations</Text>
                        <Checkbox
                            disabled={false}
                            value={topics.chapter5}

                        />
                    </View>

                </View>
            </View>
        </View>
    )
}