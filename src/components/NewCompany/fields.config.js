export default [
  {
    value: '',
    type: 'text',
    name: 'name',
    placeholder: 'Nom de société',
    required: true,
  },
  {
    value: '',
    type: 'text',
    name: 'siret',
    placeholder: 'Siret',
    required: true,
  },
  {
    value: '',
    type: 'email',
    name: 'mail',
    placeholder: 'E-mail',
    required: true,
  },
  {
    value: '',
    type: 'text',
    name: 'address',
    placeholder: 'Adresse',
    required: true,
  },
  {
    value: '',
    type: 'text',
    name: 'zip',
    placeholder: 'Code Postal',
    required: true,
  },
  {
    value: '',
    type: 'text',
    name: 'city',
    placeholder: 'Ville',
    required: true,
  },
  {
    value: '',
    type: 'tel',
    pattern: '(\d{2}\s){4}\d{2}',
    name: 'phone',
    placeholder: 'Tél',
    required: true,
  },
];
