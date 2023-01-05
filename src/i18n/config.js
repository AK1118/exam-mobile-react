import i18next from "i18next";
import translation_zh from "./modules/zh.json";
import translation_en from "./modules/en.json";

const resources={
    zh:{
       translation:translation_zh
    },
    en:{
        translation:translation_en
    },
};

/*初始化语言 */
i18next.init({
    lng:'zh',
    resources,
});

export default i18next;