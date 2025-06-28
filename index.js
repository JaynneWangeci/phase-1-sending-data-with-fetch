function submitData(name, email) {
  // Create the data object to be sent
  const formData = {
    name: name,
    email: email
  };

  // Create the configuration object for the fetch request
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  // Return the fetch chain
  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      // Append the new id to the DOM
      const idElement = document.createElement('p');
      idElement.textContent = object.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Append the error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}
