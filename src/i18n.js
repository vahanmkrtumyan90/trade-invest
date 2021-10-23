import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "am",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      // en: {
      //     translation: {
      //         home: 'Home',
      //         services: 'Services',
      //         about: 'About us',
      //         contact: 'Contact us',
      //         language: 'Language',
      //         servicesWeOffer: 'Services We are Offering',
      //         start: 'Get started',
      //         footer_title: 'Want to connect with us?',
      //         pages: 'Pages',
      //         monday: 'Monday',
      //         tuesday: 'Tuesday',
      //         wednesday: 'Wednesday',
      //         thursday: 'Thursday',
      //         friday: 'Friday',
      //         working_hours: 'Working Hours',
      //         address: 'Address',
      //         phone: 'Phone',
      //         email: 'E-mail',
      //         formTitle: 'Write us',
      //         name: 'Your name',
      //         subject: 'Subject',
      //         message: 'Message',
      //         send: 'Send Message',
      //         location: 'Location',
      //     },
      // },
      am: {
        translation: {
          home: "Գլխավոր",
          services: "Ծառայություններ",
          about: "Մեր մասին",
          contact: "Կապ",
          language: "Լեզու",
          servicesWeOffer: "Մեր առաջարկած ծառայությունները",
          start: "Կապ",
          footer_title: "Ցանկանու՞մ եք կապ հաստատել։",
          pages: "Էջեր",
          monday: "Երկուշաբթի",
          tuesday: "Երեքշաբթի",
          wednesday: "Չորեքշաբթի",
          thursday: "Հինգշաբթի",
          friday: "Ուրբաթ",
          working_hours: "Աշխատանքային ժամեր",
          address: "Հասցե",
          phone: "Հեռախոս",
          email: "Էլ․ հասցե",
          formTitle: "Գրեք մեզ",
          name: "Անուն",
          subject: "Թեմա",
          message: "Հաղորդագրություն",
          send: "Ուղարկել",
          location: "Գտնվելու վայրը",
        },
      },
      ru: {
        translation: {
          home: "Главная",
          services: "Услуги",
          about: "О Нас",
          contact: "Связаться",
          language: "Язык",
          servicesWeOffer: "Услуги, которые мы предлагаем",
          start: "Связаться с нами",
          footer_title: "Вы хотите с нами связаться?",
          pages: "Страницы",
          monday: "Понедельник",
          tuesday: "Вторник",
          wednesday: "Среда",
          thursday: "Четверг",
          friday: "Пятница",
          working_hours: "Рабочие часы",
          address: "Адрес",
          phone: "Телефон",
          email: "E-mail",
          formTitle: "Пишите нам",
          name: "Имя",
          subject: "Тема",
          message: "Ваше сообщение",
          send: "Отправить",
          location: "Место нахождения",
        },
      },
    },
  });

export default i18n;
