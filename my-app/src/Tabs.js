import React, {useState} from 'react';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import './App.css';

const Tabs = () => {
    const [login, setLogin] = useState(true)

    return (
        <div className='App'>
            <div className='Forms'>
                <div className='Forms-btns'>
                    <button 
                        className={`F-btn ${login ? 'activeBtn' : ''}`}
                        onClick={() => setLogin(!login)}>ورود
                    </button>
                    <button 
                        className={`F-btn ${login ? '' : 'activeBtn'}`}
                        onClick={() => setLogin(!login)}>ثبت نام
                    </button>
                </div>
                {login ? <TabContent1 /> : <TabContent2 />}
            </div>
        </div>
    );
}

export default Tabs;