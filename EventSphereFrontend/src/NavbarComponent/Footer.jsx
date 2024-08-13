import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    EventSphere
                  </h5>

                  <p>
                  "EventSphere: Where every detail is a work of art. Let's collaborate to make your event an extraordinary experience!"
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-second">
                <Link to="/about-us" className="text-color-second text-decoration-none">
                About us
                </Link>
                </h5>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-second">
                <Link to="/contact-us" className="text-color-second text-decoration-none">
                   Contact us
                </Link>
                </h5>
                </div>

              </div>
            </section>
          </div>
          
          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="#">
              eventsphere.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
