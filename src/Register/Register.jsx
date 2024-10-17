// import { useState } from 'react';
// import './css/Register.css'; // 引入CSS樣式

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!username || !email || !password || !confirmPassword) {
//       setError('請填寫所有欄位');
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError('密碼不一致');
//       return;
//     }

//     // 在這裡添加註冊邏輯
//     console.log('註冊中...', { username, email, password });
    
//     // 清除錯誤
//     setError('');
    
//     // 假設註冊成功，可以導向登入頁面或其他頁面
//     // navigate('/login'); // 使用 useNavigate 進行導航
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box"> {/* 包裹在這個 div 中 */}
//         <h2>註冊</h2>
//         {error && <p className="error">{error}</p>}
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor="username">用戶名</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">電子郵件</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">密碼</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">確認密碼</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">註冊</button>
//         </form>
//         <p>
//           已經有帳號了？ <a href="/">登入</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from 'react';
import './Register.css'; // 引入CSS樣式
import authService from './authRegisterService'; // 引入 authService 處理API
import RegisterForm from'./RegisterForm'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // 重置錯誤
    setSuccess(''); // 重置成功訊息

    if (!username || !email || !password || !confirmPassword) {
      setError('請填寫所有欄位');
      return;
    }
    if (password !== confirmPassword) {
      setError('密碼不一致');
      return;
    }

    try {
      // 調用 authService 中的 register 函數處理 API 請求
      const response = await authService.register(username, email, password);
      setSuccess('註冊成功，請登入');
      console.log('註冊成功:', response);

      // 在成功後清空輸入欄位
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // 導向到登入頁面，假設使用 react-router
      // navigate('/login');
    } catch (error) {
      setError(error.message || '註冊失敗，請稍後再試');
    }
  };

  return (
    <div className="register-container">
      <RegisterForm
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleRegister={handleRegister}
        error={error}
        success={success}
      />
    </div>
  );
};

export default Register;