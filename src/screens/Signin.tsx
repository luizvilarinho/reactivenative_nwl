import {Center, Image, Text, Icon} from "native-base";
import Logo from "../assets/logo.svg";
import {Button} from "../components/button";
import {Fontisto} from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth"

export function Signin(){

    const {signIn,user} = useAuth();
    console.log("dados do usuario", user)

    return(
        <Center flex={1} bgColor="gray.900">
            <Logo width={212} height={40} color={"white"}/>
           <Button
               type={"SECUNDARY"}
               title={"Entrar com o google"}
               leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
               isLoading={false}
               mt={12}
               onPress={signIn}
           />
          <Text color={'white'} textAlign={"center"} mt={4}>
              Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação de sua conta.
          </Text>
        </Center>
    )
}
