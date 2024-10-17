// authService.js
const BASE_URL = 'https://your-api-url.com';

const AuthService = {
  register: async (username, email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      if (!response.ok) {
        throw new Error('註冊失敗');
      }
      return await response.json();
    } catch (error) {
      console.error('註冊失敗:', error);
      throw error;
    }
  }
};

export default AuthService;
