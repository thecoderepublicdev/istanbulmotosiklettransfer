import { Layout } from "@components/layout";
import ContactChannelBox from "@components/layout/contact/ContactChannelBox";
import Container from "@components/shared/Container";
import Grid from "@components/shared/Grid";
import Title from "@components/shared/Title";
import { ContactChannels } from "@data/ContactChannels";

export default function ContactPage() {
    return(
        <Layout>
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
        </Layout>
    )
}