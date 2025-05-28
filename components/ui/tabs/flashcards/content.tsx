import FLASHCARDS from 'json/Ayemun_Hossein_flashcards.json';
import { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export function FlashcardsContent() {
    const [cardIndex, setCardIndex] = useState<number>(0)


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%'
        }}>
            <FlashcardCard data={FLASHCARDS[cardIndex]} />
            <FlashcardButtons />
        </View>
    )
}


function FlashcardCard({
    data
}: {
    data: any
}) {
    return (
        <View style={{
            flex: 1
        }}>
            <Text>

            </Text>
        </View>
    )
}

function FlashcardButtons() {

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
                style={[buttonStyle, {
                    flex: 3
                }]}
            >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[buttonStyle, {
                    flex: 3
                }]}
            >
                <Text>
                    Continue
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[buttonStyle, {
                    flex: 1
                }]}>
                <MaterialIcons name="flip" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}