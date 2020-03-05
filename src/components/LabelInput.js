import React from 'react';
import styled from 'styled-components/native';

const LabelInput = ({label, value, setLabel, type, phone}) => (
  <InputGroup>
    <Label>{label}</Label>
    {type === 'textarea' ? (
      <TextArea
        numberOfLines={5}
        multiline
        textAlignVertical="top"
        value={value}
        onChangeText={text => setLabel(text)}
      />
    ) : (
      <Input
        returnKeyType="next"
        value={value}
        keyboardType={phone ? 'phone-pad' : null}
        onChangeText={text => setLabel(text)}
      />
    )}
  </InputGroup>
);

const InputGroup = styled.View`
  margin-top: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #dedede;
`;
const Label = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 12px;
  color: #000;
`;
const Input = styled.TextInput`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  height: 40px;
  width: 100%;
`;
const TextArea = styled.TextInput`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  height: 80px;
  width: 100%;
`;

export default LabelInput;
