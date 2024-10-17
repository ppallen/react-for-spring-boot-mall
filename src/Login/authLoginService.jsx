export const loginUser = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return data; // 假設data裡有token
      } else {
        throw new Error(data.message || '登入失敗');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      throw new Error('伺服器發生錯誤，請稍後再試');
    }
  };