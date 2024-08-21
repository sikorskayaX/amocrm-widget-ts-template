import React, { useState } from "react";
import { Checkbox, Button, TextField, Select } from "reon-ui-lib";
import { widgetOptions, requestOptions, politikaLink } from "../mocks";

export type FeedbackFormProps = {
  setIsMessageSent: (messageSent: boolean) => void;
};

const FeedbackForm = ({ setIsMessageSent }: FeedbackFormProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState("");
  const [selectedRequestType, setSelectedRequestType] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleToggleChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = () => {
    setIsMessageSent(true);
    console.debug(selectedWidget, selectedRequestType, nameValue, emailValue, phoneValue);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(event.target.value);
  };

  return (
    <form className="feedback__form">
      <div className="feedback__selects">
        <Select
          ariaIds={{
            comboboxId: "combobox1",
            labelId: "label1",
            listboxId: "listbox1",
            optionIdPrefix: "option1",
          }}
          label="Выберите виджет"
          options={widgetOptions}
          placeholder="Выберите виджет"
          selectionSettings={{
            multiple: false,
            onChange: setSelectedWidget,
            value: selectedWidget,
          }}
          variant="underlined"
          styles={{ combobox: { width: "260px" } }}
        />
        <Select
          ariaIds={{
            comboboxId: "combobox2",
            labelId: "label2",
            listboxId: "listbox2",
            optionIdPrefix: "option2",
          }}
          label="Выберите тип обращения"
          options={requestOptions}
          placeholder="Выберите тип обращения"
          selectionSettings={{
            multiple: false,
            onChange: setSelectedRequestType,
            value: selectedRequestType,
          }}
          variant="underlined"
          styles={{ combobox: { width: "260px" } }}
        />
      </div>
      <textarea className="feedback__textarea" placeholder="Введите текст обращения" />
      <div className="feedback__inputs">
        <TextField
          label="ФИО"
          placeholder="ФИО"
          type="text"
          variant="outlined"
          style={{ backgroundColor: "#fff" }}
          value={nameValue}
          onChange={handleNameChange}
        />
        <TextField
          label="E-mail"
          placeholder="E-mail"
          type="email"
          variant="outlined"
          style={{ backgroundColor: "#fff" }}
          value={emailValue}
          onChange={handleEmailChange}
        />
        <TextField
          label="+7 (000) 000-00-00"
          placeholder="+7 (000) 000-00-00"
          type="tel"
          variant="outlined"
          style={{ backgroundColor: "#fff", width: "147px" }}
          value={phoneValue}
          onChange={handlePhoneChange}
        />
      </div>
      <Checkbox
        label={
          <>
            Я прочитал(-а) и согласен(-на) с{" "}<a href={politikaLink}>условиями</a> обработки персональных данных
          </>
        }
        checked={isChecked}
        onChange={handleToggleChange}
        style={{ marginBottom: "30px" }}
      />
      <Button
        color="primary"
        onClick={handleSubmit}
        disabled={!isChecked}
        styles={{ button: { marginTop: "20px", alignSelf: "flex-end" } }}
      >
        отправить
      </Button>
    </form>
  );
};

export default FeedbackForm;

