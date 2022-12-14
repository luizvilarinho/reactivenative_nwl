import {Heading, VStack,Text} from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import {Input} from "../components/Input";
import {Button} from "../components/Button";


export function New(){
    return (
        <VStack flex={1} bgColor={'gray.900'}>
            <Header title={"Criar novo bolão"}></Header>

            <VStack mt={8} mx={5} alignItems={'center'}>
                <Logo />
                <Heading fontFamily={'heading'} color={'white'} fontSize={'xl'} mt={8} textAlign={'center'}>
                    Crie seu próprio bolão da copa e compartile entre amigos!
                </Heading>
                <Input
                    mb={2}
                    placeholder={'Qual o nome do seu bolão'}
                />
                <Button
                    title={'Criar meu bolão'}
                />
                <Text color={'gray.200'} fontSize={'sm'} textAlign={'center'} px={10} mt={4}>
                    Após criar seu bolão, você recebrá um código único que poderá usar para convidar outras pessoas
                </Text>
            </VStack>
        </VStack>
    )
}
