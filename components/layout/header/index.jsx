import Logo from "@components/shared/Logo";
import Navigation from "./_Navigation";
  
export default function Header() {
    return(
        <header className="mb-4">
            <div className="container max-w-screen-2xl mx-auto py-4 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-8 justify-between align-center items-center content-center">
                <Logo>
                    İstanbul Motosiklet Transfer | İstanbul Motosiklet Yol Yardım | İstanbul Motosiklet Transfer Hizmeti 
                </Logo>

                <Navigation>
                    <Navigation.Item url="/" title="İstanbul Motosiklet Transfer | Yol Yardım & Motosiklet Transfer">Ana Sayfa</Navigation.Item>
                    <Navigation.Item url="/hizmetlerimiz" title="Hizmetlerimiz | İstanbul Motosiklet Transfer">Hizmetlerimiz</Navigation.Item>
                    <Navigation.Item url="/iletisim" title="İletişim | İstanbul Motosiklet Transfer">İletişim</Navigation.Item>
                </Navigation>
            </div>
        </header>
    )  
}