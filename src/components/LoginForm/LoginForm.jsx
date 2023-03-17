export const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const { login, password } = e.target.elements;
        console.log(login.value, password.value);
    }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlForm="login">
        Login
        <input type="text" name="login" />
      </label>

      <label htmlForm="password">
        Password
        <input type="password" name="password" />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
};