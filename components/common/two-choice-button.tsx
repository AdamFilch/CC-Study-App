import { Text, TouchableOpacity, View } from "react-native"

export function TwoChoiceButton({
    choice1,
    choice2
}: {
    choice1: string,
    choice2: string
}) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <TouchableOpacity style={{
                borderRadius: '5 5 0 0',
                height: 30,
                padding: 5,
                opacity: 0.7,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>
                    {choice1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderRadius: '0 0 5 5',
                height: 30,
                padding: 5,
                opacity: 0.7,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>
                    {choice2}
                </Text>
            </TouchableOpacity>
        </View>
    )
}