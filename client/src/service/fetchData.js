import axios from 'axios';

const UsersBaseUrl = 'http://localhost:4000/users';

const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getUsers = async () => {
  try {
    const usersResult = await axios.get(UsersBaseUrl);
    return usersResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewUser = async (obj) => {
  try {
    const res = await fetch(`${UsersBaseUrl}/new`, {
      method: 'POST',
      body: JSON.stringify(obj),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('New User Created: ', result);
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

export const deleteOneUser = async (id) => {
  try {
    const resp = await fetch(`${UsersBaseUrl}/delete/${id}`, {
      method: 'DELETE',
      ...reqOptions,
    });
    await resp.json();
  } catch (err) {
    console.log('Delete user failed.. ', err);
  }
};

export const editOneUser = async (id, newBody) => {
  const resp = await fetch(`${UsersBaseUrl}/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newBody),
    ...reqOptions,
  });
  await resp.json();
};
