import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./components/loginpage";
import { grpoductsrouter } from "./Router/router";
import Products from "./components/products";
import { gpstoreApi } from "./Redux/Services/gproducts";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Shoppingpage from "./components/shoppingpage";
import Createuser from "./components/createuser";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [gpstoreApi.reducerPath]: gpstoreApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gpstoreApi.middleware),
})

const publicrouteloader = () => {
  return null;
}

const  protectedrouteloader = () => {
    if (localStorage.getItem('loginstatus') !== 'sucess' ) {
        return redirect(grpoductsrouter.login)
    }
    return null;
}
const objrouter = createBrowserRouter([
{
  path : grpoductsrouter.login,
  element : <LoginPage />,
  loader : publicrouteloader

},
{
  path : "/",
  element : <LoginPage />,
  loader : publicrouteloader
},
{
  path : grpoductsrouter.productlist,
  element : <Products />,
  loader : protectedrouteloader
},
{
  path : grpoductsrouter.shoppingpage,
  element : <Shoppingpage />,
  loader : protectedrouteloader
},
{
  path : grpoductsrouter.createaccount,
  element : <Createuser />,
  loader : publicrouteloader
},
])
function App() {
  return (<Provider store={store}>
    <RouterProvider router={objrouter} />
    </Provider>
  );
}

export default App;
