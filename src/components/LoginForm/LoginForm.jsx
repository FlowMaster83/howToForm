import { Field, Formik, Form } from 'formik';

const initialValues = {
  login: '123',
  password: 'qwe',
};

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlForm="login">
          Login
          {/* значение атрибута name (login) должен совпадать с объектом initialValues */}
          <Field type="text" name="login" />
        </label>

        <label htmlForm="password">
          Password
          {/* значение атрибута name (password) должен совпадать с объектом initialValues */}
          <Field type="password" name="password" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
