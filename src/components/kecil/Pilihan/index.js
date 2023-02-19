import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { responsiveHeight } from '../../../utils';

const Pilihan = ({ label, datas, width, height, fontSize }) => {
    const [selectedValue, setSelectedValue] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <View style={styles.wrapperPicker}>
                <Picker
                    selectedValue={selectedValue}
                    itemStyle={styles.picker(width, height, fontSize)}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="-- Pilih --" value="" />
                    {datas.map((item, index) => {
                        return <Picker.Item label={item} value={item} key={index} />
                    })}
                </Picker>
            </View>
        </View>
    )
}

export default Pilihan

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },

    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
    }),
    picker: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        width: width,
        height: height ? height : responsiveHeight(46),
        color: 'black'
    }),
    wrapperPicker: {
        borderWidth: 1,
        borderRadius: 5,
    }
})