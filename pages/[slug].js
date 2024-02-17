import React from "react";
import { Layout } from "@components/layout";
import Container from "@components/shared/Container";
import Title from "@components/shared/Title";
import ContactChannelBox from "@components/layout/contact/ContactChannelBox";
import Head  from "next/head";
import Turkey from "@data/Turkey";

export async function getStaticPaths() {
    // Define the available slugs dynamically or statically
    let paths = [];

   await Object.entries(Turkey).map(([slug,region]) => { 
        paths.push(`/istanbul-${slug}-motosiklet-transfer-hizmeti`);
    })

  
    return {
      paths,
      fallback: false, // Set to 'blocking' if you want to handle non-existent slugs on the server
    };
  }

export async function getStaticProps({ params }) {
    const { slug } = params;
    const cities = slug.replace('/','').split("-").slice(0,2);
    const realRoute = `${cities[0]}-${cities[1]}-motosiklet-transfer-hizmeti`;
    if (slug != realRoute) {
      return {
        notFound: true,
      };
    }
  
    // Sayfa için gerekli verileri hazırlayın.
    const RegionTitle = `${Turkey[cities[0]] ?? ''} - ${Turkey[cities[1]] ?? ''}`;
    const title = `${RegionTitle} Motosiklet Transferi`;
    const desc = `İstanbul Motosiklet Transfer olarak ${RegionTitle} arası tüm motosiklet transferlerinizi sigortalı bir biçimde gerçekleştiriyoruz.`;
    const keywords = `${RegionTitle} motosiklet transferi, istanbul motosiklet transfer, motosiklet transfer`;
  
    return {
      props: {
        data: {
            RegionTitle,
            title,
            desc,
            keywords,
            realRoute
        }
      },
    };
  }
  

export default function ServicesTransferSlugHandler({ data }) {


    return(
        <Layout>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.desc}/>
                <meta name="keywords" content={data.keywords}/>
                <meta name="revisit-after" content="3 days"/>
                <meta http-equiv="Pragma" content="public"/>
                <meta http-equiv="Expires" content="7"/>
                <meta http-equiv="Cache-Control" content="max-age=604800, public"/>
                <meta name="apple-touch-fullscreen" content="YES"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta property="og:url" content={`https://istanbulmotosiklettransfer.com/${data.realRoute}`}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={data.title}/>
                <meta property="og:description" content={data.desc}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:domain" content="istanbulmotosiklettransfer.com"/>
                <meta name="twitter:url" content={`https://istanbulmotosiklettransfer.com/${data.realRoute}`}/>
                <link rel="canonical" href={`https://istanbulmotosiklettransfer.com/${data.realRoute}`}/>

            </Head>
            <Container>
                <Title level="h1">{`${data.RegionTitle} Motosiklet Transferi`}</Title>
                <div className="grid grid-cols-12 gap-4">
                    <section className="grid gap-4 col-span-9 p-4">
                        <p className="text-lg text-black/75">
                            {data.RegionTitle} motorsiklet transferi, motosiklet sahipleri için önemli bir konudur. Bu süreci sorunsuz ve güvenli bir şekilde tamamlamak, doğru adımları atmakla mümkündür. İşte {data.RegionTitle} motorsiklet transferi hakkında bilmeniz gerekenler ve anahtar kelimelerle SEO uyumlu bir şekilde önemli ipuçları.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Profesyonel {data.RegionTitle} Motorsiklet Taşıma Hizmetleri</h2>
                        <p className="text-lg text-black/75">
                            {data.RegionTitle} arasında uzmanlaşmış profesyonel motorsiklet taşıma hizmetleri, güvenli ve hızlı transfer için en ideal çözümdür. Bu hizmetler, tecrübeli personel ve özel ekipmanlar kullanarak motorsikletinizi güvenle taşır. Ayrıca, sigortalı taşıma seçenekleriyle motorsikletinizi olası risklere karşı koruma altına alabilirsiniz.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">{data.RegionTitle} Motorsiklet Transferi İçin Uygun Fiyatlar</h2>
                        <p className="text-lg text-black/75">
                            {data.RegionTitle} motorsiklet transferi fiyatları, farklı taşıma firmaları arasında değişiklik gösterir. Bu nedenle, uygun fiyatları karşılaştırmak için biraz araştırma yapmak önemlidir. Ancak, sadece uygun fiyat değil, aynı zamanda kaliteli hizmet sunan bir firmayı tercih etmek, motorsikletinizin güvenli bir şekilde taşınmasını sağlar.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Sigortalı {data.RegionTitle} Motorsiklet Transferi</h2>
                        <p className="text-lg text-black/75">
                            Taşıma sürecinde oluşabilecek potansiyel hasarları karşılamak için sigortalı bir {data.RegionTitle} motorsiklet transferi tercih etmek önemlidir. Bu, motorsiklet sahiplerine ek bir güvenlik sağlar ve transfer sürecini endişesiz hale getirir.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Hızlı ve Güvenli {data.RegionTitle} Motorsiklet Transferi İle Zaman Kazanın</h2>
                        <p className="text-lg text-black/75">
                            Zaman, motorsiklet sahipleri için önemlidir. Hızlı ve güvenli bir {data.RegionTitle} motorsiklet transferi, zamandan tasarruf sağlar ve motorsikletinizi istediğiniz yerde hızla kullanmanıza olanak tanır.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">{data.RegionTitle} Motorsiklet Transferi İçin Gerekli Belgeler</h2>
                        <p className="text-lg text-black/75">
                        Motorsiklet transferi sırasında gereken belgeleri önceden hazırlamak, süreci hızlandırır ve aksaklıkları önler. Araç ruhsatı, sigorta belgeleri ve kimlik gibi evrakları eksiksiz bir şekilde temin etmek önemlidir.

                        {data.RegionTitle} motorsiklet transferi, doğru tercihlerle güvenli ve hızlı bir şekilde gerçekleştirilebilir. Profesyonel taşıma hizmetleri, uygun fiyatlar, sigortalı transfer seçenekleri ve gerekli belgelerin eksiksiz hazırlanması, bu süreci kolaylaştırır. Güvenli ve hızlı bir {data.RegionTitle} motorsiklet transferi ile yeni yolculuklara hazırlıklı adımlar atabilirsiniz.
                        </p>
                    </section>

                    <div className="col-span-3">
                        <ContactChannelBox>
                            <ContactChannelBox.Icon>call</ContactChannelBox.Icon>
                            <ContactChannelBox.Title>Bizi Arayın</ContactChannelBox.Title>
                            <ContactChannelBox.Description>+90 531 500 20 67</ContactChannelBox.Description>
                            <ContactChannelBox.Button url="tel:+905315002067">Şimdi Ara</ContactChannelBox.Button>
                        </ContactChannelBox>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}