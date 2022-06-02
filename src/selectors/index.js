export const selectorOneProduct = (productId) => (state) => state.company.product.find((el) => (
  el.id === productId));

export const selectorOneProductInputs = (productId) => (state) => (state.input[`editProduct-${productId}`]);

export const errorInterceptor = (error, data) => {
  if (error.response) {
    if (error.response.data === `Key (siret)=(${data.siret}) already exists.`) {
      return `Le numéro de siret ${data.siret} existe déjà !`;
    }
    if (error.response.data === '"siret" length must be at least 9 characters long') {
      return 'Le numéro de siret doit avoir 9 charactères';
    }
    if (error.response.data === '"siret" is not allowed to be empty') {
      return 'Le champ Siret doit être rempli';
    }
    if (error.response.data === '"phone" length must be less than or equal to 10 characters long' || error.response.data === '"phone" length must be at least 10 characters long') {
      return 'Le numéro de téléphone doit comporter 10 chiffres';
    }
    if (error.response.data === '"phone" is not allowed to be empty') {
      return 'Le champ Tél doit être rempli';
    }
    if (error.response.data === '"mail" is not allowed to be empty') {
      return 'Le champ E-mail doit être rempli';
    }
    if (error.response.data === `Key (mail)=(${data.mail}) already exists.`) {
      return `L'adresse mail ${data.mail} existe déjà !`;
    }
    if (error.response.data === '"mail" must be a valid email') {
      return "L'adresse E-mail n'est pas complète";
    }
    if (error.response.data === `Key (pseudo)=(${data.pseudo}) already exists.`) {
      return `Le pseudo ${data.pseudo} existe déjà !`;
    }
    if (error.response.data === '"first_name" is not allowed to be empty') {
      return 'Veuillez saissir votre Prénom';
    }
    if (error.response.data === '"last_name" is not allowed to be empty') {
      return 'Veuillez saissir votre Nom';
    }
    if (error.response.data === '"address" is not allowed to be empty') {
      return 'Veuillez saissir votre Adresse';
    }
    if (error.response.data === '"zip" is not allowed to be empty') {
      return 'Veuillez saissir votre Code postal';
    }
    if (error.response.data === '"zip" length must be at least 5 characters long') {
      return 'Le code postal n\'est pas complet';
    }
    if (error.response.data === '"city" is not allowed to be empty') {
      return 'Veuillez saissir votre Ville';
    }
    if (error.response.data === `"password" with value "${data.password}" fails to match the required pattern: /^[a-zA-Z0-9]{3,30}$/`) {
      return 'Le champ Mot de passe doit contenir au moins 3 charatères';
    }
    if (error.response.data === 'Identification failed') {
      return 'Identifiant/Mot de passe incorrect';
    }
    if (error.response.data === 'Email is not correct') {
      return 'E-mail incorrect';
    }
    if (error.response.data === 'Password is not correct') {
      return 'Mot de passe incorrect';
    }
    if (error.response.data === '"password" is required') {
      return 'Veuillez saissir votre mot de passe';
    }
    if (error.response.data === '"password" is not allowed to be empty') {
      return 'Veuillez saissir votre mot de passe';
    }
    if (error.response.data === '"pseudo" is not allowed to be empty') {
      return 'Veuillez saissir votre pseudo';
    }
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
  else if (error.request) {
    console.log(error.request);
  }
  else {
    if (error.message) {
      return error.message;
    }
    console.log('Error', error.message);
  }
  return console.log(error);
};
