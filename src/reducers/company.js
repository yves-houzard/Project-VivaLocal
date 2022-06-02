import {
  companyT,
  authentT,
  productT,
  appT,
} from '../action-types';

const initialState = {
  id: '',
  name: '',
  address: '',
  city: '',
  zip: '',
  phone: '',
  mail: '',
  detail: '',
  communication: '',
  lastUpdate: '',
  image: '',
  product: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case companyT.SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case companyT.SUCCESS_REGISTER: {
      return {
        ...state,
      };
    }
    case authentT.DISCONNECT: {
      return {
        initialState,
      };
    }
    case productT.SUCCESS_REGISTER: {
      // console.log(action.payload);
      const product = [...state.product];
      product.push(action.payload);
      return {
        ...state,
        product,
      };
    }
    case productT.UPDATE_SUCCESS: {
      // console.log('UPDATE SUCCESS', action.payload);
      const newArrayProduct = state.product.map((product) => {
        console.log(product.id === action.payload.id, product.id, action.payload.id);
        // console.log("ID", action.payload.id, product.id);
        // console.log("STATE", state.product);
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      // console.log('MAP', newArrayProduct);
      return {
        ...state,
        product: newArrayProduct,
      };
    }

    case productT.SUCCESS_DELETE: {
      const newArrayProduct = state.product.filter((product) => product.id !== action.payload);
      return {
        ...state,
        product: [
          ...newArrayProduct,
        ],
      };
    }
    case companyT.DISPLAY_EDITING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case appT.UPLOAD_PICTURE_SUCCESS: {
      const { productId, image } = action.payload;
      console.log('reducer photo', image);
      if (productId) {
        const updatedProducts = state.product.map((prod) => {
          console.log('UPLOAD', productId);
          return (
            prod.id === productId //  if incoming ID is found
              // modify product with url+timestamp in object
              ? { ...prod, image }
              : prod // or return product as it is
          );
        });
        return {
          ...state,
          product: updatedProducts,
        };
      }
      return {
        ...state,
        /* if there is no product id, we set main pic */
        image: productId ? state.image : image,
      };
    }

    // case productT.FILL_EDIT_PRODUCT_FORM: {
    //   const { id } = action.payload;
    //   const updatedProducts = state.product.map((prod) => {
    //     console.log("UPLOAD", id);
    //     return (
    //       prod.id === productId //  if incoming ID is found
    //         ? { ...prod, image: url } // modify product with url
    //         : prod // or return product as it is
    //     );
    //   });
    //   return {
    //     ...state,
    //     products: updatedProducts,
    //   };
    // }

    default:
      return state;
  }
};

export default reducer;
