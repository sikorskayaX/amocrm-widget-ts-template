import React from "react";
import { Button } from "reon-ui-lib";
import { FeedbackFormProps } from "../feedback-form/FeedbackForm";
import classes from "./FeedbackMessage.module.scss";

const FeedbackMessage = ({
  setIsMessageSent,
}: FeedbackFormProps): JSX.Element => {
  const handleSubmit = (): void => {
    setIsMessageSent(false);
  };
  return (
    <div className={classes["message"]}>
      <h1 className={classes["message__title"]}>
        Ваше обращение зарегистрировано!
      </h1>
      <p className={classes["message__text"]}>
        Благодарим за обратную связь, Ваше обращение поступило на модерацию и
        менеджер проекта проверит его в ближайшее время! Будем рады реализовать
        ваш запрос!
      </p>
      <Button
        color="primary"
        onClick={handleSubmit}
        styles={{ button: { marginTop: "30px", alignSelf: "center" } }}
      >
        создать новое обращение
      </Button>
    </div>
  );
};

export default FeedbackMessage;
