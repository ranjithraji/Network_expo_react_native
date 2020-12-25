import AsyncStorage from "@react-native-async-storage/async-storage"

const token = AsyncStorage.getItem('token');
const URL = 'http://192.168.43.207:2000'
export const getIssuesNotified = async() =>{
    let response;
    try {
        response = await fetch(`${URL}/v1/user/get/notifications`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
        });
        if (response.status == 200) {
            return await response.json();
          }
          if (response.status == 400) {
            var errorResponse = await response.json();
            throw new Error (errorResponse.error);
          }
          if (response.status == 401) {
            var errorResponse = await response.json();
            throw new Error (errorResponse.error);
          }
          {
            return response;
          }
    } catch (e) {
        console.log(e.message);
        throw new Error(e.message);
      }
}