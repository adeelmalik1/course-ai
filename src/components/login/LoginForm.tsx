import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import NavLink from '../chakraButton/NavLink';
import FormikField from '../shared/FormikField';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };

  return (
    <Flex align="center" justify="center" h="100vh" bg="#F7FAFC" w="100vw" px={4}>
      <Flex direction="column" p={12} rounded="2xl" bg="white" w="100%" maxW="500px" boxShadow="lg">
        <Heading mb={6} textAlign={'center'} pt={8}>
          Login
        </Heading>
        <Formik initialValues={initialValues} onSubmit={() => console.log('submitted')}>
          {({ isSubmitting }) => (
            <Form>
              <FormikField name="username" label="Username" type="text" />
              <FormikField name="password" label="Password" type="password" />
              <Flex justifyContent={'space-between'} mt={4}>
                <Text mr={2}>Don't have an account?</Text>
                <NavLink href="/signup" color="teal">
                  Register ?
                </NavLink>
              </Flex>
              <Stack mt={6} direction="row" justify="center">
                <Flex
                  justify="center"
                  align="center"
                  cursor={'pointer'}
                  w="12"
                  h="12"
                  bg="white"
                  borderRadius="full"
                  boxShadow="md"
                  mr={4}
                >
                  <FaGoogle color="#DB4437" size={20} />
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  cursor={'pointer'}
                  w="12"
                  h="12"
                  bg="white"
                  borderRadius="full"
                  boxShadow="md"
                  mr={4}
                >
                  <FaFacebook color="#3B5998" size={20} />
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  cursor={'pointer'}
                  w="12"
                  h="12"
                  bg="white"
                  borderRadius="full"
                  boxShadow="md"
                  mr={4}
                >
                  <FaInstagram color="#E1306C" size={20} />
                </Flex>
                <Flex justify="center" align="center" w="12" h="12" bg="white" borderRadius="full" boxShadow="md">
                  <FaLinkedin color="#0E76A8" size={20} cursor={'pointer'} />
                </Flex>
              </Stack>

              <Flex justify="center" pb={12}>
                <Button mt={6} colorScheme="teal" isLoading={isSubmitting} type="submit">
                  Login
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
