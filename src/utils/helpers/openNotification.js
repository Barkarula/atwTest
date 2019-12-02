import { notification } from "antd";

//export default (text, type = 'info' , title, duration = 3) => 
export default ({text, type = 'info' , title, duration = 3}) => 
  notification[type]({ //type = 'info'
  	message: title,
  	description: text,
  	duration: duration
  });