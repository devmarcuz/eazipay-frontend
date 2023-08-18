import React from "react";
import "../css/Home.css";
import {
  BgWave1,
  BgWave2,
  GetDemoDot,
  GetDemoPattern,
  HowItWorksCircle,
  HowItWorksSteps,
  SuscribeBg,
  SuscribeDotsPattern,
  //   HomeDesktopBg,
  //   Svgjj,
} from "../components/svgs/homeSvgs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/fonts.css";

const Home = () => {
  return (
    <div className="home">
      <BgWave1 />
      <Header />
      <div className="home-container">
        <div className="section">
          <div className="left-section">
            <div className="content">
              <h1>
                Run your payroll <span>easily</span> in <span>seconds</span>
              </h1>
              <p>
                We've built an all-inclusive simple solution for indivdual and
                businesses to manage staff, pay, salaries, bills, and relevant
                taxes all at once.
              </p>
              <button>Start Using Free, Forever</button>
            </div>
            <div className="social">
              <p>Download the Eazipay App</p>
              <div className="stores">
                <div className="store">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
                    <path
                      d="M29.0499 32.781C28.0699 33.731 26.9999 33.581 25.9699 33.131C24.8799 32.671 23.8799 32.651 22.7299 33.131C21.2899 33.751 20.5299 33.571 19.6699 32.781C14.7899 27.751 15.5099 20.091 21.0499 19.811C22.3999 19.881 23.3399 20.551 24.1299 20.611C25.3099 20.371 26.4399 19.681 27.6999 19.771C29.2099 19.891 30.3499 20.491 31.0999 21.571C27.9799 23.441 28.7199 27.551 31.5799 28.701C31.0099 30.201 30.2699 31.691 29.0399 32.791L29.0499 32.781ZM24.0299 19.751C23.8799 17.521 25.6899 15.681 27.7699 15.501C28.0599 18.081 25.4299 20.001 24.0299 19.751Z"
                      fill="black"
                    />
                  </svg>
                  <div className="cnt">
                    <div className="text">Download on the</div>
                    <div className="title">AppStore</div>
                  </div>
                </div>
                <div className="store">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
                    <g clip-path="url(#clip0_4_4163)">
                      <path
                        d="M23.2837 23.9427L13.2349 34.4709C13.3477 34.8708 13.5505 35.2396 13.8277 35.5492C14.105 35.8587 14.4493 36.1007 14.8344 36.2568C15.2195 36.4129 15.6352 36.4788 16.0497 36.4496C16.4642 36.4204 16.8666 36.2968 17.226 36.0882L28.5329 29.6486L23.2837 23.9427Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M33.4449 22.1531L28.5555 19.3525L23.0518 24.1822L28.5779 29.6335L33.4301 26.8629C33.86 26.6378 34.22 26.2993 34.4712 25.8842C34.7224 25.4691 34.8552 24.9932 34.8552 24.5079C34.8552 24.0227 34.7224 23.5468 34.4712 23.1317C34.22 22.7165 33.86 22.3781 33.4301 22.153H33.4451L33.4449 22.1531Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M13.2349 14.4929C13.1742 14.7174 13.144 14.9491 13.145 15.1817V33.7819C13.1457 34.0144 13.1759 34.246 13.2349 34.4709L23.6283 24.2123L13.2349 14.4929Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M23.3586 24.4819L28.5553 19.3526L17.2635 12.8829C16.8386 12.6341 16.3554 12.5023 15.8631 12.501C14.6413 12.4987 13.5671 13.3096 13.2349 14.4854L23.3586 24.4819Z"
                        fill="#34A853"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_4163">
                        <rect
                          width="21.7102"
                          height="24"
                          fill="white"
                          transform="translate(13.145 12.501)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="cnt">
                    <div className="text">Get on</div>
                    <div className="title">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src="/images/Frame 48096508.svg" />
          </div>
        </div>
      </div>
      <div className="for-individuals-container">
        <BgWave2 />
        <div className="content">
          <div className="intro">
            <h1>For Individuals and Businesses</h1>
            <p>Join 200+ businesses using Eazipay's easy solution.</p>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Tamper-proof Payroll for LIfe</h2>
              <div className="cont-text">
                <p>Your staff payroll history is kept in one place forever.</p>
                <p>No more excel sheet or manual records.</p>
                <p>Download your payroll history anytime you need it.</p>
              </div>
            </div>
            <div className="card">
              <h2>All Payroll, Anytime</h2>
              <div className="cont-text">
                <p>
                  Wherever you are Eazipay has got you covered on ALL your
                  Payroll tasks.
                </p>
                <p>
                  Whether it is Taxes, Pension insurances HMOs, trustfunds,
                  Eazipay handle all your compliamces in one place and easily,
                  in seconds!
                </p>
              </div>
            </div>
            <div className="card">
              <h2>Payroll in Seconds</h2>
              <div className="cont-text">
                <p>
                  Never again will you spend more than 2 minutes on payroll.
                </p>
                <p>Just click on our staff and bulk-pay them at once.</p>
                <p>Payment is done permently.</p>
              </div>
            </div>
          </div>
          <div className="end-cnt">
            <p>
              We are happy to anser your queries. Please reach us at{" "}
              <a href="#">hello@myeazipay.com</a> and expect our responses
              after.
            </p>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div className="content">
          <div className="intro">
            <h1>How Eazipay Works</h1>
            <p>Get started in 3 simple steps.</p>
          </div>
          <div className="how-it-works-container">
            <div className="left-section">
              <HowItWorksCircle />
              <img src="/images/onbrdng 2.svg" />
            </div>
            <div className="right-section">
              <img src="/images/Mask group3.png" alt="" className="left" />
              <img src="/images/Mask group4.png" alt="" className="right" />
              <div className="steps">
                <div className="mask-group"></div>

                <div className="step first">
                  <div className="btn">1</div>
                  <div className="title">Create your free account</div>
                  <div className="text">
                    Click here to set up your Eazipay account.
                  </div>
                </div>
                <div className="step">
                  <div className="btn">2</div>
                  <div className="title">Add Employee Data</div>
                  <div className="text">
                    Your employee information is 100% safe and secure.
                  </div>
                </div>
                <div className="step">
                  <div className="btn">3</div>
                  <div className="title">Prepare your Transaction</div>
                  <div className="text">
                    Run payroll: Bulk Salaries and Compliance are done at once!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="suscribe-eazipay">
        <SuscribeBg />
        <SuscribeDotsPattern />
        <div className="container">
          <div className="left-container">
            <div className="content">
              <h1>
                Free forever for your <span>salary payment</span>
              </h1>
            </div>
            <div className="social">
              <p>Subscribe to the Eazilife today</p>
              <div className="stores">
                <div className="store">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
                    <path
                      d="M29.0499 32.781C28.0699 33.731 26.9999 33.581 25.9699 33.131C24.8799 32.671 23.8799 32.651 22.7299 33.131C21.2899 33.751 20.5299 33.571 19.6699 32.781C14.7899 27.751 15.5099 20.091 21.0499 19.811C22.3999 19.881 23.3399 20.551 24.1299 20.611C25.3099 20.371 26.4399 19.681 27.6999 19.771C29.2099 19.891 30.3499 20.491 31.0999 21.571C27.9799 23.441 28.7199 27.551 31.5799 28.701C31.0099 30.201 30.2699 31.691 29.0399 32.791L29.0499 32.781ZM24.0299 19.751C23.8799 17.521 25.6899 15.681 27.7699 15.501C28.0599 18.081 25.4299 20.001 24.0299 19.751Z"
                      fill="black"
                    />
                  </svg>
                  <div className="cnt">
                    <div className="text">Download on the</div>
                    <div className="title">AppStore</div>
                  </div>
                </div>
                <div className="store">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
                    <g clip-path="url(#clip0_4_4163)">
                      <path
                        d="M23.2837 23.9427L13.2349 34.4709C13.3477 34.8708 13.5505 35.2396 13.8277 35.5492C14.105 35.8587 14.4493 36.1007 14.8344 36.2568C15.2195 36.4129 15.6352 36.4788 16.0497 36.4496C16.4642 36.4204 16.8666 36.2968 17.226 36.0882L28.5329 29.6486L23.2837 23.9427Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M33.4449 22.1531L28.5555 19.3525L23.0518 24.1822L28.5779 29.6335L33.4301 26.8629C33.86 26.6378 34.22 26.2993 34.4712 25.8842C34.7224 25.4691 34.8552 24.9932 34.8552 24.5079C34.8552 24.0227 34.7224 23.5468 34.4712 23.1317C34.22 22.7165 33.86 22.3781 33.4301 22.153H33.4451L33.4449 22.1531Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M13.2349 14.4929C13.1742 14.7174 13.144 14.9491 13.145 15.1817V33.7819C13.1457 34.0144 13.1759 34.246 13.2349 34.4709L23.6283 24.2123L13.2349 14.4929Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M23.3586 24.4819L28.5553 19.3526L17.2635 12.8829C16.8386 12.6341 16.3554 12.5023 15.8631 12.501C14.6413 12.4987 13.5671 13.3096 13.2349 14.4854L23.3586 24.4819Z"
                        fill="#34A853"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_4163">
                        <rect
                          width="21.7102"
                          height="24"
                          fill="white"
                          transform="translate(13.145 12.501)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="cnt">
                    <div className="text">Ge on</div>
                    <div className="title">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <img src="/images/Frame 48096458.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="get-demo">
        <GetDemoDot />
        <GetDemoPattern />
        <div className="container">
          <div className="left-container">
            <h1>Get an Exclusive Demo of Eazipay</h1>
            <p>
              Our greatest priority is to put you and your business first. Let’s
              show you how we can help.
            </p>
          </div>
          <div className="right-container">
            <form action="">
              <h1>First thing first</h1>
              <p>
                We want to serve you better. Tell us a bit about yourself or
                company
              </p>
              <div className="options">
                <div className="btn">Individual</div>
                <div className="btn">Company</div>
              </div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Job Title" />
              <input type="text" placeholder="Company Size" />
              <button type="submit">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
