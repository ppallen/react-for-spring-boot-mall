import'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleLogin, email, setEmail, password, setPassword, loading, error }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>登入</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" disabled={loading}>
            {loading ? '登入中...' : '登入'}
          </button>
        </form>
        <p>
          還沒有帳號？ <a href="/register">註冊</a>
        </p>
      </div>
    </div>
  );
};

// 添加 props 驗證
LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default LoginForm;
