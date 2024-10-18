import'react';
import PropTypes from 'prop-types';
const RegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
  error,
  success,
}) => {
  return (
    <div className="register-box">
      <h2>註冊</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">電子郵件</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">註冊</button>
      </form>
      <p>
        已經有帳號了？ <a href="/login">登入</a>
      </p>
    </div>
  );
};

// 定義 prop-types 驗證
RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
};



export default RegisterForm;




