import react from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="logo">Changa</div>

            <div className="menu-toggle">
              <div id="menu-toggle-btn">
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="header">
              Text usijali hatukujudge! Hapo to Hapo to <br />
              yeehee!!
            </div>
            <div className="nav-container">
              <div className="nav">
                <div className="col-flex">
                  <div className="nav-logo">...ChangaBlogs/</div>
                  <div className="nav-socials">
                    <Link to={"#"}>Behance</Link>
                    <Link to={"#"}>Linktree</Link>
                    <Link to={"#"}>Github</Link>
                    <Link to={"#"}>Linkedin</Link>
                    <Link to={"#"}>Medium</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="nav-link">
                    <Link to={"#"}>Blogs</Link>
                    <div className="nav-item-wrapper"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="nav-link">
                    <Link to={"#"}>create_blog</Link>
                    <div className="nav-item-wrapper"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="nav-link">
                    <Link to={"#"}>UpdateBlogs</Link>
                    <div className="nav-item-wrapper"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="nav-link">
                    <Link to={"#"}>Read_Blogs</Link>
                    <div className="nav-item-wrapper"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="nav-link">
                    <Link to={"#"}>Contact</Link>
                    <div className="nav-item-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="nav-footer">
                <div className="links">
                  <Link>Privacy policy</Link>
                  <Link>Cookie Policy</Link>
                  <Link>Terms and conditions</Link>
                  <Link>Proxy provider</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
