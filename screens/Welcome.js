import React, { useState, useContext } from 'react';
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
    Avatar

} from './../components/style';

const Welcome = ({route, navigation}) => {

    const { asset_list, asset_size } = route.params;
    
    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeImage source={require('./../assets/WALR22.jpg')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome</PageTitle>
                    <SubTitle welcome={true}>Connect your Account</SubTitle>
                    
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/fringwy.png')} />
                        <Line />
                        <StyledButton 
                            onPress={() => {
                                navigation.navigate('PictureView', {
                                    asset_list: asset_list,
                                    asset_size: asset_size
                                })
                            }}
                        >
                            <ButtonText>See NFT's</ButtonText>
                        </StyledButton>
                       

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;