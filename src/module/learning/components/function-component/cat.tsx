import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native'

export default Cat = () => {
    const name = 'Cattt';
    return (
        <View>
            <Text>function component {name}</Text>
            <Text>get full name {getFullName('a', 'b', 'c')}</Text>
            <Cafe name={'cafe 1'} uri={'https://reactnative.dev/docs/assets/p_cat1.png'}></Cafe>
            <Cafe name={'cafe 2'} uri={'https://reactnative.dev/docs/assets/p_cat2.png'}></Cafe>
        </View>
    );
}

const Cafe = (props: any) => {
    const { uri, name } = props;
    const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Text>Function {name}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                defaultValue='name'
            ></TextInput>
            <Image
                source={{ uri: uri }}
                style={{ width: 50, height: 50 }}
            ></Image>
            <Button
                onPress={() => { setIsHungry(false) }}
                disabled={!isHungry}
                title={ isHungry ? 'pour me some cafe !' : 'thanks !' }
            ></Button>
            <Button
                title='refresh state'
                onPress={() => { setIsHungry(true) }}
            >
            </Button>
        </View>
    )
}

const getFullName = (firstName: any, secondName: any, thirdName: any) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
}