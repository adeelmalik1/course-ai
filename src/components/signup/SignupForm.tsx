import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import { CustomButton as Button } from '../shared/chakraButton/ChakraButton';
import FormikField from '../shared/FormikField/FormikField';
import NavLink from '../shared/NavLink/NavLink';

import s from './SignupForm.module.scss';
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
    <Flex className={s.signupContainer}>
      <Flex className={s.signupFlex}>
        <Text fontSize="lg" mt={4} mb={8} textAlign="start" w="30%">
          <Text as="h1" fontWeight="bold">
            Welcome to our shoe brand!
          </Text>{' '}
          Our shoes are designed to provide both style and comfort. Sign up now to stay up-to-date with our latest
          releases and promotions.
        </Text>
        <Flex className={s.signupCardContainer}>
          <Heading mt={10} textAlign={'center'}>
            Register
          </Heading>

          <Formik initialValues={initialValues} onSubmit={() => console.log('submitted')}>
            {({ isSubmitting }) => (
              <Form className={s.signupForm}>
                <FormikField name="username" label="Username" type="text" />
                <FormikField name="email" label="Email" type="email" />
                <FormikField name="password" label="Password Input" type="password" />
                <FormikField name="confirmPassword" label="Confirm Password" type="password" />
                <Flex justify="center">
                  <Button mt={6} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Signup
                  </Button>
                </Flex>

                <Stack alignItems="center" mt={12}>
                  <Stack className={s._stackContainer}>
                    <Flex className={s.iconContainer} mt={2}>
                      <FaGoogle data-testid="social-icon" color="#DB4437" size={20} />
                    </Flex>
                    <Flex className={s.iconContainer}>
                      <FaFacebook data-testid="social-icon" color="#3B5998" size={20} />
                    </Flex>
                    <Flex className={s.iconContainer}>
                      <FaInstagram data-testid="social-icon" color="#E1306C" size={20} />
                    </Flex>
                    <Flex className={s.iconContainer}>
                      <FaLinkedin data-testid="social-icon" color="#0E76A8" size={20} />
                    </Flex>
                  </Stack>
                </Stack>

                <Flex className={s.textContainer}>
                  <Text>Already have an account?</Text>
                  <NavLink href="/login" fontWeight="bold" color={'blackAlpha.900'}>
                    Login
                  </NavLink>
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
