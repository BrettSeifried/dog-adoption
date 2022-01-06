import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function getDogsById(id) {
  let response = await client.from('dogs').select().match({ id }).single();
  return checkError(response);
}

export async function updateDog(id, name, age, bio, image, breed) {
  const response = await client.from('dogs').update({ age, bio, name, image, breed }).eq('id', id);
  return checkError(response);
}

export async function addDog(name, age, bio, image, breed) {
  const response = await client.from('dogs').insert({ age, bio, name, image, breed });
  return checkError(response);
}

// export async function deleteDog(id) {
//   const response = await client.from('dogs').delete().match({ id });
//   return checkError(response);
// }
