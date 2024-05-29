import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const toast = useToast();
    
    const submitHandler = () => {
        if (!email || !password) {
            toast({
                title: "Please fill all the fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                toast({
                    title: "Login successful!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: data.message || "Login failed.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        })
        .catch((error) => {
            toast({
                title: "Error occurred. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            console.error('Error:', error);
        });
    }
    
      return (
        <div>
         <VStack>
            <FormControl id='email' isRequired="true">
                <FormLabel>Email</FormLabel>
                <Input 
                    placeholder='Email'
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </FormControl>
            <FormControl id='password' isRequired="true">
                <FormLabel>Password</FormLabel>
                <Input 
                    type='password'
                    placeholder='Password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                />  
            </FormControl>      
            <Button 
            colorScheme='blue'
            width='100%'
            m="15px 0 0 0"
            borderRadius="lg"
            onClick={submitHandler}>
               Login
            </Button>
         </VStack>
        </div>
      )
}

export default Login
