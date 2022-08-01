import { join, resolve } from "path"
import { readdirSync } from "fs"
import { Document, Page, Text, Link, StyleSheet, Image } from "@react-pdf/renderer"

export interface ContratProps {
  clientName: string
  clientEmail: string
  subClientName: string
  header?: string
  title?: string
  author?: string
  proName?: string
  domainName?: string
  hosting?: { name: string; link?: string }
  contract?: {
    lifetime?: string
    startTime?: string
    payment?: string
    bonus?: string
  }
}

// https://business.lesechos.fr/outils-et-services/modeles-de-documents/modeles-commercial/10014720-contrat-de-conception-d-un-site-web-55562.php
const Contrat: React.FC<ContratProps> = (props) => {
  const author = props.author || "Rao Web"
  const pdfFiles = "files"
  const dir = resolve("./public", pdfFiles)
  const filenames = readdirSync(dir)
  const images = filenames.map((name) => join(dir, name))
  const sourceFile = images.find((img) => img.includes("logo.png")) || ""
  return (
    <Document language="fr">
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          {props.header || ""}
        </Text>
        <Text style={styles.title}>{props.title || "CONTRAT DE CONCEPTION D'UN SITE WEB"}</Text>
        <Text style={styles.author}>{author}</Text>
        <Image style={styles.image} src={sourceFile} />
        <Text style={styles.text}>
          <Text style={styles.bold}>{"Entre "}</Text>
          <Text style={styles.highLight}>{`${props.clientName}`}</Text>
          {` (ci-après appelé(e) « le Client ») `}
          <Text style={styles.bold}>{"et "}</Text>
          <Text style={styles.highLight}>{`${props.proName || author}`}</Text>
          {` (ci-après appelé(e) « le Concepteur », le Client et le Concepteur ci-après collectivement appelés « les Parties »).`}
        </Text>
        <Text style={styles.subtitle}>{"PRÉAMBULE"}</Text>
        <Text style={styles.paragraph}>{"CONSIDÉRANT QUE le Client désire confier au Concepteur la conception d'un site Web pour lui-même ou de l'un de ses Clients ;"}</Text>
        <Text style={styles.paragraph}>
          {"CONSIDÉRANT QUE le Concepteur accepte de fournir au Client les services de conception du site Web ci-après décrits : moyennant bonne et valable considération ;"}
        </Text>
        <Text style={styles.paragraph}>{"CONSIDÉRANT QUE les Parties désirent confirmer leur entente par écrit ;"}</Text>
        <Text style={styles.paragraph}>
          {"CONSIDÉRANT QUE les Parties ont la capacité et la qualité d'exercer tous les droits requis pour la conclusion et l'exécution de l'entente constatée dans le présent contrat ;"}
        </Text>
        <Text style={styles.subtitle}>{"EN CONSÉQUENCE DE CE QUI PRÉCÈDE, LES PARTIES CONVIENNENT DE CE QUI SUIT :"}</Text>
        <Text style={styles.article}>{"Article 1 - Préambule"}</Text>
        <Text style={styles.text}>{"Le préambule fait partie intégrante du présent contrat."}</Text>
        <Text style={styles.article}>{"Article 2 - Objet 2.1 Services"}</Text>
        <Text style={styles.paragraph}>{"Le Concepteur s'engage envers le Client à fournir les services suivants (ci-après appelés « les services ») :"}</Text>
        <Text style={styles.paragraph}>
          {"a) enregistrer au nom du Client le nom de domaine indiqué dans les spécifications qui se trouvent en annexe « "}
          <Link src="#domainName" style={styles.link}>
            {"nom de domaine"}
          </Link>
          {
            " » du présent contrat (ci-après appelées « les spécifications ») ou, en cas de non-disponibilité, tout autre nom de domaine enregistrable proposé par le Client, auprès de l'organisme responsable, relativement au site Web du Client (ci-après appelé « le site Web ») ;"
          }
        </Text>
        <Text style={styles.paragraph}>
          {"b) concevoir et développer le site Web du Client en fonction des spécifications qui figurent en annexe « "}
          <Link src="#spec" style={styles.link}>
            {"SPÉCIFICATIONS"}
          </Link>
          {" » du présent contrat, y compris, de façon non limitative :"}
        </Text>
        <Text style={styles.list}>{"- la conception de l'architecture d'information et de l'organisation du site Web, en plus de la navigation de celui-ci ;"}</Text>
        <Text style={styles.list}>
          {
            "- la mise en forme du contenu en fonction de l'information, de la documentation, des textes, dessins, icones, images, illustrations, photographies, tableaux et autres éléments fournis par le Client conformément au cahier des charges ou, en cas de non-disponibilité, tout autre document écrit et l'encodage des pages du site Web (ci-après collectivement appelés « les pages Web ») ;"
          }
        </Text>
        <Text style={styles.list}>
          {
            "- le pamétrage des composants logiciels requis, y compris, s'il y a lieu, et de façon non limitative, les scripts, applets, applications, programmes, fichiers exécutables, logiciels, moteurs de recherche, moteurs de gestion de base de données et composants multimedia  ;"
          }
        </Text>
        <Text style={styles.list}>{"- la conception visuelle des pages Web ;"}</Text>
        <Text style={styles.list}>
          {
            "- ne sont pas compris : la rédaction, la conception graphique et infographique des textes, dessins, icones, images, illustrations, photographies, tableaux et autres éléments visuels requis."
          }
        </Text>
        <Text style={styles.paragraph}>{"c) procéder aux tests de fonctionnement du site Web ;"}</Text>
        <Text style={styles.paragraph}>
          {"d) installer le site Web sur le serveur Web indiqué dans les spécifications « "}
          <Link src="#hosting" style={styles.link}>
            {"hébergement"}
          </Link>
          {" » ;"}
        </Text>
        <Text style={styles.paragraph}>{"e) fournir au Client l'information et la documentation relative au site Web sans leurs codes sources ;"}</Text>
        <Text style={styles.paragraph}>{"f) rendre tout autres services prévus au contrat ou dans les spécifications."}</Text>
        <Text style={styles.paragraph}></Text>
        <Text style={styles.paragraph}>
          {"Le Client comprend qu'il doit fournir au Concepteur le contenu graphique et infographique et que les codes sources relatives au site Web appartiennent au Concepteur."}
        </Text>
        <Text style={styles.article}>{"2.2 Délai de fourniture de services"}</Text>
        <Text style={styles.paragraph}>
          {
            "À compter du moment où le Client a fourni au Concepteur les éléments d'information et sous réserve de tout service additionnel requis par le Client après la signature du présent Client, le délai de fournisseur des services par le Concepteur est celui indiqué dans les spécifications ou tout autre délai convenu par les parties ultérieurement à la signature du présent contrat."
          }
        </Text>
        <Text style={styles.article}>{"Article 3 - Considération 3.1 Prix des services"}</Text>
        <Text style={styles.paragraph}>
          {"En considération de la fourniture des services, le Client doit payer au Concepteur le prix indiqué dans les spécifications ainsi que toutes les taxes applicables."}
        </Text>
        <Text style={styles.article}>{"3.2 Bonus de performance"}</Text>
        <Text style={styles.paragraph}>
          {"En considérant les spécifications - le Concepteur a droit au « "}
          <Link src="#bonus" style={styles.link}>
            {"bonus de performance"}
          </Link>
          {
            " » s'il respecte toutes et chacune des conditions attachées à l'octroi dudit bonus. Dans un tel cas, ledit bonus de performance est considéré comme faisant partie intégrante du prix des services."
          }
        </Text>
        <Text style={styles.article}>{"3.3 Dépenses encourues"}</Text>
        <Text style={styles.paragraph}>
          {"En plus du paiement du prix des services, le Client doit rembourser au Concepteur toutes les dépenses directes et indirectes encourues en liaison avec l'exécution du présent contrat ;"}
        </Text>
        <Text style={styles.article}>{"3.4 Facturation"}</Text>
        <Text style={styles.paragraph}>
          {
            "Toute facture du Client est envoyée au Concepteur à l'adresse indiquée dans les spécifications ou à toute adresse que le Concepteur a communiqué au Client après la signature du présent contrat."
          }
        </Text>
        <Text style={styles.article}>{"3.5 Termes et conditions de paiement"}</Text>
        <Text style={styles.paragraph}>
          {"En considérant les spécifications - le prix est payable par le Client au Concepteur selon les termes et conditions de paiement « "}
          <Link src="#payment" style={styles.link}>
            {"paiementClCo"}
          </Link>
          {" »."}
        </Text>
        <Text style={styles.article}>{"Article 4 - Dispositions particulières"}</Text>
        <Text style={styles.paragraph}>
          {"En considérant les spécifications - chacune des Parties reconnaît que la personne qu'elle désigne « "}
          <Link src="#subClientName" style={styles.link}>
            {"représentant(e)"}
          </Link>
          {
            " » la représente et a toute autorité pour poser les actes, procurations, prendre les décisions et donner les autorisations requises en vue de l'exécution du présent contrat et informer l'autre par tous les moyens."
          }
        </Text>
        <Text style={styles.paragraph}>
          {"Le Concepteur, s'il le souhaite et sans informer le Client, peut laisser une empreinte numérique, un lien url, qui redirige tous les utilisateurs vers le site Web de ce dernier."}
        </Text>
        <Text style={styles.article}>{"Article 5 - Limitation de responsabilité et garanties"}</Text>
        <Text style={styles.paragraph}>
          {
            "Le Concepteur s'engage à mettre en œuvre tous les moyens raisonnables à sa disposition pour que le site Web soit conçu de façon professionnelle et efficace, selon les règles généralement reconnues par l'industrie, et conformément aux spécifications."
          }
        </Text>
        <Text style={styles.paragraph}>
          {"En considérant les spécifications - le Client s'engage à être le seul responsable de toutes les formes d'utilisation du site Web avant ou après le « "}
          <Link src="#startTime" style={styles.link}>
            {"début du contrat"}
          </Link>
          {
            " » dans le cadre légal ou illégal : mise à jour, maintenance, propriété intellectuelle, litige, comparution au tribunal, bug, crash, piratage, fuite d'information, utilisation abusive ou malhonnête du site Web ...etc."
          }
        </Text>
        <Text style={styles.article}>{"Article 6 - Propriété intellectuelle"}</Text>
        <Text style={styles.paragraph}>{"Le Client reste propriétaire des droits intellectuels relatifs aux éléments du site Web (marques, logos, dessins, etc.) confiés à l'éditeur."}</Text>
        <Text style={styles.paragraph}>
          {
            "Les éléments doivent être entièrement originaux et n'enfreindre aucun droit d'auteur, aucune marque de commerce et aucun autre droit, titre ou intérêt de propriété intellectuelle, appartenant à toute tierce personne."
          }
        </Text>
        <Text style={styles.article}>{"Article 7 - Contrefaçon"}</Text>
        <Text style={styles.paragraph}>
          {"À tout instant chacune des parties sera tenue d'informer l'autre sur toute contrefaçon relative au site Web et aux éléments du site Web dont elle aura eu connaissance."}
        </Text>
        <Text style={styles.article}>{"Article 8 - Durée du contrat"}</Text>
        <Text style={styles.paragraph}>
          {"En considérant les spécifications - ce contrat est passé pour une durée de « "}
          <Link src="#lifetime" style={styles.link}>
            {"durée du contrat"}
          </Link>
          {" » et prendra effet le « "}
          <Link src="#startTime" style={styles.link}>
            {"début du contrat"}
          </Link>
          {" »."}
        </Text>
        <Text style={styles.article}>{"Article 9 - Expiration du contrat"}</Text>
        <Text style={styles.paragraph}>
          {
            "Le Concepteur sera autorisé à mettre fin à ce contrat par lettre écrite recommandée ou numérique avec accusé de réception, immédiatement sans délai quand il le souhaite et sans l'accord du Client."
          }
        </Text>
        <Text style={styles.article}>{"Article 10 - Loi applicable. Texte original"}</Text>
        <Text style={styles.paragraph}>
          {"Le contrat est régi par la loi du pays où le Concepteur a son siège social. Le texte écrit en langue française du présent contrat fait foi comme texte original."}
        </Text>
        <Text style={styles.article}>{"Article 11 - Compétence"}</Text>
        <Text style={styles.paragraph}>
          {"Toutes contestations qui découlent du présent contrat ou qui s'y rapportent seront tranchées définitivement par un tribunal compétent du pays du siège du Concepteur."}
        </Text>
        <Text style={styles.abvsign}>{"Fait le _____________________ à _____________________ en (1) un exemplaire."}</Text>
        <Text style={styles.sign}>{"Le Concepteur                               Le Client"}</Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          {props.header || ""}
        </Text>
        <Text id="annexe" style={styles.title}>
          ANNEXE
        </Text>
        <Text id="author" style={styles.author}>
          {author}
        </Text>
        <Text id="spec" style={styles.subtitle}>
          {"SPÉCIFICATIONS"}
        </Text>
        <Text id="subClientName" style={styles.list}>
          {"- « représentant(e) » du Client : "}
          <Text style={styles.highLight}>{props.subClientName || "non renseigné"}</Text>
        </Text>
        <Text id="domainName" style={styles.list}>
          {"- nom de domaine : "}
          <Text style={styles.highLight}>{props.domainName || "non renseigné"}</Text>
        </Text>
        <Text id="hosting" style={styles.list}>
          {"- hébergement : "}
          <Text style={styles.highLight}>
            <Link src={props.hosting?.link || ""}>{props.hosting?.name || "non renseigné"}</Link>
          </Text>
        </Text>
        <Text id="lifetime" style={styles.list}>
          {"- durée du contrat : "}
          <Text style={styles.highLight}>{props.contract?.lifetime || "indéterminée"}</Text>
        </Text>
        <Text id="startTime" style={styles.list}>
          {"- début du contrat : "}
          <Text style={styles.highLight}>{props.contract?.startTime || "non renseigné"}</Text>
        </Text>
        <Text id="payment" style={styles.list}>
          {"- paiementClCo : "}
          <Text style={styles.highLight}>{props.contract?.payment || "non renseigné"}</Text>
        </Text>
        <Text id="bonus" style={styles.list}>
          {"- bonus de performance : "}
          <Text style={styles.highLight}>{props.contract?.bonus || "non renseigné"}</Text>
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  article: {
    fontSize: 14,
    margin: 9,
    fontFamily: "Times-Bold",
  },
  bold: {
    fontFamily: "Times-Bold",
  },
  highLight: {
    backgroundColor: "#E2F8F9",
  },
  link: {
    fontSize: 14,
    textDecoration: "none",
    fontFamily: "Times-Italic",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  abvsign: {
    marginTop: 50,
    marginBottom: 12,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  sign: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  paragraph: {
    margin: 6,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  list: {
    margin: 3,
    fontSize: 14,
    textIndent: 10,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
})

export default Contrat
