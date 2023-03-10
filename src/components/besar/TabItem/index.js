import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IconHome, IconHomeAktif, IconLocation, IconLocationAktif, IconProfile, IconProfileAktif } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <IconHomeAktif /> : <IconHome />;
        }

        if (label === "Location") {
            return isFocused ? <IconLocationAktif /> : <IconLocation />;
        }

        if (label === "Profile") {
            return isFocused ? <IconProfileAktif /> : <IconProfile />;
        }
        return <IconHome />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon/>
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        color: isFocused ? colors.secondary : colors.white,
        fontSize: 11,
        marginTop: 4,
    })
})
