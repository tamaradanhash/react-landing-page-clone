import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import background from './background.svg';
import videoBackground from './videoBackground.svg';
import video from './video.mp4';
import circle from './circle.svg';
import x from './X.svg';
import todoTasks from './to-do-tasks-left.svg';
import notTodoTasks from './not-to-do-tasks.svg';
import arrowRight from './arrowRight.svg';
import mobileDevice from './mobile-device.svg';
import heartIcon from './heartIcon.svg';
import twitterIcon from './twitterIcon.svg';

const Header = styled.header`
  margin-left: 60px;
  position: relative;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  margin: 0;
  border: 0;
  text-decoration: none;
  color: inherit;

  cursor: pointer;

  img {
    max-height: 40px;
  }
`;

const HeaderButtons = styled.button`
  font-size: 20px;
  font-weight: 600;
  border-radius: 60px;
  border: 1px solid transparent;
  outline: none;
  color: #007bff;
  background-color: #fff;
  cursor: pointer;
  transition: border 0.3s, color 0.3s, background-color 0.3s;
`;

const SignupButton = styled.button`
  cursor: pointer;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  padding: 15px;
  border-radius: 60px;
  border: 1px solid transparent;
  outline: none;
  -webkit-transition: border 0.3s, color 0.3s, background-color 0.3s;
  transition: border 0.3s, color 0.3s, background-color 0.3s;
  color: #fff;
  background-color: #007bff;
`;
const Hero = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  min-width: 100%;
`;
const IndexHero = styled.div`
  padding-top: 100px;
  background: #fff;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top;
`;
const HeroText = styled.div`
  text-align: center;
  width: 55%;
  margin: auto;
  box-sizing: border-box;
`;
const HeroTextH1 = styled.h1`
  font-size: 40px;
  line-height: 1.1em;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #292f36;
`;
const HeroTextH2 = styled.h2`
  line-height: 1.25em;

  font-weight: 400;
  color: #8f99a7;
  margin-top: 24px;
  margin-bottom: 50px;
`;
const CenterSignupButton = styled.button`
  font-family: proxima-soft, Helvetica Neue, Roboto, sans-serif;
  outline: none;
  border: none;
  padding: 15px 50px;
  align-self: center;
  background-color: #017bff;
  border-radius: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  transition: all 0.3s ease-in-out;
`;
const HeroVideoBackground = styled.div`
  background-image: url(${videoBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  z-index: 1;
  width: 100%;
  left: 0;
  right: 0;
`;
const HeroVideo = styled.div`
  max-width: 960px;
  box-shadow: 0 0 20px 0 rgba(0, 123, 255, 0.25);
  margin: 110px auto 0;
  border-radius: 10px;
  overflow: hidden;
`;
const IndexToDoWrapper = styled.div`
  background-color: #017bff;
  display: flex;
  width: 100vw;
  flex-direction: column;
  padding-bottom: 100px;
  overflow: hidden;
`;
const IndexToDoContainer = styled.div`
  background-color: #017bff;
  display: grid;
  grid-template-columns: 10% 40% 40% 10%;
  grid-gap: 0;
  justify-items: center;
  width: 100%;
  align-items: center;
  margin: 100px auto auto;
`;
const IndexToDoSides = styled.div`
  width: 60%;
  background: #fff;
  border-radius: 10px;
  text-align: left;
  padding: 32px;
  > h3 {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.25em;
  }
  > p {
    color: #8f99a7;
    font-size: 24px;
    margin-top: 16px;
    line-height: 1.25em;
  }
  > img:first {
    width: 60px;
    height: 60px;
    margin-bottom: 40px;
  }
  > img:last-child {
    margin-top: 40px;
    width: 100%;
  }
`;
const IndexMobileWrapper = styled.div`
  text-align: left;
  background: #eef3fb;
  width: 100%;
  margin: auto;
`;
const IndexMobileContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  justify-items: center;
  max-height: 600px;
  margin-top: 100px;
`;
const IndexMobileContent = styled.div`
  margin-top: 100px;
  > h1 {
    font-size: 55px;
    line-height: 1.1em;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #292f36;
  }
  > p {
    color: #8f99a7;
    font-size: 24px;
    margin-top: 16px;
    line-height: 1.25em;
  }
  > form {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    > input {
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #bed1ed;
      width: calc(100% - 62px);
      height: 50px;
    }
    > button {
      background-color: #007bff;
      width: 50px;
      border-radius: 5px;
      margin: 0 0 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const IndexAnalyticsWrapper = styled.div`
  background: #fff;
  width: 100%;
  padding: 100px 0;
`;
const IndexAnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 55px;
    line-height: 1.1em;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #292f36;
  }
  > p {
    color: #8f99a7;
    font-size: 24px;
    margin-top: 16px;
    line-height: 1.25em;
  }
  > div {
    min-width: 60%;
  }
`;
const AnimationLine = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
  outline: none;
`;
const Footer = styled.footer`
  background-color: #eef3fb;
  box-sizing: border-box;
  font-size: 20px;
`;
const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  padding: 125px 50px;
  grid-template-columns: 1fr 250px 100px;
  grid-column-gap: 25px;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > p {
    font-size: 24px;
    font-weight: 500;
    a {
      color: #007bff;
    }
  }
`;
const FooterMid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  > a {
    color: #007bff;
  }
`;
export default function App() {
  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="Confetti Logo" />
        </Logo>
        <div href="/pricing" style={{ display: 'block' }}>
          <HeaderButtons>Pricing</HeaderButtons>

          <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <HeaderButtons>Sign In</HeaderButtons>
          </a>
          <a href="/signup">
            <SignupButton>Try for Free</SignupButton>
          </a>
        </div>
      </Header>
      <Hero>
        <IndexHero>
          <HeroText>
            <HeroTextH1>
              A platform for celebrating daily progress towards your goals
            </HeroTextH1>
            <HeroTextH2>
              Master a productive routine and eliminate bad habits in one
              easy-to-use habit tracker for daily goals
            </HeroTextH2>
          </HeroText>
          <a
            href="/signup"
            style={{
              color: '-webkit-link',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            <CenterSignupButton>Try for Free</CenterSignupButton>
          </a>
          <HeroVideoBackground>
            <HeroVideo>
              <video
                className="index-todo__left"
                autoplay=""
                loop
                preload="auto"
                poster={video}
                style={{ objectFit: 'contain', zIndex: '2', width: '100%' }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </HeroVideo>
          </HeroVideoBackground>
        </IndexHero>
        <IndexToDoWrapper>
          <IndexToDoContainer>
            <div style={{ gridColumn: '2/span 2', paddingBottom: '100px' }}>
              <HeroTextH1 style={{ color: '#fff' }}>
                Set goals, simply
              </HeroTextH1>
            </div>
            <IndexToDoSides style={{ gridColumn: '2', marginLeft: ' 100px' }}>
              <img src={circle} alt="A Green Circle" />
              <h3>To-Do's</h3>
              <p>
                Trying to learn Spanish? Want to read for 30 minutes a day?
                Manage daily habits and achieve your goals.
              </p>
              <img src={todoTasks} alt="An example list of to-dos" />
            </IndexToDoSides>
            <IndexToDoSides>
              <img src={x} alt="A Red X" />
              <h3>Not-To-Do's</h3>
              <p>
                Find yourself spending hours on Instagram? Track what is
                stopping you from achieving your goals and master better daily
                habits.
              </p>
              <img src={notTodoTasks} alt="An example list of no-to-dos" />
            </IndexToDoSides>
            <div></div>
          </IndexToDoContainer>
          <a
            style={{ textDecoration: 'none', color: 'inherit' }}
            href="/signup"
          >
            <CenterSignupButton
              style={{ backgroundColor: '#fff', color: '#017bff' }}
            >
              Try for Free
            </CenterSignupButton>
          </a>
        </IndexToDoWrapper>
        <IndexMobileWrapper>
          <IndexMobileContainer>
            <IndexMobileContent>
              <h1>Stay closer to your daily goals</h1>
              <p>
                Build positive habits into your daily life and start achieving
                your goals faster with the mobile app - coming soon to iOS &amp;
                Android.
              </p>
              <form>
                <input type="text" placeholder="Enter email for early access" />
                <button>
                  <img src={arrowRight} alt="An arrow pointing right" />
                </button>
              </form>
            </IndexMobileContent>
            <div>
              <img
                style={{ maxWidth: '400px' }}
                src={mobileDevice}
                alt="A mockup of the mobile app"
              />
            </div>
          </IndexMobileContainer>
        </IndexMobileWrapper>
        <IndexAnalyticsWrapper>
          <IndexAnalyticsContainer>
            <h1>Analytics for your life</h1>
            <p>
              Visualize the data behind your goal setting and watch as your "I
              wish I could's" become reality
            </p>
            <div>
              <AnimationLine
                title
                role="button"
                aria-label="animation"
                tabindex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 832 162"
                  width="832"
                  height="162"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: "translate3d('0px')('0px')('0px')",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_34">
                      <rect width="832" height="162" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#__lottie_element_34)">
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="% achieved"
                      transform="matrix(1,0,0,1,778,98)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M3.48,-6.29 C5.26,-6.29 6.45,-7.58 6.45,-9.26 C6.45,-10.97 5.26,-12.27 3.48,-12.27 C1.72,-12.27 0.54,-10.97 0.54,-9.26 C0.54,-7.58 1.72,-6.29 3.48,-6.29z M3.12,0.09 C3.28,0.09 3.41,0 3.48,-0.13 C3.48,-0.13 10.77,-11.46 10.77,-11.46 C10.8,-11.55 10.82,-11.62 10.82,-11.73 C10.82,-11.96 10.62,-12.18 10.37,-12.18 C10.21,-12.18 10.04,-12.09 9.97,-11.96 C9.97,-11.96 2.74,-0.62 2.74,-0.62 C2.68,-0.54 2.65,-0.45 2.65,-0.36 C2.65,-0.13 2.86,0.09 3.12,0.09z M3.48,-7.25 C2.48,-7.25 1.78,-8.1 1.78,-9.26 C1.78,-10.46 2.48,-11.28 3.48,-11.28 C4.5,-11.28 5.2,-10.46 5.2,-9.26 C5.2,-8.1 4.5,-7.25 3.48,-7.25z M9.9,0.22 C11.66,0.22 12.85,-1.07 12.85,-2.76 C12.85,-4.46 11.66,-5.76 9.9,-5.76 C8.14,-5.76 6.94,-4.46 6.94,-2.76 C6.94,-1.07 8.14,0.22 9.9,0.22z M9.9,-0.74 C8.88,-0.74 8.18,-1.6 8.18,-2.76 C8.18,-3.95 8.88,-4.77 9.9,-4.77 C10.91,-4.77 11.62,-3.95 11.62,-2.76 C11.62,-1.6 10.91,-0.74 9.9,-0.74z"
                        transform="matrix(1,0,0,1,-90.23400115966797,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d
                        transform="matrix(1,0,0,1,-76.93199920654297,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.82,-8.97 C3.61,-8.97 2.56,-8.63 1.63,-7.89 C1.47,-7.78 1.36,-7.58 1.36,-7.36 C1.36,-7 1.65,-6.69 2.01,-6.69 C2.16,-6.69 2.3,-6.74 2.41,-6.82 C3.08,-7.34 3.77,-7.58 4.57,-7.58 C5.82,-7.58 6.71,-6.92 6.71,-5.84 C6.71,-5.84 6.71,-4.39 6.71,-4.39 C6.04,-5.17 5.02,-5.55 3.84,-5.55 C2.37,-5.55 0.8,-4.68 0.8,-2.68 C0.8,-0.76 2.39,0.22 3.84,0.22 C5.02,0.22 6.04,-0.2 6.71,-0.98 C6.71,-0.98 6.71,-0.73 6.71,-0.73 C6.71,-0.27 7.09,0.09 7.52,0.09 C7.96,0.09 8.34,-0.27 8.34,-0.73 C8.34,-0.73 8.34,-5.91 8.34,-5.91 C8.34,-8.14 6.73,-8.97 4.82,-8.97z M4.46,-0.92 C3.28,-0.92 2.45,-1.63 2.45,-2.66 C2.45,-3.7 3.28,-4.4 4.46,-4.4 C5.37,-4.4 6.22,-4.06 6.71,-3.41 C6.71,-3.41 6.71,-1.92 6.71,-1.92 C6.22,-1.27 5.37,-0.92 4.46,-0.92z"
                        transform="matrix(1,0,0,1,-72.28799438476562,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.76 2.57,0.22 5.22,0.22 C6.47,0.22 7.34,-0.18 8.01,-0.8 C8.16,-0.92 8.27,-1.14 8.27,-1.36 C8.27,-1.76 7.94,-2.08 7.52,-2.08 C7.34,-2.08 7.16,-2.01 7.05,-1.9 C6.54,-1.43 5.98,-1.23 5.29,-1.23 C3.57,-1.23 2.47,-2.57 2.47,-4.39 C2.47,-6.2 3.57,-7.52 5.29,-7.52 C5.98,-7.52 6.54,-7.32 7.05,-6.85 C7.18,-6.74 7.34,-6.67 7.54,-6.67 C7.94,-6.67 8.27,-7 8.27,-7.41 C8.27,-7.61 8.16,-7.83 8.01,-7.96 C7.34,-8.57 6.47,-8.97 5.22,-8.97 C2.57,-8.97 0.76,-7.02 0.76,-4.39z"
                        transform="matrix(1,0,0,1,-62.71200180053711,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.03,0.09 C8.48,0.09 8.85,-0.27 8.85,-0.73 C8.85,-0.73 8.85,-6.18 8.85,-6.18 C8.85,-8.03 7.9,-8.97 6.04,-8.97 C4.7,-8.97 3.52,-8.23 2.94,-7.52 C2.94,-7.52 2.94,-11.37 2.94,-11.37 C2.94,-11.82 2.56,-12.18 2.12,-12.18 C1.67,-12.18 1.31,-11.82 1.31,-11.37 C1.31,-11.37 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.12,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-6.25 2.94,-6.25 C3.41,-6.91 4.33,-7.52 5.35,-7.52 C6.47,-7.52 7.21,-7.09 7.21,-5.64 C7.21,-5.64 7.21,-0.73 7.21,-0.73 C7.21,-0.27 7.6,0.09 8.03,0.09z"
                        transform="matrix(1,0,0,1,-53.784000396728516,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.1,-10.5 C2.68,-10.5 3.15,-10.97 3.15,-11.55 C3.15,-12.13 2.68,-12.58 2.1,-12.58 C1.54,-12.58 1.05,-12.13 1.05,-11.55 C1.05,-10.97 1.54,-10.5 2.1,-10.5z M2.1,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-8.03 2.94,-8.03 C2.94,-8.48 2.56,-8.85 2.12,-8.85 C1.67,-8.85 1.31,-8.48 1.31,-8.03 C1.31,-8.03 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.1,0.09z"
                        transform="matrix(1,0,0,1,-43.704002380371094,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,-39.5099983215332,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M7.81,-8.85 C7.47,-8.85 7.16,-8.63 7.05,-8.34 C7.05,-8.34 4.5,-1.85 4.5,-1.85 C4.5,-1.85 1.94,-8.34 1.94,-8.34 C1.83,-8.63 1.5,-8.85 1.18,-8.85 C0.73,-8.85 0.38,-8.48 0.38,-8.03 C0.38,-7.92 0.4,-7.81 0.44,-7.72 C0.44,-7.72 3.34,-0.69 3.34,-0.69 C3.52,-0.22 3.97,0.09 4.51,0.09 C5.02,0.09 5.47,-0.22 5.67,-0.69 C5.67,-0.69 8.56,-7.7 8.56,-7.7 C8.59,-7.81 8.63,-7.92 8.63,-8.03 C8.63,-8.48 8.27,-8.85 7.81,-8.85z"
                        transform="matrix(1,0,0,1,-29.43000030517578,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,-20.483999252319336,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.36,-12.18 C7.92,-12.18 7.54,-11.82 7.54,-11.37 C7.54,-11.37 7.54,-7.49 7.54,-7.49 C6.83,-8.45 5.8,-8.97 4.68,-8.97 C2.39,-8.97 0.76,-7.18 0.76,-4.37 C0.76,-1.5 2.39,0.22 4.68,0.22 C5.84,0.22 6.87,-0.36 7.54,-1.25 C7.54,-1.25 7.54,-0.73 7.54,-0.73 C7.54,-0.27 7.92,0.09 8.36,0.09 C8.81,0.09 9.17,-0.27 9.17,-0.73 C9.17,-0.73 9.17,-11.37 9.17,-11.37 C9.17,-11.82 8.81,-12.18 8.36,-12.18z M5.11,-1.23 C3.48,-1.23 2.47,-2.56 2.47,-4.37 C2.47,-6.2 3.48,-7.52 5.11,-7.52 C6.11,-7.52 7.09,-6.94 7.54,-6.24 C7.54,-6.24 7.54,-2.5 7.54,-2.5 C7.09,-1.79 6.11,-1.23 5.11,-1.23z"
                        transform="matrix(1,0,0,1,-10.40400218963623,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,417,60.5)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(238,243,251)"
                          stroke-opacity="1"
                          stroke-width="9"
                          d=" M-360.5,0 C-360.5,0 360.5,0 360.5,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,417,60.5)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(0,123,255)"
                          stroke-opacity="1"
                          stroke-width="9"
                          d=" M-360.5,0 C-360.5,0 105.81199645996094,0 288.4079895019531,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,417,60.5)"
                      opacity="1"
                      style={{ display: 'block' }}
                    ></g>
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="% from week before"
                      transform="matrix(1,0,0,1,139,98)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M3.48,-6.29 C5.26,-6.29 6.45,-7.58 6.45,-9.26 C6.45,-10.97 5.26,-12.27 3.48,-12.27 C1.72,-12.27 0.54,-10.97 0.54,-9.26 C0.54,-7.58 1.72,-6.29 3.48,-6.29z M3.12,0.09 C3.28,0.09 3.41,0 3.48,-0.13 C3.48,-0.13 10.77,-11.46 10.77,-11.46 C10.8,-11.55 10.82,-11.62 10.82,-11.73 C10.82,-11.96 10.62,-12.18 10.37,-12.18 C10.21,-12.18 10.04,-12.09 9.97,-11.96 C9.97,-11.96 2.74,-0.62 2.74,-0.62 C2.68,-0.54 2.65,-0.45 2.65,-0.36 C2.65,-0.13 2.86,0.09 3.12,0.09z M3.48,-7.25 C2.48,-7.25 1.78,-8.1 1.78,-9.26 C1.78,-10.46 2.48,-11.28 3.48,-11.28 C4.5,-11.28 5.2,-10.46 5.2,-9.26 C5.2,-8.1 4.5,-7.25 3.48,-7.25z M9.9,0.22 C11.66,0.22 12.85,-1.07 12.85,-2.76 C12.85,-4.46 11.66,-5.76 9.9,-5.76 C8.14,-5.76 6.94,-4.46 6.94,-2.76 C6.94,-1.07 8.14,0.22 9.9,0.22z M9.9,-0.74 C8.88,-0.74 8.18,-1.6 8.18,-2.76 C8.18,-3.95 8.88,-4.77 9.9,-4.77 C10.91,-4.77 11.62,-3.95 11.62,-2.76 C11.62,-1.6 10.91,-0.74 9.9,-0.74z"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=""
                        transform="matrix(1,0,0,1,13.30199909210205,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.64,-10.93 C4.79,-10.93 4.97,-10.88 5.09,-10.88 C5.53,-10.88 5.75,-11.15 5.75,-11.53 C5.75,-11.84 5.53,-12.07 5.24,-12.16 C4.97,-12.24 4.68,-12.27 4.37,-12.27 C2.81,-12.27 1.7,-11.22 1.7,-9.34 C1.7,-9.34 1.7,-8.76 1.7,-8.76 C1.7,-8.76 0.89,-8.76 0.89,-8.76 C0.49,-8.76 0.16,-8.43 0.16,-8.05 C0.16,-7.65 0.49,-7.32 0.89,-7.32 C0.89,-7.32 1.7,-7.32 1.7,-7.32 C1.7,-7.32 1.7,-0.73 1.7,-0.73 C1.7,-0.27 2.08,0.09 2.54,0.09 C2.97,0.09 3.34,-0.27 3.34,-0.73 C3.34,-0.73 3.34,-7.32 3.34,-7.32 C3.34,-7.32 4.5,-7.32 4.5,-7.32 C4.88,-7.32 5.22,-7.65 5.22,-8.05 C5.22,-8.43 4.88,-8.76 4.5,-8.76 C4.5,-8.76 3.34,-8.76 3.34,-8.76 C3.34,-8.76 3.34,-9.34 3.34,-9.34 C3.34,-10.39 3.82,-10.93 4.64,-10.93z"
                        transform="matrix(1,0,0,1,17.945999145507812,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.22,-8.9 C5.08,-8.9 4.95,-8.86 4.75,-8.81 C4.11,-8.61 3.43,-8.07 2.94,-7.41 C2.94,-7.41 2.94,-8.03 2.94,-8.03 C2.94,-8.48 2.56,-8.85 2.1,-8.85 C1.67,-8.85 1.31,-8.48 1.31,-8.03 C1.31,-8.03 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.12,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-6.09 2.94,-6.09 C3.32,-6.74 4.33,-7.27 5.06,-7.34 C5.62,-7.41 5.91,-7.74 5.91,-8.12 C5.91,-8.54 5.69,-8.9 5.22,-8.9z"
                        transform="matrix(1,0,0,1,23.27400016784668,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.18,0.22 C7.92,0.22 9.61,-1.85 9.61,-4.39 C9.61,-6.91 7.92,-8.97 5.18,-8.97 C2.47,-8.97 0.76,-6.91 0.76,-4.39 C0.76,-1.85 2.47,0.22 5.18,0.22z M5.18,-1.23 C3.44,-1.23 2.47,-2.72 2.47,-4.39 C2.47,-6.04 3.44,-7.52 5.18,-7.52 C6.94,-7.52 7.9,-6.04 7.9,-4.39 C7.9,-2.72 6.94,-1.23 5.18,-1.23z"
                        transform="matrix(1,0,0,1,29.358001708984375,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M11.09,-8.97 C9.81,-8.97 8.65,-8.16 8.14,-7.34 C7.87,-8.28 7.09,-8.97 5.76,-8.97 C4.46,-8.97 3.3,-8.07 2.94,-7.52 C2.94,-7.52 2.94,-8.03 2.94,-8.03 C2.94,-8.48 2.56,-8.85 2.1,-8.85 C1.67,-8.85 1.31,-8.48 1.31,-8.03 C1.31,-8.03 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.12,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-6.25 2.94,-6.25 C3.37,-6.89 4.22,-7.52 5.08,-7.52 C6.18,-7.52 6.62,-6.85 6.62,-5.84 C6.62,-5.84 6.62,-0.73 6.62,-0.73 C6.62,-0.27 7,0.09 7.43,0.09 C7.89,0.09 8.25,-0.27 8.25,-0.73 C8.25,-0.73 8.25,-6.27 8.25,-6.27 C8.66,-6.91 9.53,-7.52 10.42,-7.52 C11.49,-7.52 11.95,-6.85 11.95,-5.84 C11.95,-5.84 11.95,-0.73 11.95,-0.73 C11.95,-0.27 12.31,0.09 12.74,0.09 C13.2,0.09 13.58,-0.27 13.58,-0.73 C13.58,-0.73 13.58,-6.33 13.58,-6.33 C13.58,-8.08 12.71,-8.97 11.09,-8.97z"
                        transform="matrix(1,0,0,1,39.65399932861328,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=""
                        transform="matrix(1,0,0,1,54.413997650146484,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.73,0.09 C10.22,0.09 10.66,-0.22 10.79,-0.69 C10.79,-0.69 13.03,-7.78 13.03,-7.78 C13.05,-7.85 13.07,-7.96 13.07,-8.03 C13.07,-8.48 12.71,-8.85 12.27,-8.85 C11.89,-8.85 11.58,-8.61 11.49,-8.27 C11.49,-8.27 9.64,-2.08 9.64,-2.08 C9.64,-2.08 7.63,-8.19 7.63,-8.19 C7.52,-8.59 7.16,-8.85 6.74,-8.85 C6.33,-8.85 5.96,-8.59 5.86,-8.19 C5.86,-8.19 3.84,-2.08 3.84,-2.08 C3.84,-2.08 1.99,-8.27 1.99,-8.27 C1.9,-8.61 1.6,-8.85 1.21,-8.85 C0.78,-8.85 0.42,-8.48 0.42,-8.05 C0.42,-7.96 0.44,-7.87 0.45,-7.79 C0.45,-7.79 2.7,-0.69 2.7,-0.69 C2.83,-0.22 3.26,0.09 3.75,0.09 C4.24,0.09 4.66,-0.22 4.8,-0.69 C4.8,-0.69 6.74,-6.73 6.74,-6.73 C6.74,-6.73 8.68,-0.69 8.68,-0.69 C8.83,-0.22 9.24,0.09 9.73,0.09z"
                        transform="matrix(1,0,0,1,59.05799865722656,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,72.45000457763672,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,82.52999877929688,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.56,-1.27 C8.56,-1.27 5.49,-4.75 5.49,-4.75 C5.49,-4.75 8.37,-7.56 8.37,-7.56 C8.52,-7.7 8.61,-7.9 8.61,-8.08 C8.61,-8.48 8.28,-8.85 7.87,-8.85 C7.67,-8.85 7.49,-8.79 7.34,-8.65 C7.34,-8.65 2.94,-4.31 2.94,-4.31 C2.94,-4.31 2.94,-11.37 2.94,-11.37 C2.94,-11.82 2.56,-12.18 2.12,-12.18 C1.67,-12.18 1.31,-11.82 1.31,-11.37 C1.31,-11.37 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.1,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-2.48 2.94,-2.48 C2.94,-2.48 4.3,-3.75 4.3,-3.75 C4.3,-3.75 7.32,-0.18 7.32,-0.18 C7.49,0.02 7.7,0.09 7.96,0.09 C8.41,0.09 8.76,-0.27 8.76,-0.73 C8.76,-0.91 8.68,-1.12 8.56,-1.27z"
                        transform="matrix(1,0,0,1,92.61000061035156,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=""
                        transform="matrix(1,0,0,1,101.97000122070312,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.8,-8.97 C4.68,-8.97 3.63,-8.45 2.94,-7.5 C2.94,-7.5 2.94,-11.37 2.94,-11.37 C2.94,-11.82 2.56,-12.18 2.12,-12.18 C1.67,-12.18 1.31,-11.82 1.31,-11.37 C1.31,-11.37 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.12,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-1.25 2.94,-1.25 C3.61,-0.36 4.62,0.22 5.8,0.22 C8.07,0.22 9.7,-1.5 9.7,-4.37 C9.7,-7.18 8.08,-8.97 5.8,-8.97z M5.37,-1.23 C4.37,-1.23 3.37,-1.79 2.94,-2.5 C2.94,-2.5 2.94,-6.22 2.94,-6.22 C3.37,-6.92 4.37,-7.52 5.37,-7.52 C7,-7.52 8.01,-6.2 8.01,-4.37 C8.01,-2.54 7,-1.23 5.37,-1.23z"
                        transform="matrix(1,0,0,1,106.61400604248047,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,117.01799774169922,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.64,-10.93 C4.79,-10.93 4.97,-10.88 5.09,-10.88 C5.53,-10.88 5.75,-11.15 5.75,-11.53 C5.75,-11.84 5.53,-12.07 5.24,-12.16 C4.97,-12.24 4.68,-12.27 4.37,-12.27 C2.81,-12.27 1.7,-11.22 1.7,-9.34 C1.7,-9.34 1.7,-8.76 1.7,-8.76 C1.7,-8.76 0.89,-8.76 0.89,-8.76 C0.49,-8.76 0.16,-8.43 0.16,-8.05 C0.16,-7.65 0.49,-7.32 0.89,-7.32 C0.89,-7.32 1.7,-7.32 1.7,-7.32 C1.7,-7.32 1.7,-0.73 1.7,-0.73 C1.7,-0.27 2.08,0.09 2.54,0.09 C2.97,0.09 3.34,-0.27 3.34,-0.73 C3.34,-0.73 3.34,-7.32 3.34,-7.32 C3.34,-7.32 4.5,-7.32 4.5,-7.32 C4.88,-7.32 5.22,-7.65 5.22,-8.05 C5.22,-8.43 4.88,-8.76 4.5,-8.76 C4.5,-8.76 3.34,-8.76 3.34,-8.76 C3.34,-8.76 3.34,-9.34 3.34,-9.34 C3.34,-10.39 3.82,-10.93 4.64,-10.93z"
                        transform="matrix(1,0,0,1,127.0979995727539,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.18,0.22 C7.92,0.22 9.61,-1.85 9.61,-4.39 C9.61,-6.91 7.92,-8.97 5.18,-8.97 C2.47,-8.97 0.76,-6.91 0.76,-4.39 C0.76,-1.85 2.47,0.22 5.18,0.22z M5.18,-1.23 C3.44,-1.23 2.47,-2.72 2.47,-4.39 C2.47,-6.04 3.44,-7.52 5.18,-7.52 C6.94,-7.52 7.9,-6.04 7.9,-4.39 C7.9,-2.72 6.94,-1.23 5.18,-1.23z"
                        transform="matrix(1,0,0,1,132.42599487304688,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.22,-8.9 C5.08,-8.9 4.95,-8.86 4.75,-8.81 C4.11,-8.61 3.43,-8.07 2.94,-7.41 C2.94,-7.41 2.94,-8.03 2.94,-8.03 C2.94,-8.48 2.56,-8.85 2.1,-8.85 C1.67,-8.85 1.31,-8.48 1.31,-8.03 C1.31,-8.03 1.31,-0.73 1.31,-0.73 C1.31,-0.27 1.67,0.09 2.12,0.09 C2.56,0.09 2.94,-0.27 2.94,-0.73 C2.94,-0.73 2.94,-6.09 2.94,-6.09 C3.32,-6.74 4.33,-7.27 5.06,-7.34 C5.62,-7.41 5.91,-7.74 5.91,-8.12 C5.91,-8.54 5.69,-8.9 5.22,-8.9z"
                        transform="matrix(1,0,0,1,142.7220001220703,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.76,-4.39 C0.76,-1.63 2.68,0.22 5.29,0.22 C6.45,0.22 7.49,-0.09 8.36,-0.73 C8.54,-0.85 8.65,-1.03 8.65,-1.27 C8.65,-1.63 8.36,-1.92 7.99,-1.92 C7.85,-1.92 7.72,-1.9 7.63,-1.83 C6.98,-1.36 6.2,-1.12 5.46,-1.12 C3.7,-1.12 2.61,-2.36 2.48,-3.84 C2.48,-3.84 8.45,-3.84 8.45,-3.84 C9.06,-3.84 9.41,-4.13 9.41,-4.62 C9.41,-6.92 7.78,-8.97 5.15,-8.97 C2.59,-8.97 0.76,-6.92 0.76,-4.39z M5.15,-7.63 C7,-7.63 7.78,-6.18 7.81,-5.02 C7.81,-5.02 2.47,-5.02 2.47,-5.02 C2.56,-6.22 3.39,-7.63 5.15,-7.63z"
                        transform="matrix(1,0,0,1,148.80599975585938,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="12345678910111213141516171819"
                      transform="matrix(1,0,0,1,64,129)"
                      opacity="0"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.65,0 C1.65,0 8.61,0 8.61,0 C9.05,0 9.43,-0.36 9.43,-0.82 C9.43,-1.25 9.05,-1.6 8.61,-1.6 C8.61,-1.6 3.68,-1.6 3.68,-1.6 C7,-4.15 9.26,-6.27 9.26,-8.63 C9.26,-11.04 7.21,-12.27 5.04,-12.27 C3.63,-12.27 2.25,-11.8 1.23,-10.89 C1.07,-10.75 0.94,-10.51 0.94,-10.28 C0.94,-9.82 1.31,-9.46 1.76,-9.46 C1.94,-9.46 2.12,-9.54 2.27,-9.64 C2.99,-10.26 3.92,-10.66 5.06,-10.66 C6.24,-10.66 7.41,-10.04 7.41,-8.63 C7.41,-6.76 5.42,-5.02 1.09,-1.72 C0.85,-1.54 0.71,-1.27 0.71,-0.96 C0.71,-0.42 1.14,0 1.65,0z"
                        transform="matrix(1,0,0,1,6.461999893188477,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.91,0.22 C7.65,0.22 9.34,-1.25 9.34,-3.28 C9.34,-5.18 7.67,-6.13 6.53,-6.24 C7.72,-6.45 9.15,-7.34 9.15,-9.03 C9.15,-11.06 7.38,-12.27 4.91,-12.27 C3.3,-12.27 2.05,-11.71 1.11,-10.86 C0.96,-10.73 0.83,-10.51 0.83,-10.3 C0.83,-9.86 1.18,-9.52 1.61,-9.52 C1.78,-9.52 1.96,-9.59 2.08,-9.68 C2.86,-10.33 3.72,-10.66 4.75,-10.66 C6.18,-10.66 7.34,-10.01 7.34,-8.77 C7.34,-7.52 6.15,-6.98 4.68,-6.98 C4.68,-6.98 4.08,-6.98 4.08,-6.98 C3.64,-6.98 3.26,-6.62 3.26,-6.18 C3.26,-5.73 3.64,-5.37 4.08,-5.37 C4.08,-5.37 4.68,-5.37 4.68,-5.37 C6.44,-5.37 7.52,-4.8 7.52,-3.46 C7.52,-2.19 6.53,-1.4 4.86,-1.4 C3.75,-1.4 2.76,-1.79 1.98,-2.45 C1.85,-2.57 1.67,-2.65 1.49,-2.65 C1.03,-2.65 0.67,-2.28 0.67,-1.83 C0.67,-1.6 0.78,-1.38 0.94,-1.23 C1.85,-0.4 3.19,0.22 4.91,0.22z"
                        transform="matrix(1,0,0,1,16.95599937438965,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.05,-4.5 C9.05,-4.5 8.1,-4.5 8.1,-4.5 C8.1,-4.5 8.1,-10.6 8.1,-10.6 C8.1,-11.47 7.4,-12.18 6.53,-12.18 C5.98,-12.18 5.49,-11.89 5.22,-11.46 C5.22,-11.46 0.62,-4.5 0.62,-4.5 C0.53,-4.33 0.45,-4.15 0.45,-3.93 C0.45,-3.35 0.92,-2.9 1.49,-2.9 C1.49,-2.9 6.29,-2.9 6.29,-2.9 C6.29,-2.9 6.29,-0.82 6.29,-0.82 C6.29,-0.33 6.71,0.09 7.21,0.09 C7.7,0.09 8.1,-0.33 8.1,-0.82 C8.1,-0.82 8.1,-2.9 8.1,-2.9 C8.1,-2.9 9.05,-2.9 9.05,-2.9 C9.48,-2.9 9.86,-3.26 9.86,-3.7 C9.86,-4.13 9.48,-4.5 9.05,-4.5z M2.34,-4.5 C2.34,-4.5 6.29,-10.44 6.29,-10.44 C6.29,-10.44 6.29,-4.5 6.29,-4.5 C6.29,-4.5 2.34,-4.5 2.34,-4.5z"
                        transform="matrix(1,0,0,1,27.126001358032227,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.61,-1.14 C2.56,-0.29 3.77,0.22 5.49,0.22 C8.05,0.22 9.93,-1.34 9.93,-3.82 C9.93,-6.31 8.1,-7.7 6.07,-7.7 C4.89,-7.7 3.88,-7.21 3.3,-6.63 C3.3,-6.63 3.3,-10.5 3.3,-10.5 C3.3,-10.5 8.43,-10.5 8.43,-10.5 C8.86,-10.5 9.24,-10.84 9.24,-11.28 C9.24,-11.73 8.86,-12.09 8.43,-12.09 C8.43,-12.09 2.45,-12.09 2.45,-12.09 C1.83,-12.09 1.49,-11.75 1.49,-11.13 C1.49,-11.13 1.49,-6.09 1.49,-6.09 C1.49,-5.55 1.94,-5.09 2.5,-5.09 C2.76,-5.09 2.97,-5.17 3.15,-5.31 C3.86,-5.89 4.62,-6.13 5.51,-6.13 C7.07,-6.13 8.1,-5.2 8.1,-3.75 C8.1,-2.43 7.05,-1.4 5.47,-1.4 C4.33,-1.4 3.43,-1.74 2.68,-2.41 C2.54,-2.54 2.36,-2.61 2.16,-2.61 C1.7,-2.61 1.32,-2.25 1.32,-1.78 C1.32,-1.52 1.45,-1.29 1.61,-1.14z"
                        transform="matrix(1,0,0,1,37.36800003051758,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.83,-6.02 C0.83,-2.7 2.19,0.22 5.66,0.22 C8.32,0.22 10.01,-1.61 10.01,-3.79 C10.01,-6.36 8.18,-7.67 6,-7.67 C4.51,-7.67 3.21,-6.71 2.68,-5.89 C2.66,-6.02 2.66,-6.15 2.66,-6.29 C2.66,-8.54 3.77,-10.66 5.96,-10.66 C6.82,-10.66 7.41,-10.41 7.94,-10.01 C8.07,-9.9 8.23,-9.86 8.41,-9.86 C8.85,-9.86 9.21,-10.22 9.21,-10.66 C9.21,-10.93 9.06,-11.18 8.85,-11.31 C8.1,-11.91 7.16,-12.27 5.96,-12.27 C2.5,-12.27 0.83,-9.41 0.83,-6.02z M8.18,-3.73 C8.18,-2.66 7.31,-1.4 5.57,-1.4 C3.59,-1.4 2.85,-3.08 2.7,-4.5 C3.34,-5.46 4.42,-6.11 5.55,-6.11 C6.98,-6.11 8.18,-5.35 8.18,-3.73z"
                        transform="matrix(1,0,0,1,48.077999114990234,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M3.55,0.09 C3.92,0.09 4.24,-0.13 4.39,-0.45 C4.39,-0.45 9.03,-10.88 9.03,-10.88 C9.06,-10.99 9.1,-11.09 9.1,-11.22 C9.1,-11.71 8.7,-12.09 8.23,-12.09 C8.23,-12.09 1.23,-12.09 1.23,-12.09 C0.8,-12.09 0.44,-11.73 0.44,-11.28 C0.44,-10.84 0.8,-10.5 1.23,-10.5 C1.23,-10.5 6.91,-10.5 6.91,-10.5 C6.91,-10.5 2.74,-1.18 2.74,-1.18 C2.68,-1.07 2.65,-0.94 2.65,-0.8 C2.65,-0.31 3.05,0.09 3.55,0.09z"
                        transform="matrix(1,0,0,1,58.805999755859375,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.85,-3.08 C0.85,-0.96 2.9,0.22 5.35,0.22 C7.76,0.22 9.81,-0.98 9.81,-3.08 C9.81,-4.66 8.5,-5.76 7.02,-6.24 C8.39,-6.65 9.63,-7.56 9.63,-9.12 C9.63,-11.31 7.4,-12.27 5.35,-12.27 C3.24,-12.27 1.05,-11.31 1.05,-9.12 C1.05,-7.56 2.27,-6.65 3.64,-6.24 C2.16,-5.76 0.85,-4.66 0.85,-3.08z M7.79,-8.85 C7.79,-7.56 6.09,-7.09 5.35,-6.96 C4.6,-7.09 2.88,-7.56 2.88,-8.85 C2.88,-9.99 3.93,-10.66 5.35,-10.66 C6.71,-10.66 7.79,-9.99 7.79,-8.85z M7.99,-3.3 C7.99,-2.12 6.74,-1.4 5.35,-1.4 C3.9,-1.4 2.68,-2.12 2.68,-3.3 C2.68,-4.71 4.59,-5.33 5.35,-5.42 C6.07,-5.33 7.99,-4.71 7.99,-3.3z"
                        transform="matrix(1,0,0,1,68.22000122070312,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.94,-0.76 C2.72,-0.16 3.64,0.2 4.84,0.2 C8.28,0.2 9.97,-2.66 9.97,-6.04 C9.97,-9.37 8.61,-12.29 5.13,-12.29 C2.47,-12.29 0.78,-10.44 0.78,-8.28 C0.78,-5.71 2.63,-4.39 4.8,-4.39 C6.27,-4.39 7.58,-5.37 8.14,-6.18 C8.14,-6.18 8.14,-5.76 8.14,-5.76 C8.14,-3.63 7.16,-1.41 4.84,-1.41 C3.97,-1.41 3.37,-1.67 2.86,-2.07 C2.74,-2.16 2.57,-2.21 2.41,-2.21 C1.98,-2.21 1.61,-1.85 1.61,-1.41 C1.61,-1.14 1.74,-0.89 1.94,-0.76z M8.08,-7.58 C7.47,-6.6 6.36,-5.96 5.26,-5.96 C3.82,-5.96 2.63,-6.73 2.63,-8.34 C2.63,-9.41 3.5,-10.68 5.22,-10.68 C7.2,-10.68 7.98,-8.97 8.08,-7.58z"
                        transform="matrix(1,0,0,1,78.80400085449219,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,89.5320053100586,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.83,-6.04 C0.83,-3.05 2.21,0.22 5.57,0.22 C8.92,0.22 10.3,-3.05 10.3,-6.04 C10.3,-9.03 8.92,-12.27 5.57,-12.27 C2.21,-12.27 0.83,-9.03 0.83,-6.04z M8.45,-6.04 C8.45,-3.68 7.7,-1.4 5.57,-1.4 C3.43,-1.4 2.68,-3.68 2.68,-6.04 C2.68,-8.39 3.43,-10.66 5.57,-10.66 C7.7,-10.66 8.45,-8.39 8.45,-6.04z"
                        transform="matrix(1,0,0,1,95.99400329589844,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,107.04600524902344,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,113.50800323486328,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,119.97000122070312,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.65,0 C1.65,0 8.61,0 8.61,0 C9.05,0 9.43,-0.36 9.43,-0.82 C9.43,-1.25 9.05,-1.6 8.61,-1.6 C8.61,-1.6 3.68,-1.6 3.68,-1.6 C7,-4.15 9.26,-6.27 9.26,-8.63 C9.26,-11.04 7.21,-12.27 5.04,-12.27 C3.63,-12.27 2.25,-11.8 1.23,-10.89 C1.07,-10.75 0.94,-10.51 0.94,-10.28 C0.94,-9.82 1.31,-9.46 1.76,-9.46 C1.94,-9.46 2.12,-9.54 2.27,-9.64 C2.99,-10.26 3.92,-10.66 5.06,-10.66 C6.24,-10.66 7.41,-10.04 7.41,-8.63 C7.41,-6.76 5.42,-5.02 1.09,-1.72 C0.85,-1.54 0.71,-1.27 0.71,-0.96 C0.71,-0.42 1.14,0 1.65,0z"
                        transform="matrix(1,0,0,1,126.43199920654297,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,136.92601013183594,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.91,0.22 C7.65,0.22 9.34,-1.25 9.34,-3.28 C9.34,-5.18 7.67,-6.13 6.53,-6.24 C7.72,-6.45 9.15,-7.34 9.15,-9.03 C9.15,-11.06 7.38,-12.27 4.91,-12.27 C3.3,-12.27 2.05,-11.71 1.11,-10.86 C0.96,-10.73 0.83,-10.51 0.83,-10.3 C0.83,-9.86 1.18,-9.52 1.61,-9.52 C1.78,-9.52 1.96,-9.59 2.08,-9.68 C2.86,-10.33 3.72,-10.66 4.75,-10.66 C6.18,-10.66 7.34,-10.01 7.34,-8.77 C7.34,-7.52 6.15,-6.98 4.68,-6.98 C4.68,-6.98 4.08,-6.98 4.08,-6.98 C3.64,-6.98 3.26,-6.62 3.26,-6.18 C3.26,-5.73 3.64,-5.37 4.08,-5.37 C4.08,-5.37 4.68,-5.37 4.68,-5.37 C6.44,-5.37 7.52,-4.8 7.52,-3.46 C7.52,-2.19 6.53,-1.4 4.86,-1.4 C3.75,-1.4 2.76,-1.79 1.98,-2.45 C1.85,-2.57 1.67,-2.65 1.49,-2.65 C1.03,-2.65 0.67,-2.28 0.67,-1.83 C0.67,-1.6 0.78,-1.38 0.94,-1.23 C1.85,-0.4 3.19,0.22 4.91,0.22z"
                        transform="matrix(1,0,0,1,143.38800048828125,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,153.55799865722656,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.05,-4.5 C9.05,-4.5 8.1,-4.5 8.1,-4.5 C8.1,-4.5 8.1,-10.6 8.1,-10.6 C8.1,-11.47 7.4,-12.18 6.53,-12.18 C5.98,-12.18 5.49,-11.89 5.22,-11.46 C5.22,-11.46 0.62,-4.5 0.62,-4.5 C0.53,-4.33 0.45,-4.15 0.45,-3.93 C0.45,-3.35 0.92,-2.9 1.49,-2.9 C1.49,-2.9 6.29,-2.9 6.29,-2.9 C6.29,-2.9 6.29,-0.82 6.29,-0.82 C6.29,-0.33 6.71,0.09 7.21,0.09 C7.7,0.09 8.1,-0.33 8.1,-0.82 C8.1,-0.82 8.1,-2.9 8.1,-2.9 C8.1,-2.9 9.05,-2.9 9.05,-2.9 C9.48,-2.9 9.86,-3.26 9.86,-3.7 C9.86,-4.13 9.48,-4.5 9.05,-4.5z M2.34,-4.5 C2.34,-4.5 6.29,-10.44 6.29,-10.44 C6.29,-10.44 6.29,-4.5 6.29,-4.5 C6.29,-4.5 2.34,-4.5 2.34,-4.5z"
                        transform="matrix(1,0,0,1,160.02000427246094,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,170.2620086669922,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.61,-1.14 C2.56,-0.29 3.77,0.22 5.49,0.22 C8.05,0.22 9.93,-1.34 9.93,-3.82 C9.93,-6.31 8.1,-7.7 6.07,-7.7 C4.89,-7.7 3.88,-7.21 3.3,-6.63 C3.3,-6.63 3.3,-10.5 3.3,-10.5 C3.3,-10.5 8.43,-10.5 8.43,-10.5 C8.86,-10.5 9.24,-10.84 9.24,-11.28 C9.24,-11.73 8.86,-12.09 8.43,-12.09 C8.43,-12.09 2.45,-12.09 2.45,-12.09 C1.83,-12.09 1.49,-11.75 1.49,-11.13 C1.49,-11.13 1.49,-6.09 1.49,-6.09 C1.49,-5.55 1.94,-5.09 2.5,-5.09 C2.76,-5.09 2.97,-5.17 3.15,-5.31 C3.86,-5.89 4.62,-6.13 5.51,-6.13 C7.07,-6.13 8.1,-5.2 8.1,-3.75 C8.1,-2.43 7.05,-1.4 5.47,-1.4 C4.33,-1.4 3.43,-1.74 2.68,-2.41 C2.54,-2.54 2.36,-2.61 2.16,-2.61 C1.7,-2.61 1.32,-2.25 1.32,-1.78 C1.32,-1.52 1.45,-1.29 1.61,-1.14z"
                        transform="matrix(1,0,0,1,176.7239990234375,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,187.4340057373047,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.83,-6.02 C0.83,-2.7 2.19,0.22 5.66,0.22 C8.32,0.22 10.01,-1.61 10.01,-3.79 C10.01,-6.36 8.18,-7.67 6,-7.67 C4.51,-7.67 3.21,-6.71 2.68,-5.89 C2.66,-6.02 2.66,-6.15 2.66,-6.29 C2.66,-8.54 3.77,-10.66 5.96,-10.66 C6.82,-10.66 7.41,-10.41 7.94,-10.01 C8.07,-9.9 8.23,-9.86 8.41,-9.86 C8.85,-9.86 9.21,-10.22 9.21,-10.66 C9.21,-10.93 9.06,-11.18 8.85,-11.31 C8.1,-11.91 7.16,-12.27 5.96,-12.27 C2.5,-12.27 0.83,-9.41 0.83,-6.02z M8.18,-3.73 C8.18,-2.66 7.31,-1.4 5.57,-1.4 C3.59,-1.4 2.85,-3.08 2.7,-4.5 C3.34,-5.46 4.42,-6.11 5.55,-6.11 C6.98,-6.11 8.18,-5.35 8.18,-3.73z"
                        transform="matrix(1,0,0,1,193.89599609375,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,204.62400817871094,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M3.55,0.09 C3.92,0.09 4.24,-0.13 4.39,-0.45 C4.39,-0.45 9.03,-10.88 9.03,-10.88 C9.06,-10.99 9.1,-11.09 9.1,-11.22 C9.1,-11.71 8.7,-12.09 8.23,-12.09 C8.23,-12.09 1.23,-12.09 1.23,-12.09 C0.8,-12.09 0.44,-11.73 0.44,-11.28 C0.44,-10.84 0.8,-10.5 1.23,-10.5 C1.23,-10.5 6.91,-10.5 6.91,-10.5 C6.91,-10.5 2.74,-1.18 2.74,-1.18 C2.68,-1.07 2.65,-0.94 2.65,-0.8 C2.65,-0.31 3.05,0.09 3.55,0.09z"
                        transform="matrix(1,0,0,1,211.08599853515625,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,220.5,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.85,-3.08 C0.85,-0.96 2.9,0.22 5.35,0.22 C7.76,0.22 9.81,-0.98 9.81,-3.08 C9.81,-4.66 8.5,-5.76 7.02,-6.24 C8.39,-6.65 9.63,-7.56 9.63,-9.12 C9.63,-11.31 7.4,-12.27 5.35,-12.27 C3.24,-12.27 1.05,-11.31 1.05,-9.12 C1.05,-7.56 2.27,-6.65 3.64,-6.24 C2.16,-5.76 0.85,-4.66 0.85,-3.08z M7.79,-8.85 C7.79,-7.56 6.09,-7.09 5.35,-6.96 C4.6,-7.09 2.88,-7.56 2.88,-8.85 C2.88,-9.99 3.93,-10.66 5.35,-10.66 C6.71,-10.66 7.79,-9.99 7.79,-8.85z M7.99,-3.3 C7.99,-2.12 6.74,-1.4 5.35,-1.4 C3.9,-1.4 2.68,-2.12 2.68,-3.3 C2.68,-4.71 4.59,-5.33 5.35,-5.42 C6.07,-5.33 7.99,-4.71 7.99,-3.3z"
                        transform="matrix(1,0,0,1,226.96200561523438,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.26,0.09 C4.77,0.09 5.17,-0.33 5.17,-0.82 C5.17,-0.82 5.17,-11.13 5.17,-11.13 C5.17,-11.71 4.7,-12.18 4.11,-12.18 C3.81,-12.18 3.55,-12.05 3.35,-11.87 C3.35,-11.87 0.78,-9.24 0.78,-9.24 C0.65,-9.1 0.56,-8.92 0.56,-8.7 C0.56,-8.28 0.91,-7.94 1.32,-7.94 C1.54,-7.94 1.74,-8.03 1.89,-8.18 C1.89,-8.18 3.35,-9.72 3.35,-9.72 C3.35,-9.72 3.35,-0.82 3.35,-0.82 C3.35,-0.33 3.75,0.09 4.26,0.09z"
                        transform="matrix(1,0,0,1,237.54600524902344,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.94,-0.76 C2.72,-0.16 3.64,0.2 4.84,0.2 C8.28,0.2 9.97,-2.66 9.97,-6.04 C9.97,-9.37 8.61,-12.29 5.13,-12.29 C2.47,-12.29 0.78,-10.44 0.78,-8.28 C0.78,-5.71 2.63,-4.39 4.8,-4.39 C6.27,-4.39 7.58,-5.37 8.14,-6.18 C8.14,-6.18 8.14,-5.76 8.14,-5.76 C8.14,-3.63 7.16,-1.41 4.84,-1.41 C3.97,-1.41 3.37,-1.67 2.86,-2.07 C2.74,-2.16 2.57,-2.21 2.41,-2.21 C1.98,-2.21 1.61,-1.85 1.61,-1.41 C1.61,-1.14 1.74,-0.89 1.94,-0.76z M8.08,-7.58 C7.47,-6.6 6.36,-5.96 5.26,-5.96 C3.82,-5.96 2.63,-6.73 2.63,-8.34 C2.63,-9.41 3.5,-10.68 5.22,-10.68 C7.2,-10.68 7.98,-8.97 8.08,-7.58z"
                        transform="matrix(1,0,0,1,244.00799560546875,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="Up"
                      transform="matrix(1,0,0,1,90,98)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.34,-4.73 C1.34,-1.76 3.05,0.22 6.44,0.22 C9.82,0.22 11.51,-1.74 11.51,-4.75 C11.51,-4.75 11.51,-11.28 11.51,-11.28 C11.51,-11.76 11.11,-12.18 10.6,-12.18 C10.1,-12.18 9.68,-11.76 9.68,-11.28 C9.68,-11.28 9.68,-4.79 9.68,-4.79 C9.68,-2.72 8.56,-1.4 6.44,-1.4 C4.31,-1.4 3.17,-2.72 3.17,-4.79 C3.17,-4.79 3.17,-11.28 3.17,-11.28 C3.17,-11.76 2.77,-12.18 2.27,-12.18 C1.76,-12.18 1.34,-11.76 1.34,-11.28 C1.34,-11.28 1.34,-4.73 1.34,-4.73z"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.8,-8.97 C4.62,-8.97 3.59,-8.39 2.94,-7.52 C2.94,-7.52 2.94,-8.03 2.94,-8.03 C2.94,-8.48 2.56,-8.85 2.12,-8.85 C1.67,-8.85 1.31,-8.48 1.31,-8.03 C1.31,-8.03 1.31,2.61 1.31,2.61 C1.31,3.06 1.67,3.43 2.12,3.43 C2.56,3.43 2.94,3.06 2.94,2.61 C2.94,2.61 2.94,-1.27 2.94,-1.27 C3.64,-0.31 4.66,0.22 5.8,0.22 C8.08,0.22 9.7,-1.52 9.7,-4.39 C9.7,-7.25 8.08,-8.97 5.8,-8.97z M5.37,-1.23 C4.37,-1.23 3.37,-1.83 2.94,-2.52 C2.94,-2.52 2.94,-6.24 2.94,-6.24 C3.37,-6.94 4.37,-7.52 5.37,-7.52 C7,-7.52 7.99,-6.2 7.99,-4.39 C7.99,-2.56 7,-1.23 5.37,-1.23z"
                        transform="matrix(1,0,0,1,12.780000686645508,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="90"
                      transform="matrix(1,0,0,1,684.9340209960938,98)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.94,-0.76 C2.72,-0.16 3.64,0.2 4.84,0.2 C8.28,0.2 9.97,-2.66 9.97,-6.04 C9.97,-9.37 8.61,-12.29 5.13,-12.29 C2.47,-12.29 0.78,-10.44 0.78,-8.28 C0.78,-5.71 2.63,-4.39 4.8,-4.39 C6.27,-4.39 7.58,-5.37 8.14,-6.18 C8.14,-6.18 8.14,-5.76 8.14,-5.76 C8.14,-3.63 7.16,-1.41 4.84,-1.41 C3.97,-1.41 3.37,-1.67 2.86,-2.07 C2.74,-2.16 2.57,-2.21 2.41,-2.21 C1.98,-2.21 1.61,-1.85 1.61,-1.41 C1.61,-1.14 1.74,-0.89 1.94,-0.76z M8.08,-7.58 C7.47,-6.6 6.36,-5.96 5.26,-5.96 C3.82,-5.96 2.63,-6.73 2.63,-8.34 C2.63,-9.41 3.5,-10.68 5.22,-10.68 C7.2,-10.68 7.98,-8.97 8.08,-7.58z"
                        transform="matrix(1,0,0,1,-21.779998779296875,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M0.83,-6.04 C0.83,-3.05 2.21,0.22 5.57,0.22 C8.92,0.22 10.3,-3.05 10.3,-6.04 C10.3,-9.03 8.92,-12.27 5.57,-12.27 C2.21,-12.27 0.83,-9.03 0.83,-6.04z M8.45,-6.04 C8.45,-3.68 7.7,-1.4 5.57,-1.4 C3.43,-1.4 2.68,-3.68 2.68,-6.04 C2.68,-8.39 3.43,-10.66 5.57,-10.66 C7.7,-10.66 8.45,-8.39 8.45,-6.04z"
                        transform="matrix(1,0,0,1,-11.05199909210205,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      fill="rgb(41,47,54)"
                      font-size="18"
                      font-family="Proxima Soft"
                      font-style="normal"
                      font-weight="500"
                      aria-label="23"
                      transform="matrix(1,0,0,1,127.93399810791016,98)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.65,0 C1.65,0 8.61,0 8.61,0 C9.05,0 9.43,-0.36 9.43,-0.82 C9.43,-1.25 9.05,-1.6 8.61,-1.6 C8.61,-1.6 3.68,-1.6 3.68,-1.6 C7,-4.15 9.26,-6.27 9.26,-8.63 C9.26,-11.04 7.21,-12.27 5.04,-12.27 C3.63,-12.27 2.25,-11.8 1.23,-10.89 C1.07,-10.75 0.94,-10.51 0.94,-10.28 C0.94,-9.82 1.31,-9.46 1.76,-9.46 C1.94,-9.46 2.12,-9.54 2.27,-9.64 C2.99,-10.26 3.92,-10.66 5.06,-10.66 C6.24,-10.66 7.41,-10.04 7.41,-8.63 C7.41,-6.76 5.42,-5.02 1.09,-1.72 C0.85,-1.54 0.71,-1.27 0.71,-0.96 C0.71,-0.42 1.14,0 1.65,0z"
                        transform="matrix(1,0,0,1,-10.332000732421875,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M4.91,0.22 C7.65,0.22 9.34,-1.25 9.34,-3.28 C9.34,-5.18 7.67,-6.13 6.53,-6.24 C7.72,-6.45 9.15,-7.34 9.15,-9.03 C9.15,-11.06 7.38,-12.27 4.91,-12.27 C3.3,-12.27 2.05,-11.71 1.11,-10.86 C0.96,-10.73 0.83,-10.51 0.83,-10.3 C0.83,-9.86 1.18,-9.52 1.61,-9.52 C1.78,-9.52 1.96,-9.59 2.08,-9.68 C2.86,-10.33 3.72,-10.66 4.75,-10.66 C6.18,-10.66 7.34,-10.01 7.34,-8.77 C7.34,-7.52 6.15,-6.98 4.68,-6.98 C4.68,-6.98 4.08,-6.98 4.08,-6.98 C3.64,-6.98 3.26,-6.62 3.26,-6.18 C3.26,-5.73 3.64,-5.37 4.08,-5.37 C4.08,-5.37 4.68,-5.37 4.68,-5.37 C6.44,-5.37 7.52,-4.8 7.52,-3.46 C7.52,-2.19 6.53,-1.4 4.86,-1.4 C3.75,-1.4 2.76,-1.79 1.98,-2.45 C1.85,-2.57 1.67,-2.65 1.49,-2.65 C1.03,-2.65 0.67,-2.28 0.67,-1.83 C0.67,-1.6 0.78,-1.38 0.94,-1.23 C1.85,-0.4 3.19,0.22 4.91,0.22z"
                        transform="matrix(1,0,0,1,0.1620001345872879,0)"
                        opacity="1"
                        style={{ display: 'inherit' }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0,-1,1,0,55.000003814697266,100.87600708007812)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(137,222,166)"
                          fill-opacity="1"
                          d=" M7.447999954223633,16.88599967956543 C7.447999954223633,16.88599967956543 9.437999725341797,18.875999450683594 9.437999725341797,18.875999450683594 C9.437999725341797,18.875999450683594 18.875999450683594,9.437999725341797 18.875999450683594,9.437999725341797 C18.875999450683594,9.437999725341797 9.437999725341797,0 9.437999725341797,0 C9.437999725341797,0 7.447999954223633,1.9900000095367432 7.447999954223633,1.9900000095367432 C7.447999954223633,1.9900000095367432 13.48900032043457,8.031000137329102 13.48900032043457,8.031000137329102 C13.48900032043457,8.031000137329102 0,8.031000137329102 0,8.031000137329102 C0,8.031000137329102 0,10.845000267028809 0,10.845000267028809 C0,10.845000267028809 13.48900032043457,10.845000267028809 13.48900032043457,10.845000267028809 C13.48900032043457,10.845000267028809 7.447999954223633,16.88599967956543 7.447999954223633,16.88599967956543z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </AnimationLine>
            </div>
            <a href="/signup">
              <CenterSignupButton>Try for Free</CenterSignupButton>
            </a>
          </IndexAnalyticsContainer>
        </IndexAnalyticsWrapper>
      </Hero>
      <Footer>
        <FooterContainer>
          <FooterLeft>
            <p>
              Made with
              <img src={heartIcon} alt="Heart icon" />
              by
              <a
                href="https://www.linkedin.com/in/danny-sapio-035481108/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Danny
              </a>
              &amp;
              <a
                href="https://www.wilsonplau.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wilson
              </a>
            </p>
            <p style={{ fontSize: '16px', color: '#8f99a7' }}>
              Copyright © 2020
            </p>
          </FooterLeft>
          <FooterMid>
            <a href="/privacy">privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="mailto:hello@tryconfetti.io">hello@tryconfetti.io</a>
          </FooterMid>
          <div>
            <a
              href="https://twitter.com/confettihabits"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff' }}
            >
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </div>
        </FooterContainer>
      </Footer>
    </>
  );
}
