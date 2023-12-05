import { TelegramIcon, ViberIcon, WhatsAppIcon } from "../Assets/icons";


const Footer =  () =>  {
    return (
        <footer className="t-medium-regular font-inter">
            <div style={{textAlign: 'start'}} className="footer-content">
                <div className="sub-title footer-content">О компании</div>
                <div>Партнёрская программа</div>
                <div>Вакансии</div>
            </div>
            <div style={{textAlign: 'start'}} className="footer-content">
                <div className="sub-title footer-content">Меню</div>
                <div className="footer__menu">
                <div>Расчёт стоимости</div>
                <div>Услуги</div>
                <div>Виджеты</div>
                <div>Интеграции</div>
                <div>Наши клиенты</div>
                <div>Расчёт стоимости</div>
                <div>Услуги</div>
                <div>Виджеты</div>
                <div>Интеграции</div>
                <div>Наши клиенты</div>
                </div>
            </div>
            <div className='footer-contacts footer-content'>
                <div className="sub-title footer-content">Контакты</div>
                <p>+7 555 555-55-55</p>
                <div>
                    <TelegramIcon />
                    <ViberIcon />
                    <WhatsAppIcon />
                </div>
                <address className="t-medium-regular">Москва, Путевой проезд 3с1, к 902</address>
                <div className="t-small-regular footer-content">
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <p>Политика конфиденциальности</p>
                </div>
                </div>
        </footer>
    );
}
export default Footer