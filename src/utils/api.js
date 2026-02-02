import {baseUrl} from "../utils/constants.js";

function handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleServerResponse)
    // .then((data) => {
    //   console.log("Data Received:", data);
    //   return data;
    // });
}

function addItems({ name = "", imageUrl = "", ingredients = ""}, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,  // Also capitalized the "A"
    },
    body: JSON.stringify({ name, imageUrl, ingredients }),
  }).then(handleServerResponse);
}

function deleteItems(_id, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

//likes
function addCardLike(_id, token){
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  })
  .then(handleServerResponse);
}


function removeCardLike(_id, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  })
  .then(handleServerResponse);
}
export { getItems, addItems, deleteItems, handleServerResponse,  addCardLike, removeCardLike };