// authService.js
const BASE_URL = 'http://localhost:8080/users';

const registerService = {
  register: async ( email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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

export default registerService;
