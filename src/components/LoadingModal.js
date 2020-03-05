import React from 'react';
import {Modal, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

const LoadingModal = ({visible, loadingText, onClose, type = 'loading'}) => (
  <SafeAreaView>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <ModalWrapper>
        <Loading>
          <Lottie
            source={
              type === 'loading'
                ? require('../../assets/animations/loader.json')
                : require('../../assets/animations/cloud-sync.json')
            }
            style={{
              width: 200,
              height: 200,
            }}
            autoPlay
            loop
          />
          <LoadingText>{loadingText}</LoadingText>
        </Loading>
      </ModalWrapper>
    </Modal>
  </SafeAreaView>
);

const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(43, 34, 71, 0.85);
`;
const Loading = styled.View`
  align-items: center;
  top: -10%;
`;
const LoadingText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 16px;
  color: #fff;
  margin-top: -10px;
`;

export default LoadingModal;
