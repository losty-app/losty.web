import { Provider } from "../models";

const initialState = [];

const providersReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROVIDERS":
      return action.payload;
    case "UPDATE_PROVIDER":
      const updatedProvider = action.payload;
      const updatedProviders = state.map((provider) =>
        provider.id === updatedProvider.id ? updatedProvider : provider
      );
      return updatedProviders;

    default:
      return state;
  }
};

export default providersReducer;
