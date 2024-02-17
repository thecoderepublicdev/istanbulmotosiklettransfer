import { Layout } from "@components/layout";
import ContactChannelBox from "@components/layout/contact/ContactChannelBox";
import Container from "@components/shared/Container";
import Grid from "@components/shared/Grid";
import Title from "@components/shared/Title";
import { ContactChannels } from "@data/ContactChannels";
import Head  from "next/head";

const Seo = {
    title: "İletişim | İstanbul Motosiklet Transfer",
    desc:"şehirler arası ve İstanbul içi motosiklet transferi için bize ulaşın +90 531 500 20 67",
    keywords:"istanbul motosiktlet transfer, moto transfer, şehirler arası moto transfer, şehirler arası motosiklet transferi",
    url: "https://istanbulmotosiklettransfer.com/iletisim",
    canonical: "https://istanbulmotosiklettransfer.com/iletisim",
  }

export default function ContactPage() {
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
            <Container gap={4}>
                <Title level="h1">Bizimle iletişime geçin</Title>

                <Grid cols={3} mobile={1} gap={4}>
                    {ContactChannels.map((channel, key) => (
                        <ContactChannelBox key={key}>
                            <ContactChannelBox.Icon>{channel.icon}</ContactChannelBox.Icon>
                            <ContactChannelBox.Title>
                                {channel.title}
                            </ContactChannelBox.Title>
                            <ContactChannelBox.Description>
                                {channel.description}
                            </ContactChannelBox.Description>
                            <ContactChannelBox.Button url={channel.button.url} target={channel.button.target}>
                                {channel.button.label}
                            </ContactChannelBox.Button>
                        </ContactChannelBox>
                    ))}
                </Grid>
            </Container>
            <div className="mb-10"></div>
        </Layout>
    )
}