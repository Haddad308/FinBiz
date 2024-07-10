import { useState, useEffect } from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const useDictionary = (lang: Locale) => {
  const [navigation, setNavigation] = useState({});

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setNavigation(dictionary);
    };
    fetchDictionary();
  }, [lang]);

  return navigation;
};

export default useDictionary;
