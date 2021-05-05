import React, { createRef, memo, RefObject, useCallback, useRef, useState } from 'react';
import { useCurrencyContext, Currency } from '../../context';
import { Container, Input, Select, ContentLogo, Content, Result, ResultText, Row, Title, BRL, RowTitle, Signature } from './styles';
import Logo from 'react-native-vector-icons/Fontisto';
import SelectIcons from '../../components/SelectIcons';


const Home: React.FC = () => {
    const { data } = useCurrencyContext();
    const [currency, setCurrency] = useState<any>(null);
    const [result, setResult] = useState(0);
    const [value, setValue] = useState('');
    const calc = (dataText: string) => {

        const text = Number(dataText.replace(/[^0-9]/g, ''));
        const calc = text * currency;
        setResult(calc);
        setValue(dataText);

    };


    return <Container>

        <Content>
            <RowTitle>
                <ContentLogo>
                    <Logo name="dollar" size={20} color="gold" />
                </ContentLogo>
                <Title>CONVERSOR DE MOEDAS</Title>
            </RowTitle>
            <Select selectedValue={currency} onValueChange={(itemValue: any) => {
                setCurrency(itemValue);
                calc(value);
            }}>
                <Select.Item value="" label="Selecione uma opção" />
                {data.map((item: Currency, index: number) => <Select.Item value={item.ask} key={String(index)} label={item.name} />)}
            </Select>
            <Row>
                <BRL name="usd" size={18} color={!currency ? "#fff" : "#228B22"} />
                <Input editable={currency && true} disabled={!currency && true} dataDetectorTypes="phoneNumber" keyboardType="number-pad" onChangeText={calc} placeholder="Digite o valor aqui" />
            </Row>
            <Result>
                <ResultText><SelectIcons name={'currency-brl'} color={result === 0 ? "#333" : "#228B22" } /> {result.toFixed(2)}</ResultText>
            </Result>
            <Signature>Developed by Pádua Feijão</Signature>
        </Content>
    </Container>
}

export default Home;