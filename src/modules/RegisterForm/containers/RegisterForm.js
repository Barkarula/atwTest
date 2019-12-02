//import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";

/*
export default withFormik({
  validate: values => {
    let errors = {};

    if (!values.name) {
      errors.name = "Обязательное поле";
    } else if (
      !/^[a-zA-Zа-яА-Я]+$/ui.test(values.name)
    ) {
      errors.name = "Некорректное имя";
    }

    if (!values.email) {
      errors.email = "Обязательное поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Некорректная почта";
    }

    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)
    ) {
      errors.password = "Слишком лёгкий пароль";
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "RegisterForm"
})(RegisterForm);
*/
export default RegisterForm;
