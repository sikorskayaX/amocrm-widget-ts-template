import React from "react";
import { Button } from "reon-ui-lib";
import { FeedbackFormProps } from "./FeedbackForm";

const FeedbackMessage = ({setMessageSent}: FeedbackFormProps) => {
    return(
        <div className="message">
            <h1 className="message__title">
            Ваше обращение зарегистрировано!
            </h1>
            <p className="message__text">Благодарим за обратную связь, Ваше обращение поступило на модерацию 
            и менеджер проекта проверит его в ближайшее время! Будем рады реализовать ваш запрос!</p>
            <Button
                color="primary"
                onClick={() => setMessageSent(false)}
                styles={{button : {marginTop: '30px', alignSelf: 'center'}}}
                >
                создать новое обращение
            </Button>
        </div>
    );
}

export default FeedbackMessage;