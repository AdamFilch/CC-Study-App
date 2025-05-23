import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";


export function FlashCardsHeader() {
    return (
        <View style={{
            paddingTop: 45,
            paddingBottom: 10,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white'
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
                fontWeight: 600
            }}>
                Flashcards
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
    )
}