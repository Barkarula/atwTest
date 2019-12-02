## Table of Contents

- [Info](#info)
  - [Stack](#stack)
  - [Tasks's](#tasks's)
  - [Environment](#environment)
  - [Api](#api)
- [Todo](#todo)
- [QUIZ](#quiz)
- [Dev staff and docs](#dev-staff-and-docs)
- [TimeControl](#timeControl)
- [Snippets](#snippets)
- [Garbage](#garbage)
  - [Papers](#papers)
  - [NonAvailable](#nonAvailable)
  - [CapreDiem](#capreDiem)

## Info

Клиентская часть тестового задания разрабатываемого для аtw - [Фронтенд задание на ReactJS + NodeJS](http://test.atwinta.ru/#/workers)

В js следовал Airbnb, es5+.
В css старался соблюдать БЭМ-методологию.
Посмотреть loader эмуляцией медленного интернета
(в проекте нет искусственных вставок с замедлением прогрузки).
В проекте нет последовтельных коммитов, хотя умею пулить ,мержить.
Есть проблема с авто заполнение инпута даты в профиле, 
в связи с отстутствие yearPicera, библиотеки antd(Испльзовал YearPicker).

### `Stack`

- ReactJS
- Redux
- React Router
- Webpack
- SCSS
- Axios
- Formik
- Ant Design
- date-fns

### `Tasks's`
 ✓ Сверстать страницу входа.
 ✓ Полученный после отправки запроса токен сохранять в cookies или localStorage.
 ✓ При входе на сайт проверять есть ли токен в cookies или localStorage. И если есть, автоматически авторизовывать пользователя методом /user
 ✓ (*) Добавить валидацию полей.
 (*) Добавить форму восстановления пароля. Метод api для этого имеется.

 ✓ Сверстать страницу сотрудников.
 ✓ Реализовать запрос к api для получения определенной страницы списка сотрудников.
 ✓ Сверстать карточки сотрудников, являющимися ссылками на страницу просмотра сотрудника.
 ✓ Реализовать пагинацию или бесконечный скролл.
 ✓ Сверстать страницу сотрудника.
 ✓ При переходе на страницу сотрудника делать запрос к api для получения информации по нему.

 ✓ Сверстать страницу профиля.
 ✓ Реализовать запрос к api для сохранения данных профиля.
 ✓ Реализовать метод выхода из профиля.
 ✓ (*) Добавить валидацию полей.

### `Environment`

  node -v 11.6.0
  npm run start


### `Api`

Without token: 
- /auth/login
- /auth/register
- /auth/confirm

## Todo

Доработать:
C localS перейти на coocies, так как с точки безопасности он предочтительнее.
Отработка всех страниц со любым url через route* (Пока там только хедер, который нужно реализовать через hoc laout).
Логика запроса должна вынесена из jsx компонента в js.
App.js разложить на routes.js
prop-types

Добавить:
linter, prettier
React hooks(сделать бы красивый переход страниц либой).
404 page у atw взять.
Мидлвары добавить (console для redux),
Purecomp/comp для форм.
Cделать и пагинацию, и вечный скрол.
Redux-saga
Css-reset
Customize Theme.
Internationalization.
Ts.
✓ proxy api
antd:
result
skeleton
BackTop
Custom spinning indicator в отправке логинизации
Выходить из приложение через диалог, вы уверены?
на главной заявление о выполнение

Убрать:
В  убрать все комменты.

Всякое:
Cсылки должны ссылаться на #
Юзать loading Card? (из Антd)
Использовать Чат, живосайт-виджет, disqus

Дизайн:
кросплатформенность(Проверка в браузерах Moz, Saf, Exp)
✓ адаптивность
фильтры
градиенты

Тестирование:
WithRouter.
npm audit.
Props...

Роуты:
/register
 Телефон формат: 8 - xxx - xxx - xx - xx
 Tooltip 
 ✗ перекинуть дату на др. cторону
 ✓ подсветить форму
 глаз к паролю. кнопки.
 войти и loader
 вёрстка мобильн

/memu
  ссылка открывающая 1 компонент
  Change Theme

## QUIZ

Неоднозначные моменты про которые стоило бы спросить.

Не стал заморачиваться с пагинацией. У мня как и на странице тестового задания не сохраняется
текущая страница пагинации. Так если перейти в профиль допистим на 2ой странице и вернутся, 
по идее должен возвращаться на ту же страницу где и был (на 2рую), но возвращает всегда на первую.
Это лучше сохранять в поле профиля в store? (Тот же эффект от f5).
Нужно ли сохранять профили в store(n-ное количество), чтобы не было постоянного loaderа и
оптимизации запросов.
.
Какие должны быть правила для валидации в регистрации?
.
Нужно ли как-то проверять токен в течении какого-то времени?
.
Что писать в img alt да и в целом SEO.
.
Дизейблить кнoпку как? через state?
input:-internal-autofill-selected
Как лучше именовать компненты, контейнеры, страницы.
.
isSubmitting пересдало рабодадь в react-fiber, пришлось через сдейд фиксидь хэндлсабмитом// response.status === 200
Выбрал Fоrmik, а не redux-fоrm
.
По идее структура должна быть такая, чтобы сверху и снизу были компоненты, а между контейнеры.
ошибки с прошлой задачи...
.
Как быть с роутингом если не передаётся this.props.match (никак не удаётся вниз
спустить вниз пропсы по цепочке).
window.innerWidth, как быть с рекомапановкой связанной с размерами скрина.
route /im.. (Плакал мой чат).
.
Разве не должен быть метод get/auth? Как проверять соответсвтие
токена, по тому токену что получаешь с login? Тогда у logina должен быть поле status
Был вариант сохранять пароль в сторадже, что плохо для того чтобы методом login отправлять 
email, pass и сравнивать токен локальный с пришедшим, но держать пароль локально не правильно.
Видимо в приложении тестового задания просто смотрелось, есть ли токен вообще. 
.
на странице справка по тестовому задания ворнинги
.
не работает textarea в antd и не работают month-picker, fb-end

css:
styled-Components
стилизация компонентов а виджетов?
именование нельзя через камлкейс,
порядок свойств по htmlAcademy
workersWidjetUi или WorkersContainer
спец стили для разных устройств для консистентности
все добавить в глобальный main блок css для той же консистентности

По коду:
App > pages > component > container > widjetUI(component)
В WorkersContainer renderItems не красивая проверка из-за двойного вызова,
как лучше написать?

api
workers:
не работает query 
зачем в workers возвращает поля email, в примере не используется

## Dev staff and docs

test42@mail.ru
Bs1FVZmUch

Пароль к почте в тестовом задании:
kliment.barkalov@gmail.com
asdasd
klim.barkalov@mail.ru

http://test.atwinta.ru/#/register
http://test.atwinta.ru/#/profile
http://test.atwinta.ru/#/reference
http://test.atwinta.ru/#/workers

API:
http://test.atwinta.ru/api/documentation

Ant Design
https://ant.design/components/form/

Formik
https://github.com/jaredpalmer/formik
json-server
https://github.com/typicode/json-server
Archakov
https://github.com/Archakov06/react-tutorial-blog/blob/master/src/core/axios.js
redux-devtools-extension
https://github.com/zalmoxisus/redux-devtools-extension
json generator

Pagination
https://www.youtube.com/watch?v=IYCa1F-OWmk

Course-helper:
https://www.youtube.com/watch?v=1yfdEKBr4r4&list=PL0FGkDGJQjJFDr8R3D6dFVa1nhce_2-ly&index=5
https://github.com/Archakov06/react-chat-tutorial/commits/master
https://coursehunters.net/course/samyy-polnyy-react-fullstack-kurs
Верстка:
https://www.youtube.com/user/agragregra/playlists?reload=9
https://www.youtube.com/user/AlexeySuprun/playlists?pbjreload=10
Инструменты:
https://www.youtube.com/watch?v=lZQCG5y_UYQ

## TimeControl

...   - ReduxForm/forimk, antd Notifications
17/11 - 20:30-4:00 Antd доки. 
18/11 - 20:30-1:00 Разработка структуры проекта, ReadmeMd.
19/11 - 22:30-1:00 Спинер, router, workerPage.
20/11 - 22:30-1:30 WorkerPage + dateFormat.
21/11 - 23:59-3:00 Date-fns, workerPage вёрстка.
24/11 - 20:00-1:00 AuthHoc, WorkerPage: Pagination и fix:
  Показать loader если не совпадают props для profile. 
  Обработка случая, если мы зашли на страницу другого сотрудника со страницы сотрудников, а пропсы еще не пришли и
  store не поменялся ,поэтому следует показывать лоадер пока store не обновился.
25/11 - 23:00-0:00 lauout hoc(Header) + auth hoc, главная страница.
26/11 - 20:30-1:00 reference(Справка по тестовму заданию), Профиль
-
01/12 - 22:30-3:00 пытался передлать авторизацию, регистрацию

## Snippets

// axios.get('/path/to/user-api').then(response => {
//     this.setState({users: response.data});
//   });

Structure:
https://github.com/Barklim/Genomus/blob/master/client/src/components/Home/home.js
https://github.com/Barklim/Genomus/blob/master/client/src/containers/home_container.js
https://github.com/Barklim/Genomus/blob/master/client/src/widgetsUI/book_item.js

## Garbage

Всякое исключительно для себя.

npm i redux react-redux
npm i redux-thunk
yarn init
yarn add --dev json-server
yarn add redux react-redux
yarn add redux-thunk

react-fontawesome, ^1.6.1
redux-promise,  ^0.5.3
npm audit fix

Убрал Formik, поэтому нет эффекта 'ошибки валидации', 
после того как убрал фокус из инпута, не желательного;
Поменял на // Only show error after a field is touched.
Выдает ошибку после рендеринга в консоль, потому что поля пустые.
.
коррекция метода getMe isAuth === false

### Papers
Codes (телефонные коды для страницы профиля):
http://cis.minsk.by/page.php?id=2690

Utf:
https://www.utf8-chartable.de/unicode-utf8-table.pl?start=9984&names=2&utf8=-&unicodeinhtml=hex

mapStateToProps mapDispatchToProps:
https://habr.com/ru/post/314582/
https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
https://learn.co/lessons/map-dispatch-to-props-readme
https://getinstance.info/articles/react/learning-react-redux/
https://blog.benestudio.co/5-ways-to-connect-redux-actions-3f56af4009c8

Array is Empty
https://www.geeksforgeeks.org/check-if-an-array-is-empty-or-not-in-javascript/

cписки и ключи
https://ru.reactjs.org/docs/lists-and-keys.html

react map
.
browser
http://test.atwinta.ru/#/workers
http://test.atwinta.ru/api/documentation
http://test.atwinta.ru/api/documentation

react
https://ant.design/docs/react/introduce
.
theme
https://ant.design/components/menu-cn/

### NonAvailable
page: worker
components: workerComponent

### CapreDiem
То что делаю прямо сейчас:

console.log('WARN')
Ошибка доступа
Необходимо авторизоваться

react
https://ant.design/docs/react/introduce#Links
https://maxfarseer.gitbooks.io/redux-course-ru/content/usiliteli_logger.html
https://github.com/rajdee/redux-in-russian/blob/master/docs/advanced/Middleware.md
.
нотификейшн. об ошибках. в auth.js, (через state)
notifications каждый раз при авторизации