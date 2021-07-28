import axios from 'axios';

const UsersBaseUrl = 'http://localhost:4000/users';

export const getUsers = async () => {
  try {
    const usersResult = await axios.get(UsersBaseUrl);
    return usersResult.data;
  } catch (err) {
    console.log(err);
  }
};
