import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import FormikField from '../shared/FormikField/FormikField';
import NavLink from '../shared/NavLink/NavLink';

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = (): JSX.Element => {
  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <Flex align="center" justify="center" h="100vh" bg="#F7FAFC" w="100vw" px={4}>
      <Flex direction="row" justifyContent={'space-around'} alignItems={'center'}>
        <Text fontSize="lg" mt={4} mb={8} textAlign="start" w="30%">
          <Text as="h1" fontWeight="bold">
            Welcome to our shoe brand!
          </Text>{' '}
          Our shoes are designed to provide both style and comfort. Sign up now to stay up-to-date with our latest
          releases and promotions.
        </Text>
        <Flex direction="column" p={12} rounded="2xl" bg="white" w="100%" maxW="500px" boxShadow="lg">
          <Heading mb={6} textAlign={'center'}>
            Register
          </Heading>
          <Formik initialValues={initialValues} onSubmit={() => console.log('submitted')}>
            {({ isSubmitting }) => (
              <Form>
                <FormikField name="username" label="Username" type="text" />
                <FormikField name="email" label="Email" type="email" />
                <FormikField name="password" label="Password" type="password" />
                <FormikField name="confirmPassword" label="Confirm Password" type="password" />
                <Flex justifyContent={'space-between'} mt={4}>
                  <Text mr={2}>Already have an account?</Text>
                  <NavLink href="/login" color="teal">
                    Login
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
                <Flex justify="center">
                  <Button mt={6} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Register
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignupForm;
