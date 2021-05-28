import React, { useState } from "react";
import { Alert, Modal, Image, View,Text,Button } from "react-native";
import styles from './styles'

const ModalItem = ({item, openModal, onClose}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      <View>
          <View style={styles.infoContainer}>
            <View style={styles.infoMain}>
                <Image
                    style={styles.tinyLogo}
                    source={item.Poster && {
                    uri: item.Poster,
                    }}
                />

                <Text style={styles.infoItem}>Title: {item.Title}</Text>
                <Text style={styles.infoItem}>ano: {item.Year}</Text>
                <Text style={styles.infoItem}>Duração: {item.Runtime}</Text>
                <Text style={styles.infoItem}>Genero: {item.Genre}</Text>
                <Text style={styles.infoItem}>Diretor(es): {item.Director}</Text>
                <Text style={styles.infoItem}>Descrição: {item.Plot}</Text>

            </View>
            <View>
                <Button
                    onPress={onClose}
                    title="Ok"
                    color="#cbcb1a"
                    style={styles.buttonOk}
                />
            </View> 
         </View>
         </View>
      </Modal>
    </View>
  );
};

export default ModalItem;