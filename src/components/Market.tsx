import React, { ReactNode } from "react";

const Market = () : ReactNode => {
    return(
        <section className="market">
            <div className="market__block">
                <h1 className="market__title"></h1>
                <p className="market__text">Сделай работу в amoCRM быстрее и удобнее!</p>
                <p className="market__par">Все виджеты и разработки созданы по запросу клиентов и решают реальные проблемы отделов продаж.</p>
            </div>
            <div className="market__images-aside"></div>
            <h2 className="market__title-little">Платные по подписке</h2>
            <div className="market__images">
                <div className="market__images-block">
                    
                </div>
            </div>
        </section>
    )
}

export default Market
