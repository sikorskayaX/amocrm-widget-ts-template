import React, { useCallback, useState } from "react";
import { Checkbox, Button, TextField, Select } from "reon-ui-lib";
import classes from './FeedbackForm.module.scss';
import { widgetOptions, requestOptions, politikaLink } from "../consts";

export type FeedbackFormProps = {
  setIsMessageSent: (messageSent: boolean) => void;
};

const FeedbackForm = ({ setIsMessageSent }: FeedbackFormProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState("");
  const [selectedRequestType, setSelectedRequestType] = useState("");
  const [supportRequestText, setSupportRequestText] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleToggleChange = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);

  const handleSelectionWidgetChange = useCallback((value: string) => {
    setSelectedWidget(value);
  }, []);

  const handleSelectionRequestTypeChange = useCallback((value: string) => {
    setSelectedRequestType(value);
  }, []);

  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSupportRequestText(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setIsMessageSent(true);
    console.debug(selectedWidget, selectedRequestType, supportRequestText, nameValue, emailValue, phoneValue);
  }, [isChecked]);
  
  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  }, []);

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  }, []);

  const handlePhoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(event.target.value);
  }, []);


  return (
    <form className={classes["feedback__form"]}>
      <div className={classes["feedback__selects"]}>
        <Select
          ariaIds={{
            comboboxId: "combobox1",
            labelId: "label1",
            listboxId: "listbox1",
            optionIdPrefix: "option1",
          }}
          popperZIndex = {1001}
          label="Выберите виджет"
          options={widgetOptions}
          placeholder="Выберите виджет"
          selectionSettings={{
            multiple: false,
            onChange: handleSelectionWidgetChange,
            value: selectedWidget,
          }}
          variant="underlined"
          styles={{ combobox: { width: "260px"}}}
          
        />
        <Select
          ariaIds={{
            comboboxId: "combobox2",
            labelId: "label2",
            listboxId: "listbox2",
            optionIdPrefix: "option2",
          }}
          popperZIndex = {1001}
          label="Выберите тип обращения"
          options={requestOptions}
          placeholder="Выберите тип обращения"
          selectionSettings={{
            multiple: false,
            onChange: handleSelectionRequestTypeChange,
            value: selectedRequestType,
          }}
          variant="underlined"
          styles={{ combobox: { width: "260px" } }}
        />
      </div>
      <textarea 
        className={classes["feedback__textarea"]} 
        placeholder="Введите текст обращения" 
        value={supportRequestText}
        onChange={handleTextChange}
      />
      <div className={classes["feedback__inputs"]}>
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
