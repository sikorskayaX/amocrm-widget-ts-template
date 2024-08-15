import React, { ReactNode } from "react";
import { Select, Checkbox, Button, TextField } from "reon-ui-lib";

const Feedback = () : ReactNode => {
    return(
        <section className="feedback">
            
            <div className="feedback__text">
            Данный раздел необходим для получения прямой обратной связи от наших клиентов 
            и партнеров о том, каких виджетов в REON.Маркет Вам не хватает и какой функционал необходимо добавить или доработать в том или ином виджете. Все свои идеи 
            и предложения вы можете оставить в этом разделе, нажав кнопку 
            “+ СОЗДАТЬ ОБРАЩЕНИЕ”.
            </div>
        <h3 className="feedback__title">Форма создания обращения</h3>
        <form className="feedback__form">
            <div className="feedback__selects">
            <Select
                ariaIds={{
                    comboboxId: 'combobox1',
                    labelId: 'label1',
                    listboxId: 'listbox',
                    optionIdPrefix: 'option'
                }}
                label="Распределение заявок"
                options={{
                    "1": "Распределение заявок",
                    "2": "Распределение заявок2",
                    "3": "Распределение заявок3",
                }}
                placeholder="Распределение заявок"
                selectionSettings={{
                    multiple: false,
                    onChange: (e) => console.debug(e),
                    value: "Распределение заявок"
                }}
                variant="underlined"
            />
                <Select
                ariaIds={{
                    comboboxId: 'combobox2',
                    labelId: 'label2',
                    listboxId: 'listbox2',
                    optionIdPrefix: 'option2'
                }}
                label="Добавить новый функционал"
                options={{
                    start: <>Добавить3 новый функционал</>,
                    first: <>Первый</>,
                    second: <>Второй</>
                }}
                placeholder="Добавить новый функционал"
                selectionSettings={{
                    multiple: false,
                    onChange: function iu(){},
                    value: 'start'
                }}
                variant="underlined"
            />
            </div>
            <TextField
                className="feedback__input-big"
                type="text"
                label="Инпут"
                onChange={function iu(){}}
                placeholder="Инпут"
                value=""
                variant="outlined"
            />
            <div className="feedback__inputs">
                <TextField
                    className="feedback__input"
                    type="text"
                    label="Инпут"
                    onChange={function iu(){}}
                    placeholder="имя"
                    value=""
                    variant="outlined"
                />
                <TextField
                    className="feedback__input"
                    type="email"
                    label="Инпут"
                    onChange={function iu(){}}
                    placeholder="email"
                    value=""
                    variant="outlined"
                />
                <TextField
                    className="feedback__input"
                    type="tel"
                    label="Инпут"
                    onChange={function iu(){}}
                    placeholder="телефон"
                    value=""
                    variant="outlined"
                />
            </div>
            <Checkbox
                className="feedback__checkbox"
                label="Я прочитал(-а) и согласен (-на) с условиями обработки персональных данных MARKET"
                onChange={function iu(){}}
            />
            <Button
                className="feedback__button"
                color="primary"
                onClick={function iu(){}}
                >
                отправить
            </Button>
        </form>
        </section>
    )
}

export default Feedback