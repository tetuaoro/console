import { render, Mjml, MjmlHead, MjmlTitle, MjmlPreview, MjmlBody, MjmlSection, MjmlColumn, MjmlImage, MjmlText, MjmlGroup } from "mjml-react"

const text = `Ia ora na,
Vous trouverez ci-joint le contrat pour la conception d'un site web sur-mesure. Ceci est a retourné signé et daté. Si vous n'acceptez pas les termes du contrat, vous pouvez très bien
faire parvenir vos modifications ou nous contactez directement par mail ou par téléphone.
`

const MJML = () => {
  const baseUrl = process.env.BASEURL || ""
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Contrat de conception de site web</MjmlTitle>
        <MjmlPreview>{text}</MjmlPreview>
      </MjmlHead>
      <MjmlBody backgroundColor="#ffffff" font-family="helvetica">
        <MjmlSection fullWidth backgroundColor="#011252">
          <MjmlColumn>
            <MjmlText fontSize="25px" align="center" color="white">
              Contrat de conception de site web
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection fullWidth>
          <MjmlColumn>
            <MjmlImage src={`${baseUrl}/files/raocloud.png`} />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingTop="25px" paddingBottom="25px">
          <MjmlColumn>
            {/* <MjmlText fontSize="16px">Ia ora na,</MjmlText> */}
            <MjmlText fontSize="16px">
              Ia ora na,
              <br />
              <br />
              Vous trouverez ci-joint le contrat pour la conception d'un site web sur-mesure. Ceci est a retourné signé et daté. Si vous n'acceptez pas les termes du contrat, vous pouvez
              faire parvenir vos modifications ou nous contactez directement par mail ou par téléphone.
              <br />
              <br />
              Cordialement,
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        {/* Signature */}
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlGroup>
            <MjmlColumn verticalAlign="middle">
              <MjmlImage src={`${baseUrl}/files/logo.png`} />
            </MjmlColumn>
            <MjmlColumn verticalAlign="middle" borderLeft="solid 4px black">
              <MjmlText fontSize="20px">
                Tetuaoro LENOIR
                <br />
                <span style={{ color: "#5e5e5e", fontSize: "16px" }}>Rao Nagos - Service Rao Web</span>
                <br />
                <a style={{ color: "blue", fontSize: "16px" }} href="mailto:contact@rao-nagos.pf">
                  tetuaoro.lenoir@rao-nagos.pf
                </a>
                <br />
                <a style={{ color: "blue", fontSize: "16px" }} href="tel:+68987323795">
                  +689 87323795
                </a>
              </MjmlText>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
        {/* Fin */}
        <MjmlSection fullWidth backgroundColor="#afafaf">
          <MjmlColumn>
            <MjmlText fontSize="12px" color="#dfdfdf">
              Si ce mail ne vous est pas concerné, veuillez simplement ignorer ce message.
            </MjmlText>
            <MjmlText fontSize="12px" color="#dfdfdf">
              #Rao Nagos - N° T.A.H.I.T.I D75938 - Polynésie Française Tahiti Papeete
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  )
}

const { html, errors } = render(<MJML />, { validationLevel: "soft" })

export default {
  html,
  errors,
  text,
}
