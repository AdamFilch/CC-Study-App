import { Text, TouchableOpacity, View } from "react-native"

export function TwoChoiceButton({
    choice1,
    choice2
}: {
    choice1: string,
    choice2: string
}) {

    let selectedColour = 'lightgray'
    let notSelected = 'gray'


    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <TouchableOpacity style={{
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                height: 40,
                padding: 8,
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
                height: 40,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,

                padding: 8,
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