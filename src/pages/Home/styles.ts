import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: rgb(60, 60, 60);
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    background: #333;
    border-radius: 8px;
    padding: 20px;
    width: ${Platform.OS === 'web' ?  '40%' : '80%'};
    height: 50%;
    justify-content: center;
`;

export const ContentLogo = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #eee;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`;

export const Select = styled(Picker)`
    width: 100%;
    height: 45px;
    border-radius: 4px;
    margin-bottom: 10px;
    background: #eee;

`;

interface InputProps {
    disabled?: boolean;
}
export const Input = styled.TextInput<InputProps>`
    width: 100%;
    height: 45px;
    background: ${props => props.disabled ? "#C0C0C0" : "#eee"};
    border-radius: 4px;
    border: 0;
    padding: 4px;
    padding-left: 30px;

`;

export const BRL = styled(Icon)`
    position: absolute;
    margin-left: 5px;

`;

export const Result = styled.View`
    background: #eee;
    height: 45px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const ResultText = styled.Text`
    font-size: 18px;
`;

export const Title = styled.Text`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #eee;
    margin-left: 5px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const RowTitle = styled.View`

    align-items: center;
    position: absolute;
    justify-content: center;
    top: 10;
    left: ${Platform.OS === 'web' ?  '20%' : '40%'};
    right: ${Platform.OS === 'web' ?  '20%' : '40%'};
`;

export const Signature = styled.Text`
    position: absolute;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 13px;
    color: #eee;
    top: 90%;
`;