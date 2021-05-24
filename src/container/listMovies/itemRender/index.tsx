import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import style from '../style'

const ItemToList = ({item, openModal}:  any ) =>{
    const pressItem = (name: any) => {
        openModal(name)
        return
    }
return (
        <TouchableOpacity style={style.itemListContainer} onPress={(): any => pressItem(item.Title)}>
                <View style={style.imageView}>
                    <Image
                        style={style.tinyLogo}
                        source={item.Poster && {
                        uri: item.Poster,
                        }
                    }
                    />
                </View>
                <View>
                    <Text style={style.title}>{item.Title}</Text>
                </View>
        </TouchableOpacity>
  );
}
export default ItemToList