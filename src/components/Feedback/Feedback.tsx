import React from "react";
import FeedbackForm from "./FeedbackForm";

const Feedback = () : JSX.Element => {
    return(
        <section className="feedback">
            <div className="feedback__text">
            Данный раздел необходим для получения прямой обратной связи от наших клиентов 
            и партнеров о том, каких виджетов в <a>REON.Маркет</a> Вам не хватает и какой функционал необходимо добавить или доработать в том или ином виджете. Все свои идеи 
            и предложения вы можете оставить в этом разделе, нажав кнопку 
            “+ СОЗДАТЬ ОБРАЩЕНИЕ”.
            </div>
            <h3 className="feedback__title">Форма создания обращения</h3>
            <FeedbackForm/>
        </section>
    )
}

export default Feedback