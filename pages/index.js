import { Layout } from "@components/layout";
import Masthead from "@components/layout/masthead/Masthead";
import RegionList from "@components/services/RegionList";
import Head  from "next/head";


const WhyChooseUs = [
  {
    title: 'Uzman Ekibimiz',
    description: 'İstanbul Motosiklet Transfer, motosiklet taşıma konusunda uzmanlaşmış bir ekip tarafından yönetilmektedir. Motosikletiniz, deneyimli ve eğitimli profesyoneller tarafından güvenle taşınır.'
  },
  {
    title: 'Güvenli Taşıma',
    description: 'Motosikletiniz, özel olarak tasarlanmış taşıma araçlarımızda emniyetli bir şekilde yer alır. Titizlikle paketlenir ve seyahat süreci boyunca herhangi bir hasarı önlemek için özel önlemler alınır.'
  },
  {
    title: 'Hızlı & Zamanında Teslimat',
    description: 'İstanbul Motosiklet Transfer, zamanınızın değerli olduğunun farkındadır. Motosikletinizi belirttiğiniz adrese hızlı ve zamanında teslim etmek için çaba gösteriyoruz.'
  },
  {
    title: 'Fiyat/Performans Dengesi',
    description: 'Kaliteli hizmetimiz, uygun fiyatlarla sunulur. İstanbul Motosiklet Transfer, bütçenize uygun motosiklet taşıma çözümleri sunar.'
  }
];

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
  title: "İstanbul Şehir İçi, Şehirler Arası Motosiklet Transferi",
  desc:"İstanbul içi ve şehirler arası motosiklet transferi için bize ulaşın +90 531 500 20 67",
  keywords:"istanbul motosiktlet transfer, moto transfer, şehirler arası moto transfer, şehirler arası motosiklet transferi",
  url: "https://istanbulmotosiklettransfer.com/",
  canonical: "https://istanbulmotosiklettransfer.com/",
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
      <Masthead>
        <Masthead.Title>Transfer & Yol Yardım Hizmeti</Masthead.Title>
        <Masthead.Description>
          İstanbul'un karmaşık trafiği içinde motosikletinizle seyahat etmek zorlayıcı olabilir. Ancak, <strong>İstanbul Motosiklet Transfer</strong> olarak, motosikletinizi güvenli ve hızlı bir şekilde taşımak için buradayız. Sizin için özel olarak tasarlanmış hizmetlerimizle motosikletinizi güvenle yerine ulaştırıyoruz.
        </Masthead.Description>
      </Masthead>

      <div className="container p-4 lg:mx-auto 2xl:mx-auto xl:mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl lg:max-w-screen-2xl py-8 grid gap-4">
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-1 overflow-hidden rounded-xl bg-gradient-to-br from-[#004225] to-green-700">
          {Services.map((service, key) => (
            <div key={key} className="lg:min-h-[200px] 2xl:min-h-[200px] xl:min-h-[200px] lg:border-r-2 2xl:border-r-2 xl:border-r-2 border-white last:border-0 p-8 flex justify-center items-start content-center">
              <div className="grid gap-2">
                <div className="tracking-tighter	font-bold text-white text-2xl text-left">{service.title}</div>
                <p className="text-lg text-white/50">{service.description}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>

      <div className="container mx-auto max-w-screen-2xl py-8 grid gap-4 p-4">
        <h2 className="text-4xl font-bold tracking-tighter text-[#004225]">Neden bizi tercih etmelisiniz?</h2>
        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-4">
          {WhyChooseUs.map((item, key) => (
            <div key={key} className="min-h-[300px] bg-white p-8 rounded-xl flex justify-center items-center content-center">
              <div className="grid gap-4">
                <div className="font-bold tracking-tighter	 text-[#004225] text-3xl text-left">{item.title}</div>
                <p className="text-lg text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#004225] p-4">
        <div className="container mx-auto max-w-screen-2xl py-8 grid gap-4">
          <h2 className="text-4xl font-bold tracking-tighter text-white">Hizmet Verdiğimiz Bölgeler</h2>
          <RegionList/>
        </div>
      </div>
    </Layout>
  )
}