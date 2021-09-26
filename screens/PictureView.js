import React, { Component, useState, useRef } from 'react';
import { StyleSheet, View, Alert, FlatList, Text, Image, SafeAreaView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    PictureInfoContainer,
    Avatar

} from './../components/style';

const PictureView = ({route, navigation}) => {

    const [elementIndex, setElementIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const { asset_list, asset_size } = route.params;

    let nftList = [];

    for (let i = 0; i < asset_size; i++) {
        let currAsset = asset_list.assets[i];
        
        if (currAsset.name) {
            let nft = {
                id: i,
                //imgUrl: currAsset.image_url+'=s0'
                imgUrl: currAsset.image_url,
                name: ('Owned By', currAsset.name),
                price: '1.00'
            }
            nftList.push(nft);
        }
    }


     const pressHandler = (index) => {
    setModalVisible(!modalVisible);
    setElementIndex(index);

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={{ uri: nftList[elementIndex].imgUrl }}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Open</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  }



    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <PictureInfoContainer>
                    

                <SafeAreaView style={styles.container}>
                    <FlatList

                    data={nftList}
                    //inverted
                    //keyExtractor={(time, index) => index.toString()}
                    renderItem={({ item, index }) => {


                        return (
                        <View>

                            <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                            >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                <Image
                                    source={{ uri: nftList[elementIndex].imgUrl }}
                                    style={{ height: 300, width: 300 }}
                                    resizeMode="contain"
                                />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Open</Text>
                                </Pressable>
                                </View>
                            </View>
                            </Modal>

                            <View style={styles.container}>
                            <View style={{ margin: 10 }}>
                                {item.imgUrl && (
                                <TouchableOpacity onPress={() => pressHandler(index)}>

                                    <Image
                                    source={{ uri: item.imgUrl }}
                                    style={{ height: 300, width: 300 }}
                                    resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                )}
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={styles.baseText}>
                                <Text style={styles.titleText}>
                                    {item.name} {"\n"}
                                </Text>
                                {item.price}
                                </Text>
                            </View>
                            </View>
                        </View>
                        );
                    }}

                    />

                    </SafeAreaView>


                    <PageTitle picture={true}>NFT Gallery</PageTitle>
                    <Line />
                    {/* <StyledFormArea>
                        
                        <StyledButton 
                            onPress={() => {
                                //implement AR
                            }}
                        >
                            <ButtonText>Select NFT</ButtonText>
                        </StyledButton>
                       

                    </StyledFormArea> */}
                </PictureInfoContainer>
            </InnerContainer>
        </>
    );
}

export default PictureView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
  
    baseText: {
      fontFamily: "Cochin",
      textAlign: "center"
    },
  
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    }
  });