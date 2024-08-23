import React, { useState } from "react";
import FeedbackMessage from "./ui/feedback-message/FeedbackMessage";
import classes from './Feedback.module.scss'
import { marketLink } from "./lib/consts";
import FeedbackForm from "./ui/feedback-form/FeedbackForm";


const Feedback = () : JSX.Element => {
    const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
    
    return(
        isMessageSent? <FeedbackMessage setIsMessageSent={setIsMessageSent}/> :
            <section className={classes["feedback"]}>
                <div className={classes["feedback__text"]}>
                Данный раздел необходим для получения прямой обратной связи от наших клиентов 
                и&nbsp;партнеров о том, каких виджетов в <a href={marketLink}>REON.Маркет</a> Вам не хватает и какой функционал необходимо добавить или доработать в том или ином виджете. Все свои идеи 
                и&nbsp;предложения вы можете оставить в этом разделе, нажав кнопку 
                “+&nbsp;СОЗДАТЬ&nbsp;ОБРАЩЕНИЕ”.
                </div>
                <h3 className={classes["feedback__title"]}>Форма создания обращения</h3>
                <FeedbackForm setIsMessageSent = {setIsMessageSent}/>
            </section>
    )
}

export default Feedback