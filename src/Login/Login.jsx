import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './authLoginService'; // 引入 API 調用邏輯
import LoginForm from './LoginForm'; // 引入 UI 組件
import './Login.css'; // 確保引入更新的 CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      const { token } = data;

      // 保存token到localStorage
      localStorage.setItem('token', token);

      setError('');
      //navigate('/shop'); // 登入成功後導向商店頁面
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      handleLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loading={loading}
      error={error}
    />
  );
};

export default Login;