import React, { useState } from "react";
import {Checkbox, Button } from "reon-ui-lib";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";

const FeedbackForm = () : JSX.Element => {
    const [checked, setChecked] = useState<boolean>(false);
    
    return(
        <form className="feedback__form">
            <div className="feedback__selects">
            <FormSelect
                    name="Выберите виджет"
                    label="Выберите виджет"
                    options={{
                        start: "Распределение заявок",
                        first: "Распределение",
                        second: "Заявок",
                    }}                
                    styles = {{combobox: {width: '260px'}}}
            />
            <FormSelect
                    name="Выберите тип обращения"
                    label="Выберите тип обращения"
                    options={{
                        start: 'Добавить новый функционал',
                        first: 'Добавить',
                        second: 'Новый функционал'
                    }} 
                    styles = {{combobox: {width: '260px'}}}          
                />
            </div>
            <FormInput
                name="Введите текст обращения"
                type = "text"
                style={{ height: '75px', margin: '20px 0' }}
            />
            <div className="feedback__inputs">
                <FormInput
                    name="ФИО"
                    type="text"                
                    />
                <FormInput
                    name="E-mail"
                    type="email"             
                    />
                <FormInput
                    name="+7 (000) 000-00-00"
                    type="tel"   
                    style={{width:'147px'}}             
                    />
            </div>
            <Checkbox
                label= <> Я прочитал(-а) и согласен (-на) с <a href="https://reon.pro/politika">условиями</a> обработки персональных данных</>
                checked = {checked}
                onChange={() => setChecked(prev => !prev)}
                style={{marginBottom: '30px'}}
            />
            <Button
                color="primary"
                onClick={function iu(){}}
                styles={{button : {marginTop: '20px', alignSelf: 'flex-end'}}}
                >
                отправить

            </Button>
        </form>
    )
}

export default FeedbackForm;