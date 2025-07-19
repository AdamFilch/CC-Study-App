import { TextInput, View } from "react-native";

export function NumInput({
    value,
    onChange,
}: {
    value: string,
    onChange: (value: string) => void
}) {
    return (
        <View
            style={{
                borderColor: '#000',
                minWidth: 50,
                borderRadius: 3,
                borderWidth: 1,
                paddingVertical: 0,
            }}
        >
            <TextInput style={{
                marginVertical: 0
            }}
                keyboardType="numeric"
            />
        </View>
    )
}