import React from "react";
import {Checkbox, Button } from "reon-ui-lib";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";

const FeedbackForm = () : JSX.Element => {
    return(
        <form className="feedback__form">
            <div className="feedback__selects">
            <FormSelect
                    name="slct1"
                    label="slct1"
                    options={{
                        start: "Распределение заявок",
                        first: "Распределение",
                        second: "Заявок",
                    }}                
                    styles = {{combobox: {width: '260px'}}}
            />
            <FormSelect
                    name="slct2"
                    label="slct20"
                    options={{
                        start: 'Добавить новый функционал',
                        first: 'Добавить',
                        second: 'Новый функционал'
                    }} 
                    styles = {{combobox: {width: '260px'}}}          
                />
            </div>
            <FormInput
                name="Введите текст"
                type = "text"
                style={{ height: '100px', margin: '20px 0' }}
            />
            <div className="feedback__inputs">
                <FormInput
                    name="Имя"
                    type="text" style={undefined}                />
                <FormInput
                    name="Почта"
                    type="email" style={undefined}                />
                <FormInput
                    name="Телефон"
                    type="tel" style={undefined}                />
            </div>
            <Checkbox
                label="Я прочитал(-а) и согласен (-на) с условиями обработки персональных данных"
                onChange={function iu(){}}
                style={{marginBottom: '30px'}}
            />
            <Button
                color="primary"
                onClick={function iu(){}}
                >
                отправить
            </Button>
        </form>
    )
}

export default FeedbackForm;