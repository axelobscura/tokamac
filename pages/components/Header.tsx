import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Header() {
  return (
    <div className="container-fluid header">
      <nav className="navbar navbar-expand-lg">
        <Link href="/">
          <a className="navbar-brand">
            TOKAMAK
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link d-flex"><FiArrowRightCircle className="mr-3" /> WHAT IS IT?</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link d-flex"><FiArrowRightCircle /> HOW DOES IT WORK?</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link d-flex"><FiArrowRightCircle /> FUSION ENERGY</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}