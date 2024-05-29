import React from "react";
import { Box, Container, Text, Tab,Tabs
  ,TabList,TabPanel,TabPanels } from "@chakra-ui/react";
import SignUp from "../components/Authentication/SignUp";
import Login from "../components/Authentication/Login";


const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="20px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" justifyContent="center">
          Welcome
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4}
      m="20px 0 20px 0" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" isFitted >
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up!</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
