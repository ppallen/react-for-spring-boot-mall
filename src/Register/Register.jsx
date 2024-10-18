import { useState } from 'react';
import './Register.css'; // 引入CSS樣式
import registerService from './authRegisterService'; // 引入 authService 處理API
import RegisterForm from'./RegisterForm'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';// 引入 framer-motion


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isExiting, setIsexiting] = useState(false);// 控制淡出狀態

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // 重置錯誤
    setSuccess(''); // 重置成功訊息

    if (!email || !password ) {
      setError('請填寫所有欄位');
      return;
    }

    try {
      // 調用 authService 中的 register 函數處理 API 請求
      const response = await registerService.register( email, password);
      setSuccess('註冊成功，3秒後將跳轉至登入畫面');
      console.log('註冊成功:', response);

      // 在成功後清空輸入欄位
      setEmail('');
      setPassword('');


      // 3 秒後觸發淡出動畫，然後導航到登入頁面
      setTimeout(() =>{
        setIsexiting(true);
      },3000 );
    } catch (error) {
      setError(error.message || '註冊失敗，請稍後再試');
    }
  };

  const handleAnimationComplete = () => {
    if(isExiting){
      navigate('/login');// 動畫完成後跳轉到登入頁面
    }
  }

  return (
    <motion.div
    initial={{opacity:1}}
    animate={{opacity: isExiting?0:1}}
    transition={{duration:1}}
    onAnimationComplete={handleAnimationComplete}
    >

    <div className="register-container">
      <RegisterForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleRegister={handleRegister}
        error={error}
        success={success}
      />
    </div>
    </motion.div>
  );
};

export default Register;