import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackMessage from "./FeedbackMessage";
import { marketLink } from "../mocks";

const Feedback = () : JSX.Element => {
    const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
    
    return(
        isMessageSent? <FeedbackMessage setIsMessageSent={setIsMessageSent}/> :
            <section className="feedback">
                <div className="feedback__text">
                Данный раздел необходим для получения прямой обратной связи от наших клиентов 
                и&nbsp;партнеров о том, каких виджетов в <a href={marketLink}>REON.Маркет</a> Вам не хватает и какой функционал необходимо добавить или доработать в том или ином виджете. Все свои идеи 
                и&nbsp;предложения вы можете оставить в этом разделе, нажав кнопку 
                “+&nbsp;СОЗДАТЬ&nbsp;ОБРАЩЕНИЕ”.
                </div>
                <h3 className="feedback__title">Форма создания обращения</h3>
                <FeedbackForm setIsMessageSent = {setIsMessageSent}/>
            </section>
    )
}

export default Feedback