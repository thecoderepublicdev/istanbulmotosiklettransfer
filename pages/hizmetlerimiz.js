import { Layout } from "@components/layout";

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

export default function App() {
  return(
    <Layout>
      <div className="container p-4 lg:mx-auto 2xl:mx-auto xl:mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl lg:max-w-screen-2xl py-8 grid gap-4">
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