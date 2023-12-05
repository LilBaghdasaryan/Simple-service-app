import '../Styles/main.css';

const AppHome = () => {
    return <div className="main-container">
        <div style={{width: 'min-content', textAlign: 'start'}}>
            <div className='t-large font-inter'>Зарабатывайте больше</div>
            <div className='t-large font-inter t-main-color'>с WELBEX</div>
            <div className='t-bold font-montserrrat' style={{marginTop: "20px"}}>Развиваем и контролируем продажи за вас</div>
        </div>
        <div >
                <div className='right-container' style={{position: "relative"}}>
                <div>Вместе с <span className='t-main-color info-text'>бесплатной консультацией</span>  мы дарим:</div>
                    <div className='right-container_item'>
                        <div><span className='gradient-line main-color'></span>Виджеты</div>
                        <div>30 готовых решений</div>
                    </div>
                    <div className='right-container_item'>
                        <div><span className='gradient-line main-color'></span>Dashboard</div>
                        <div>с показателями вашего бизнеса</div>
                    </div>
                    <div className='right-container_item'>
                        <div><span className='gradient-line main-color'></span>Skype Аудит</div>
                        <div>отдела продаж и CRM системы</div>
                    </div>
                    <div className='right-container_item'>
                        <div><span className='gradient-line main-color'></span>35 дней</div>
                        <div>использования CRM</div>
                    </div>
                    <div>
                    <button className='button-main t-medium font-inter'>Получить консультацию</button>
                    </div>
                    
                </div>
        </div>
    </div>
}
export default AppHome