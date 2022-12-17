import { message } from 'antd';

export const success = (e) => {
    return message.success({
        content: String(e),
        className: "notificationMessage",

    });
};

export const error = (text) => {

    message.error({
        content: String(text),
        className: "notificationMessage",
    });

};

export const warning = () => {
    message.warning('This is a warning message');
};

export const Info = (text) => {
    message.info({
        content: String(text),
        className: "notificationMessage",
    });
};



