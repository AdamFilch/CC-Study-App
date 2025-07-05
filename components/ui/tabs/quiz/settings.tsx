import { Text, TouchableOpacity, View } from "react-native";

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
    return(
        <View>
            <Text>
                Just Practice
            </Text>
            <View>
                <Text>Scoring</Text>
                <Text>Total Number of Questions</Text>
                <Text>Passing Score</Text>    
            </View>
            <Text>
                <Text>Timer</Text>
                <Text>15 Min</Text><Text>Per Question / Full Time</Text>
                <Text>No Timer</Text>
            </Text>
            <View>
            <Text>Display</Text>
            <Text>Reveal answer in</Text><Text>Every step / Completion</Text>
            <Text>Progress Tracker</Text>
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