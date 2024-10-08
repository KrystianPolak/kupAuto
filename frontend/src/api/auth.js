export const refreshAccessToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/refresh-token', {
        method: 'POST',
        credentials: 'include', 
      });
  
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken); 
        console.log('Token odświeżony');
      } else {
        console.log('Nieudane odświeżenie tokena:', data.message);
        logout(); 
      }
    } catch (error) {
      console.error('Błąd odświeżania tokena', error);
      logout();
    }
  };

export  const logout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/logout', {
        method: 'POST',
        credentials: 'include', 
      });
  
      if (response.ok) {
        localStorage.removeItem('accessToken'); 
        console.log('Wylogowano pomyślnie');
      } else {
        console.log('Nieudane wylogowanie');
      }
    } catch (error) {
      console.error('Błąd wylogowania', error);
    }
  };

  export const fetchUserData = async () => {
    const accessToken = localStorage.getItem('accessToken');
  
    const response = await fetch('http://localhost:5000/api/users/getLoggedUserData', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    if (response.ok) {
      return data; 
    } else {
      throw new Error(data.message);
    }
  };