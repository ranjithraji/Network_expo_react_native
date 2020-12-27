export const reducer = (state, action) => {
  
    switch (action.type) {
      case 'LOGIN':
        const user = action.payload.user;
        console.log(user, "userccccccccccccc");
        return {
          ...state,
          isLoading:false,
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
          userType: user.userType
        }; 
        case 'LOGOUT':
          return {
            isLoading:false,
            Auth: false,
            token: null,
            active: false,
            user: {}
          }; 
      default:
        throw new Error('Action type must be defined');
    }
  };