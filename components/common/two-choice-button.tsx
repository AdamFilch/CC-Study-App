import { Text, TouchableOpacity, View } from "react-native"

export function TwoChoiceButton({
    choice1,
    choice2,
    onSelect,
    selected
}: {
    selected: string,
    choice1: string,
    choice2: string,
    onSelect: (option: string) => void
}) {

    let selectedColour = 'lightgray'
    let notSelected = 'gray'


    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <TouchableOpacity
                onPress={() => {
                    onSelect(choice1.replaceAll(' ', '_').toLowerCase())
                }}
                style={{
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                    height: 40,
                    padding: 8,
                    opacity: 0.7,
                    backgroundColor: choice1.replaceAll(' ', '_').toLowerCase() == selected ? selectedColour : notSelected,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>
                    {choice1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    onSelect(choice1.replaceAll(' ', '_').toLowerCase())
                }}
                style={{
                    height: 40,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,

                    padding: 8,
                    opacity: 0.7,
                    backgroundColor: choice2.replaceAll(' ', '_').toLowerCase() == selected ? selectedColour : notSelected,
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