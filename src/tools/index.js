export const normalizeBoolean = (value) => {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  return value;
};

export function shapedObject(shape, source) {
  for (const key in shape) {
    /* if key exists on source object, we update shape with it.
    If not, shape keeps its default value. other keys in source are discarded */
    shape[key] = source.hasOwnProperty(key) ? source[key] : shape[key];
  };
  return shape;
}

export const productShape = {
  id: 0,
  type: '',
  name: '',
  image: 'default',
  detail: '',
  price_kg: true,
  price: '',
  company_id: 0,
};

export const companyShape = {
  id: 0,
  name: '',
  address: '',
  city: '',
  zip: '',
  phone: '',
  mail: '',
  detail: '',
  communication: '',
  siret: '',
  image: 'default',
  user_id: 0,
};
