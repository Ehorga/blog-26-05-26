import { Formik, Form, Field, ErrorMessage } from "formik";
import {useDispatch} from 'react-redux';
import { loginUserAuth } from './../../store/userSlice';
const LoginForm = (props) => {
    const {closeModal} = props;
    const dispatch = useDispatch();
    const onSubmit = (values) => {dispatch(loginUserAuth(values));};
  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit}>
      {() => {
        return (
          <Form>
            <label htmlFor="">
              <span>username</span>
              <Field name="username" />
              <ErrorMessage name="username" />
            </label>

            <label htmlFor="">
              <span>password</span>
              <Field name="password" />
              <ErrorMessage name="password" />
            </label>

            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
