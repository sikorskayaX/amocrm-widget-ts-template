import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackMessage from "./FeedbackMessage";

const Feedback = () : JSX.Element => {
    const [messageSent, setMessageSent] = useState<boolean>(false);
    
    return(
        <>
            {messageSent? <FeedbackMessage setMessageSent={setMessageSent}/> :
            <section className="feedback">
                <div className="feedback__text">
                Данный раздел необходим для получения прямой обратной связи от наших клиентов 
                и{'\u00A0'}партнеров о том, каких виджетов в <a href="https://reon.pro/marketplace">REON.Маркет</a> Вам не хватает и какой функционал необходимо добавить или доработать в том или ином виджете. Все свои идеи 
                и{'\u00A0'}предложения вы можете оставить в этом разделе, нажав кнопку 
                “+{'\u00A0'}СОЗДАТЬ{'\u00A0'}ОБРАЩЕНИЕ”.
                </div>
                <h3 className="feedback__title">Форма создания обращения</h3>
                <FeedbackForm setMessageSent = {setMessageSent}/>
            </section>
            }
        </>
    )
}

export default Feedback