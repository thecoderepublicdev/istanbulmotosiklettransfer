import React from "react";
import { Layout } from "@components/layout";
import Container from "@components/shared/Container";
import Title from "@components/shared/Title";
import { SEOArticles } from "@data/SEOArticles";
import { useRouter } from "next/router";
import { useRef } from "react";
import ContactChannelBox from "@components/layout/contact/ContactChannelBox";
import Head  from "next/head";


export default function ServicesTransferSlugHandler() {
    const router = useRouter();
    const contentRef = useRef()
    const currentPageSlug = router.query.region;
    const article = SEOArticles.find(article => article['title'] == currentPageSlug)
    const RegionTitle = router?.query?.region;
    const title = `${RegionTitle} Motosiklet Transferi | İstanbul Motosiklet Transfer`;
    const desc = `İstanbul Motosiklet Transfer olarak ${RegionTitle} arası tüm motosiklet transferlerinizi sigortalı bir biçimde gerçekleştiriyoruz.`
    const keywords = `${RegionTitle} motosiklet transferi, istanbul motosiklet transfer, motosiklet transfer`

    return(
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <Container>
                <Title level="h1">{`${RegionTitle} Motosiklet Transferi`}</Title>
                <div className="grid grid-cols-12 gap-4">
                    <section className="grid gap-4 col-span-9 p-4">
                        <p className="text-lg text-black/50">
                            {RegionTitle} motorsiklet transferi, motosiklet sahipleri için önemli bir konudur. Bu süreci sorunsuz ve güvenli bir şekilde tamamlamak, doğru adımları atmakla mümkündür. İşte {RegionTitle} motorsiklet transferi hakkında bilmeniz gerekenler ve anahtar kelimelerle SEO uyumlu bir şekilde önemli ipuçları.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Profesyonel {RegionTitle} Motorsiklet Taşıma Hizmetleri</h2>
                        <p className="text-lg text-black/50">
                            {RegionTitle} arasında uzmanlaşmış profesyonel motorsiklet taşıma hizmetleri, güvenli ve hızlı transfer için en ideal çözümdür. Bu hizmetler, tecrübeli personel ve özel ekipmanlar kullanarak motorsikletinizi güvenle taşır. Ayrıca, sigortalı taşıma seçenekleriyle motorsikletinizi olası risklere karşı koruma altına alabilirsiniz.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">{RegionTitle} Motorsiklet Transferi İçin Uygun Fiyatlar</h2>
                        <p className="text-lg text-black/50">
                            {RegionTitle} motorsiklet transferi fiyatları, farklı taşıma firmaları arasında değişiklik gösterir. Bu nedenle, uygun fiyatları karşılaştırmak için biraz araştırma yapmak önemlidir. Ancak, sadece uygun fiyat değil, aynı zamanda kaliteli hizmet sunan bir firmayı tercih etmek, motorsikletinizin güvenli bir şekilde taşınmasını sağlar.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Sigortalı {RegionTitle} Motorsiklet Transferi</h2>
                        <p className="text-lg text-black/50">
                            Taşıma sürecinde oluşabilecek potansiyel hasarları karşılamak için sigortalı bir {RegionTitle} motorsiklet transferi tercih etmek önemlidir. Bu, motorsiklet sahiplerine ek bir güvenlik sağlar ve transfer sürecini endişesiz hale getirir.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">Hızlı ve Güvenli {RegionTitle} Motorsiklet Transferi İle Zaman Kazanın</h2>
                        <p className="text-lg text-black/50">
                            Zaman, motorsiklet sahipleri için önemlidir. Hızlı ve güvenli bir {RegionTitle} motorsiklet transferi, zamandan tasarruf sağlar ve motorsikletinizi istediğiniz yerde hızla kullanmanıza olanak tanır.
                        </p>
                        <h2 className="font-bold text-3xl tracking-tighter">{RegionTitle} Motorsiklet Transferi İçin Gerekli Belgeler</h2>
                        <p className="text-lg text-black/50">
                        Motorsiklet transferi sırasında gereken belgeleri önceden hazırlamak, süreci hızlandırır ve aksaklıkları önler. Araç ruhsatı, sigorta belgeleri ve kimlik gibi evrakları eksiksiz bir şekilde temin etmek önemlidir.

                        {RegionTitle} motorsiklet transferi, doğru tercihlerle güvenli ve hızlı bir şekilde gerçekleştirilebilir. Profesyonel taşıma hizmetleri, uygun fiyatlar, sigortalı transfer seçenekleri ve gerekli belgelerin eksiksiz hazırlanması, bu süreci kolaylaştırır. Güvenli ve hızlı bir {RegionTitle} motorsiklet transferi ile yeni yolculuklara hazırlıklı adımlar atabilirsiniz.
                        </p>
                    </section>

                    <div className="col-span-3">
                        <ContactChannelBox>
                            <ContactChannelBox.Icon>call</ContactChannelBox.Icon>
                            <ContactChannelBox.Title>Bizi Arayın</ContactChannelBox.Title>
                            <ContactChannelBox.Description>+90 531 500 20 67</ContactChannelBox.Description>
                            <ContactChannelBox.Button url="tel:+90 531 500 20 67">Şimdi Ara</ContactChannelBox.Button>
                        </ContactChannelBox>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}