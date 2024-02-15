import dynamic from 'next/dynamic';
import { DM_Sans } from 'next/font/google';

const PrimaryFont = DM_Sans({subsets: ['latin']});

const Header = dynamic(() => import('./header/index'), {
    loading: () => (<p>Yükleniyor</p>)
});
const Footer = dynamic(() => import('./footer/index'), {
    loading: () => <p>Yükleniyor...</p>
});

function Layout({children}) {
    return(
        <main className={`bg-[#F5F5DC]/50 ${PrimaryFont.className}`}>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}

export {
    Layout
}