export const reducer = (state, action) => {
  
    switch (action.type) {
      case 'LOGIN':
        const user = action.payload.user;
        return {
          ...state,
          Auth: true,
          token: action.payload.token,
          active: true,
          user: {
            userName: user.userName,
            email: user.email,
            phone: user.phone,
            personId: user.personId,
            department: user.department,
            verify: user.verify,
            userType: user.userType
          },
        }; 
      default:
        throw new Error('Action type must be defined');
    }
  };