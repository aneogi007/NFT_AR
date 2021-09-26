import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';


//formik package
import { Formik } from 'formik';

//icons
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

//API
import axios from 'axios';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './../components/style';

import {View} from 'react-native';

//colors
const { darkLight, brand } = Colors;



const SignUp = ({navigation}) => {

        

    const handleSignup = (info) => {
        console.log(info.ID , 'dasd')
        axios
            .get('https://api.opensea.io/api/v1/assets?owner=' + info.ID + '&order_direction=desc&offset=0&limit=20')
            .then((response) => {
                
                const result = response.data;

                array_size=result.assets.length;

                for (let i = 0; i < result.assets.length; i++) {
                    let currAsset = result.assets[i];
                    
                    if (currAsset.name) {
                        console.log('Asset[',i,'] Name:', currAsset.name);
                        console.log('           ImageUrl:', currAsset.image_url+'=s0');
                        if (currAsset.creator && currAsset.creator.user.username ) {
                          console.log('           CreatorUserName:', currAsset.creator.user.username);
                        } else {
                          console.log('           CreatorUserName: unknown');
                        }
                    } 
                }
                navigation.navigate("Welcome", {
                    asset_list: result,
                    asset_size: array_size
                });
          });
    
    }


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/fringwy.png')} />
                <PageTitle>NFT VR EXPERIENCE</PageTitle>
                <SubTitle>Connect your Account</SubTitle>
                <Formik
                    initialValues={{ ID: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        handleSignup(values);
                    }}
                > 
                    {({ handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="User ID"
                            icon="lock"
                            placeholder="0x12a345bc..."
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('ID')}
                            onBlur={handleBlur('ID')}
                            values={values.ID}
                            keyboardType="email-address"
                        />
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Connect</ButtonText>
                        </StyledButton>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, ...props }) => {
    return (
    <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />

        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
    </View>)
};

export default SignUp;