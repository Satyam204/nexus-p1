import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toast = useToast();

  const submitHandler = () => {
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please fill all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      toast({
        title: "Sign up successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
        <FormControl id='first-name' isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder='Your Name?'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder='Example : Satyam@abc.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            placeholder='Set Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id='confirmpassword' isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme='blue'
          width='100%'
          m="15px 0 0 0"
          borderRadius="lg"
          onClick={submitHandler}>
          Submit
        </Button>
      </VStack>
    </div>
  )
}

export default SignUp
