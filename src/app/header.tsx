
import Link from 'next/link';
import Image from 'next/image';
import { getMenuItems } from './lib/wordpress';




export default async function Header() {
    const menu = await getMenuItems();

  return (
    <>
      {/* Header Top */}
      <div className="header_top_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header_top_main">
                <div className="call_text">
                  <a href="#"><span className="padding_right0"><i className="fa fa-phone" aria-hidden="true"></i></span> Call : +01 1234567890</a>
                </div>
                <div className="call_text_2">
                  <a href="#"><span className="padding_right0"><i className="fa fa-envelope" aria-hidden="true"></i></span> demo@gmail.com</a>
                </div>
                <div className="call_text_1">
                  <a href="#"><span className="padding_right0"><i className="fa fa-map-marker" aria-hidden="true"></i></span> Location</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/home">
            <Image
                src="/images/logo.png"
                alt="Logo"
                    width={150}
                            height={40}
                     style={{ margin: 'auto' }}
                    />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
             <Link className="nav-link" href="/home">
                  Home
            </Link>
         </li>
                 {menu.map((item) => (
                  <li key={item.ID} className="nav-item">
                    <Link className="nav-link" href={item.url}>{item.title}</Link>
                  </li>
                ))}
                 <li className="nav-item">
             <Link className="nav-link" href="/trips">
                  Trips
            </Link>
         </li>
              </ul>
            </div>
          </nav>

          {/* Custom Menu */}
          <div className="custom_bg">
            <div className="custom_menu">
              <ul>
                <li className="nav-item">
             <Link href="/home" className="nav-link" >
                  Home
            </Link>
         </li>
                {menu.slice(2).map((item) => (
                <li key={item.ID} className="nav-item">
             <Link className="nav-link" href={item.url}>
          <span dangerouslySetInnerHTML={{ __html: item.title }} />
            </Link>
         </li>
          ))}
          <li className="nav-item">
             <Link href="/trips" className="nav-link" >
                  Trips
            </Link>
         </li>
              </ul>
            </div>
            <div className="search_btn">
              <ul>
                <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="signup_text">Login</span></a></li>
                <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="signup_text">Sign Up</span></a></li>
                <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
