import Router from "@/router";
import {App as AntdApp} from 'antd';
import {Helmet} from 'react-helmet-async';
import Logo from '@/assets/images/logo.png';

function App() {
    return (
        <>
            <AntdApp>

                <Helmet>
                    <title>demo react</title>
                    <link rel="icon" href={Logo}/>
                </Helmet>

                <Router/>
            </AntdApp>
        </>
    )
}

export default App
