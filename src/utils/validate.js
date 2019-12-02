export default ({ isAuth, values, errors }) => {
	const rules = {
		email: value => {
			if (!value) {
				errors.email = 'Введиде E-mail';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				errors.email = 'Неверный email';
			}
		},
		password: value => {
			if (!value) {
				errors.password = 'Введиде пар0ль';
			} else if (
				!isAuth &&
				!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
			) {
				errors.password = 'Слишк0м лёгкий пар0ль';
			}
		}
	};

	 Object.keys(values).forEach(key => rules[key]  && rules[key](values[key]));
};