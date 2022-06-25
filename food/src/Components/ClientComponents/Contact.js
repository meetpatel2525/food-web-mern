import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      {/* <!-- Body Start --> */}
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="panel-group accordion" id="accordion0">
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingOne">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Ludhiana
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Ludhiana Head Office:
                        <br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Ludhiana, Punjab
                        <br />
                        Ludhiana- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingTwo">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Gurugram
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Gurugram Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Gurugram, Haryana
                        <br />
                        Gurugram- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingThree">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          New Delhi
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        New Delhi Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        New Delhi
                        <br />
                        New Delhi- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingfour">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Bangaluru
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsefour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfour"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Bangaluru Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Bangaluru
                        <br />
                        Bangaluru- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingfive">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefive"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Mumbai
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsefive"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfive"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Mumbai Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Mumbai
                        <br />
                        Mumbai- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingsix">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsesix"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Hyderabad
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapsesix"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingsix"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Hyderabad Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Hyderabad
                        <br />
                        Hyderabad- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingseven">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseseven"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Kolkata
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseseven"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingseven"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Kolkata Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Kolkata
                        <br />
                        Kolkata- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingeight">
                      <div className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseeight"
                          href="#"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          <i className="uil uil-location-point chck_icon"></i>
                          Chandigrah
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseeight"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingeight"
                      data-parent="#accordion0"
                    >
                      <div className="panel-body">
                        Chandigrah Branch :<br />
                        #0000, St No. 0, Lorem ipsum dolor sit amet, Main road,
                        Chandigrah
                        <br />
                        Chandigrah- 141001
                        <br />
                        <div className="color-pink">Tel: 0000-000-000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-title">
                  <h2>Submit customer service request</h2>
                  <p>
                    If you have a question about our service or have an issue to
                    report, please send a request and we will get back to you as
                    soon as possible.
                  </p>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="form-group mt-1">
                      <label className="control-label">Full Name*</label>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="text"
                            name="sendername"
                            id="sendername"
                            required=""
                            placeholder="Your Full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-1">
                      <label className="control-label">Email Address*</label>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="email"
                            name="emailaddress"
                            id="emailaddress"
                            required=""
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-1">
                      <label className="control-label">Subject*</label>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="text"
                            name="sendersubject"
                            id="sendersubject"
                            required=""
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-1">
                      <div className="field">
                        <label className="control-label">Message*</label>
                        <textarea
                          rows="2"
                          className="form-control"
                          id="sendermessage"
                          name="sendermessage"
                          required=""
                          placeholder="Write Message"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      className="next-btn16 hover-btn mt-3"
                      type="submit"
                      data-btntext-sending="Sending..."
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Body End --> */}
    </>
  );
};

export default Contact;
