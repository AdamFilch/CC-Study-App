import { Text, TouchableOpacity, View } from "react-native";


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
    return (
        <View>
            <View>
                Just Practice
            </View>
            <View>
                <Text>Cards show </Text><Text>Description / Term</Text><Text> first</Text>
                <Text>Cards are flipped randomly</Text>
                <Text>Shuffle</Text>

            </View>
            <View>
                <Text>Display Chapter and Category</Text>
                <Text>Display Progress Tracker</Text>
            </View>
            <View>
                <Text>Repeat Endlessly</Text>
                <Text>Limit to </Text><Text>X</Text><Text> Cards</Text>
            </View>
            <View>
                <Text>Select Chapters</Text>
                <View>
                    <Text>Chapter 1 - Security Principles</Text>
                    <Text>Chapter 2 - Incident Response, Business Continuity and Disaster Recovery Concepts</Text>
                    <Text>Chapter 3 - Access Control Concepts</Text>
                    <Text>Chapter 4 - Network Security</Text>
                    <Text>Chapter 5 - Security Operations</Text>
                </View>
            </View>
        </View>
    )
}