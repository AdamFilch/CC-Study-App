import FLASHCARDS from 'json/Ayemun_Hossein_flashcards.json';
import { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Flashcard } from '@/types/Flashcards';
import { MaterialIcons } from '@expo/vector-icons';

export function FlashcardsContent() {
    const [cardIndex, setCardIndex] = useState<number>(0)
    const [flippers, setFlippers] = useState<boolean[]>(new Array(FLASHCARDS.length).fill(false))


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%'
        }}>
            <FlashcardCard data={FLASHCARDS[cardIndex]} isFlipped={flippers[cardIndex]} />
            <FlashcardButtons
                onClickNext={() => {
                    if (cardIndex < FLASHCARDS.length) {
                        setCardIndex(prev => prev + 1)
                    }
                }}
                onClickBack={() => {
                    if (cardIndex > 0) {
                        setCardIndex(prev => prev - 1)
                    }
                }}
                onClickFlip={() => {
                    const updated = [...flippers]; 
                    updated[cardIndex] = !updated[cardIndex]; 
                    setFlippers(updated); 
                }}
            />
        </View>
    )
}


function FlashcardCard({
    data,
    isFlipped
}: {
    data: Flashcard,
    isFlipped: boolean
}) {

    function colorCatogory(cat: string) {
        switch (cat) {
            case 'Chapter 1 - Security Principles':
                return ''
            case 'Chapter 2 - Incident Response, Business Continuity and Disaster Recovery Concepts':
            case 'Chapter 3 - Access Control Concepts':
            case 'Chapter 4 - Network Security':
        }
    }

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
                <Text style={{
                    fontWeight: 700
                }}>
                    {data.category}
                </Text>

            </View>
            {isFlipped ? (
                <View style={{
                    flex: 1,
                    opacity: 0.7,
                    backgroundColor: '#F6BD60',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500
                    }}>
                        {data.answer}
                    </Text>
                </View>

            ) : (
                <View style={{
                    flex: 1,
                    paddingHorizontal: 30,
                    opacity: 0.7,
                    backgroundColor: '#F6BD60',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        lineHeight: 30,
                        fontWeight: 500,
                    }}>
                        {data.question}
                    </Text>
                </View>
            )}
        </View>
    )
}

function FlashcardButtons({
    onClickNext,
    onClickBack,
    onClickFlip
}: {
    onClickNext: () => void
    onClickBack: () => void
    onClickFlip: () => void
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
                style={[buttonStyle, {
                    flex: 3
                }]}
                onPress={onClickBack}

            >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[buttonStyle, {
                    flex: 3
                }]}
                onPress={onClickNext}
            >
                <Text>
                    Continue
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onClickFlip}
                style={[buttonStyle, {
                    flex: 1
                }]}>
                <MaterialIcons name="flip" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}