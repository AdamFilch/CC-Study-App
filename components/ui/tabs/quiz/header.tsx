import { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function QuizHeader() {
    return (
        <Fragment>
        <View style={{
            paddingVertical: 12,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View>
                <TouchableOpacity
                    style={{
                        borderRadius: 100,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <MaterialIcons name="chevron-left" color={'black'} size={24} />
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 600,
            }}>
                Quiz
            </Text>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'lightgray',
                        borderRadius: 100,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <MaterialIcons name="favorite-border" color="black" size={20} />
                </TouchableOpacity>
            </View>
        </View>
        </Fragment>

    )
}