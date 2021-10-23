import { useEffect } from "react";
import Components from "./components/Components";
import ScrolToTop from "./components/Elements/ScrolToTop";
import Loader from "./components/Elements/Loader";
import { client } from "./prismic-configuration";
import i18next from "i18next";

import { useTranslation } from "react-i18next";

import "./i18n";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      // const en = (await client.getSingle("main")).data;
      const am = (await client.getSingle("main_hy")).data;
      const ru = (await client.getSingle("main_ru")).data;

      i18next.addResourceBundle("ru", "translation", {
        ...i18n.store.data.ru.translation,
        ...ru,
      });
      i18next.addResourceBundle("am", "translation", {
        ...i18n.store.data.am.translation,
        ...am,
      });

      // setLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <Components />
      <ScrolToTop />
      <Loader />
    </div>
  );
};

export default App;
