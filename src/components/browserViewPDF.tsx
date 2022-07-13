import { PDFViewer } from "@react-pdf/renderer"
import ContratDocumentPDF, { ContratProps } from "./contrat"

interface PDFViewerProps {
  width?: number | string
  height?: number | string
  // style?: Style | Style[];
  className?: string
  // children?: React.ReactElement<DocumentProps>;
  // innerRef?: React.Ref<HTMLIFrameElement>;
  showToolbar?: boolean
  document: ContratProps
}

const BrowserViewPDF: React.FC<PDFViewerProps> = (props) => (
  <PDFViewer {...Object.fromEntries(Object.entries(props).filter(([key, _value]) => key != "document"))}>
    <ContratDocumentPDF {...props.document} />
  </PDFViewer>
)

export default BrowserViewPDF
