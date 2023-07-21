import { Provider } from "react-redux";
import store from "../src/app/redux/store";
import Language from "../src/app/language/language";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Language />
    </Provider>
  );
}

export default MyApp;
