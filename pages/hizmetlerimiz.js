import { Layout } from "@components/layout";
import Head  from "next/head";
import Title from "@components/shared/Title";

const Services = [
  {
    title: 'İstanbul içi motosiklet transferi',
    description: 'İstanbul içerisinde günün dilediğiniz saatinde hizmetinizdeyiz.'
  },
  {
    title: 'Şehirlerarası motosiklet taşıma',
    description: "Türkiye'nin dört bir köşesinde karşılıklı olarak transfer hizmeti sunmaktayız."
  },
  {
    title: 'Hızlı ve güvenli teslimat',
    description: 'Tüm transferlerimiz sigorta kapsamında yapılmaktadır.'
  },
  {
    title: 'Uygun fiyat garantisi',
    description: 'Rakiplerimizin arasında en uygun fiyatlısı ve en profesyoneliyiz.'
  },
]
const Seo = {
  title: "Hizmetlerimiz | İstanbul Motosiklet Transfer",
  desc:"Uygun fiyatlı İstanbul içi - şehirlerarası hızlı ve güvenli bir teslimat mı arıyorsunuz? Bize ulaşın +90 531 500 20 67",
  keywords:"istanbul motosiklet transfer, moto transfer, şehirler arası moto transfer, şehirler arası motosiklet transferi",
  url: "https://istanbulmotosiklettransfer.com/hizmetlerimiz",
  canonical: "https://istanbulmotosiklettransfer.com/hizmetlerimiz",
}
export default function App() {
  return( 
    <Layout>
      <Head>
        <title>{Seo.title}</title>
        <meta name="description" content={Seo.desc}/>
        <meta name="keywords" content={Seo.keywords}/>
        <meta name="revisit-after" content="3 days"/>
        <meta http-equiv="Pragma" content="public"/>
        <meta http-equiv="Expires" content="7"/>
        <meta http-equiv="Cache-Control" content="max-age=604800, public"/>
        <meta name="apple-touch-fullscreen" content="YES"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta property="og:url" content={Seo.url}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={Seo.title}/>
        <meta property="og:description" content={Seo.desc}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:domain" content="istanbulmotosiklettransfer.com"/>
        <meta name="twitter:url" content={Seo.url}/>
        <link rel="canonical" href={Seo.url}/>
      </Head>
      <div className="container p-4 lg:mx-auto 2xl:mx-auto xl:mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl lg:max-w-screen-2xl py-8 grid gap-4">
        <Title level="h1">Hizmetlerimiz</Title>
        <div className="grid lg:grid-cols-2 gap-4 overflow-hidden">
          {Services.map((service, key) => (
            <div key={key} className="lg:min-h-[200px] 2xl:min-h-[200px] xl:min-h-[200px] p-8 flex justify-start items-center content-center rounded-xl bg-gradient-to-tr from-[#004225] to-green-700">
              <div className="grid gap-2">
                <h3 className="tracking-tighter	font-bold text-white lg:text-4xl text-2xl text-left">{service.title}</h3>
                <p className="text-lg text-white/50">{service.description}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </Layout>
  )
}