import { Component } from "react";

class Team extends Component
{
    render()
    {
        return <>
        <header className="header_section innerpage_header">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <a className="navbar-brand" href="index.html">
          <span>
            Healet
          </span>
        </a>
        <div className="" id="">

          <div className="custom_menu-btn">
            <button onclick="openNav()">
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="shop.html">Shop</a>
                <a href="blog.html">Blog</a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </header>
  {/* <!-- end header section --> */}

  {/* <!-- blog section --> */}

  <section className="blog_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Latest From Blog
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src="images/b1.jpg" alt=""/>
              <h4 className="blog_date">
                14 <br/>
                July
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Look even slightly believable. If you are
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src="images/b2.jpg" alt=""/>
              <h4 className="blog_date">
                15 <br/>
                July
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Anything embarrassing hidden in the middle
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end blog section --> */}

  {/* <!-- info section --> */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row info_form_social_row">
        <div className="col-md-8 col-lg-9">
          <div className="info_form">
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">

          <div className="social_box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row info_main_row">
        <div className="col-md-6 col-lg-3">
          <div className="info_links">
            <h4>
              Menu
            </h4>
            <div className="info_links_menu">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="shop.html">Shop</a>
              <a href="blog.html">Blog</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_insta">
            <h4>
              Instagram
            </h4>
            <div className="insta_box">
              <div className="img-box">
                <img src="images/p1.png" alt=""/>
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
            <div className="insta_box">
              <div className="img-box">
                <img src="images/p2.png" alt=""/>
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_detail">
            <h4>
              About Us
            </h4>
            <p className="mb-0">
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h4>
            Contact Us
          </h4>
          <div className="info_contact">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info_section --> */}


  {/* <!-- footer section --> */}
  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
        </>
    }
}
export default Team;