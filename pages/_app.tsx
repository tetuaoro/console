import "@styles/globals.scss"
import "@styles/header.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import { Nav } from "react-bootstrap"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-sm-stretch bg-primary">
      <header className="py-3 pb-sm-0 pt-sm-5 align-self-sm-start sticky-sm-top">
        <Nav as="ul" defaultActiveKey="/" className="flex-sm-column">
          <Nav.Item as="li" className="mt-3">
            <Link href="/">
              <Nav.Link className="d-flex text-white px-2" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="link-content-icon bi bi-heptagon" viewBox="0 0 16 16">
                  <path d="M7.779.052a.5.5 0 0 1 .442 0l6.015 2.97a.5.5 0 0 1 .267.34l1.485 6.676a.5.5 0 0 1-.093.415l-4.162 5.354a.5.5 0 0 1-.395.193H4.662a.5.5 0 0 1-.395-.193L.105 10.453a.5.5 0 0 1-.093-.415l1.485-6.676a.5.5 0 0 1 .267-.34L7.779.053zM2.422 3.813l-1.383 6.212L4.907 15h6.186l3.868-4.975-1.383-6.212L8 1.058 2.422 3.813z" />
                </svg>
                <span className="link-content-text ms-2">Contrat</span>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item as="li" className="mt-3">
            <Link href="#">
              <Nav.Link className="d-flex text-white px-2" eventKey="link-1" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="link-content-icon bi bi-triangle" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                </svg>
                <span className="link-content-text ms-2">Devis</span>
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
