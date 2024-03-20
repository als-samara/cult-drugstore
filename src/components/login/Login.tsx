import { Flex, Heading, Box, InputGroup, Input, InputRightElement, Button, FormControl, InputLeftElement, Spinner } from "@chakra-ui/react"
import { LockIcon, ViewOffIcon, ViewIcon, EmailIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react'

import React, { ChangeEvent, useContext, useEffect, useState } from "react"
import UserLogin from "../../models/UserLogin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const navigate = useNavigate();

    const { user, handleLogin, isLoading } = useContext(AuthContext);

    const [userLogin, setUserLogin] = useState<UserLogin> //type checking 
        (
            {} as UserLogin // initializing userLogin as an empty object
        );

    useEffect(() => {
        console.log('Usuário logado:', user); // todo: decodificar o token com a lib, pegar infos do token (nome, email e roles), fazer requisição com email pra pegar foto
        if (user.token != '') {
            navigate('/home')
        }
    }, [user])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) // type checking, indicates that the argument 'e' is a change event on an <input> element
    {
        setUserLogin({
            ...userLogin, // creates a superficial copy of the userLogin object, using all its properties
            [e.target.name]: e.target.value, // captures the input name, wich is the same of the userLogin property ('username' and 'password'), and updates it with the value typed            
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(userLogin)
    }

    return (
        <>
            <Box display='flex' justifyContent={"center"} minHeight={'70vh'} alignItems={"center"}>
                <Box display='flex' flexDirection="column" marginTop={20} maxWidth={780}>
                    <form onSubmit={login}>
                        <FormControl>
                            <Flex justify='center'>
                                <Heading as='h2' size='xl'>Login</Heading>
                            </Flex>

                            {/* Input de E-mail */}
                            <InputGroup mt={8}>
                                <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='gray.300' />
                                </InputLeftElement>
                                <Input
                                    mb={5}
                                    type="email"
                                    id="email"
                                    placeholder="Seu e-mail"
                                    name="username"
                                    value={userLogin.username}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </InputGroup>

                            {/* Input de Senha */}
                            <InputGroup size='md'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                >
                                    <LockIcon />
                                </InputLeftElement>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    id="password"
                                    placeholder='Sua senha'
                                    name='password'
                                    value={userLogin.password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <Button colorScheme="blue" type="submit" width="full" mt={7}>
                                {isLoading ? <Spinner
                                    thickness='4px'
                                    speed='1.0s'
                                    emptyColor='gray.200'
                                    color='purple.500'
                                    size='md'
                                /> : 'Entrar'}</Button>
                        </FormControl>
                    </form>

                    <Text fontSize='sm' marginTop={5} textAlign={'center'}>Não possui uma conta? <ChakraLink as={ReactRouterLink} to='/cadastro'>Cadastre-se</ChakraLink></Text>

                </Box>
            </Box>
        </>
    )
}

export default Login