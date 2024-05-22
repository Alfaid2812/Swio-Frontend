import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import appsleeve from "./images/AppSleeve.png";
import appdopler from "./images/AppDoppler@2x.png";
import appmusic from "./images/AppMusic@2x.png";
import appspotify from "./images/AppSpotify@2x.png";
import artSlowMagic from "./images/ArtSlowMagic.jpg";
import artCarolinePolachek from "./images/ArtCarolinePolachek.jpg";
import artChelseaCutler from "./images/ArtChelseaCutler.jpg";
import artPetitBiscuit from "./images/ArtPetitBiscuit.jpg";
import hero from "./images/Hero@2x.png";
class Home extends React.Component {
  render() {
    const app1 = {
      height: "175px",
      width: "175x",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 70%, transparent 30%)",
    };
    const maindiv = {
      display: "flex",
      flexDirection: "column",
    };
    const app1div = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      gap: "",
    };
    const title = {
      width: "100%",
      height: "fit-content",
      textAlign: "center",
      fontSize: "24px",
    };
    const inlineStyles = {
      mainContainer: {
        fontSize: "10px",
        color: "#4e4e4e",
        textAlign: "center",
      },
      iconContainer: {
        position: "relative",
        top: "2px",
        display: "inline-flex",
        width: "1.25rem",
        height: "1.25rem",
        marginRight: "0.25rem",
        transition: "opacity ease 0.5s, transform ease 0.5s",
        transitionDelay: "0.5s",
      },
      iconImage: {
        width: "12px",
        height: "12px",
      },
    };

    const galleryStyle = {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      overflow: "hidden",
    };

    const itemStyle = {
      paddingTop: "3px",
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      zIndex: 20,
    }; 
    const imageContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
      padding: "4px",
      borderRadius: "2xl",
      position: "relative",
      width: "24px",
      height: "24px",
    };
    const isDarkMode = true;

    return (
      <div style={maindiv}>
        <div className="app1" style={app1div}>
          {/* <img src={appsleeve} alt ="appsleve img" style={app1}/>
            <div style={app1}></div> */}
          <img
            src={appsleeve}
            alt="Descriptive Text"
            style={{
              height: "130px",
              width: "130px",
              display: "block",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(255, 255, 255, -10) 24%, rgba(255, 255, 255, 100) 50%)",
            }}
          />
        </div>
        <div style={title}>
          <h1 style={{ margin: "-45px", fontSize: "50px" }}>
            {" "}
            Sleeve <span style={{ fontWeight: "300" }}>2</span>
          </h1>
          <p style={{ marginTop: "60px", fontWeight: "bold" }}>
            The ultimate music accessory for your Mac.
          </p>
          <div style={inlineStyles.mainContainer}>
            Sleeve sits on the desktop, displaying and controlling the music
            you’re currently playing in{" "}
            <span
              style={{
                ...inlineStyles.iconContainer,
                marginTop: "2px 0 0 0",
                width: "12px",
              }}
            >
              <img
                src={appmusic}
                style={inlineStyles.iconImage}
                alt="Apple Music Icon"
              />
            </span>
            Apple Music,{" "}
            <span
              style={{
                ...inlineStyles.iconContainer,
                marginTop: "2px",
                width: "12px",
              }}
            >
              <img
                src={appspotify}
                style={inlineStyles.iconImage}
                alt="Spotify Icon"
              />
            </span>{" "}
            Spotify, and{" "}
            <span
              style={{
                ...inlineStyles.iconContainer,
                marginTop: "2px 0 0 0",
                width: "12px",
              }}
            >
              <img
                src={appdopler}
                style={inlineStyles.iconImage}
                alt="Doppler Icon"
              />
            </span>{" "}
            Doppler.
          </div>
          <div style={{ display: "flex", flexDirection: "column",gap:"2rem" }}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "auto",
                width: "40%"
              }}
            >
              {/* two icons with button functionality */}
              <div style={{display:"flex",borderRadius:"10px",backgroundColor:"black",height:"50px",width:"40%",marginTop:"1rem" }}>
                <FontAwesomeIcon icon={faApple} style={{ color: "white",justifyContent:"space-around",marginTop:"auto",marginBottom:"auto",marginLeft:"auto" }} />
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                <p style={{color:"white",fontSize:"1rem",margin:"auto",marginLeft:"0.6rem",marginRight:"auto"}}>Mac App Store</p>
              </div>
              <div style={{display:"flex",borderRadius:"10px",border:"1px solid black",height:"50px",width:"40%",marginTop:"1rem" ,backgroundColor:"#0000000d"}} className="buyStyle">
                {/* <FontAwesomeIcon icon={faApple} style={{ color: "white",justifyContent:"space-around",margin:"auto" }} /> */}
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                <p style={{fontSize:"1rem",marginLeft:"auto",marginTop:"auto",marginBottom:"auto",fontWeight:"600"}}>Buy Directly </p>
                <div style={{backgroundColor:"black",borderRadius:"20px",height:"40%",width:"20%",marginRight:"auto",marginTop:"auto",marginBottom:"auto",marginLeft:"auto"}}><p style={{color:"#eaeced",fontSize:"0.9rem",margin:"auto"}}>$5.99</p></div>
              </div>
            </div>
            </div>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
              <p style={{color:"#7a7878a5",fontSize:"0.875rem",lineHeight:"1.25rem",opacity:"0.5",maxWidth:"32ch"}}> No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* text and icon  */}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            <small
              style={{
                color: "#0D9EFF",
                dark: "text-[#5DB7D2] ",
                fontSize: "0.6rem",
                gap: "1.5rem",
                font: "semi-bold",
              }}
            >
              NEW IN{" "}
              <span
                style={{
                  padding: "0.125rem 0.25rem",
                  fontSize: "0.50rem",
                  color: "#FFFFFF",
                  backgroundColor: "#0D9EFF",
                  borderRadius: "9px",
                }}
              >
                2.0
              </span>
            </small>
            {/* <small className="inline-flex gap-2 font-semibold text-[#0D9EFF] dark:text-[#5DB7D2] uppercase tracking-wider">New
          in <span className="px-1.5 py-0.5 pb-px text-xs text-white dark:text-black bg-[#0D9EFF] dark:bg-[#5DB7D2] rounded-full">2.0</span></small> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "95%",
                }}
              >
                <h3 style={{ margin: "0 0 0 0" }}>Themes. Unlimited themes</h3>
                <p style={{ fontSize: "1.25rem" }}>
                  Themes in Sleeve make creating and switching between
                  customizations easy. Share your own creations with friends and
                  install as many themes as you like with just a double-click.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width:"100%",
              overflow:"hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#2ea3f6ef",
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                width: "95%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // zIndex: "-1",
                height: "400px",
                // overflow: "hidden",
                // position: "absolute",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "120%",
                  // position: "absolute",
                  //   overflow:"hidden",
                  //   alignItems:"center",
                }}
              >
                <div>
                  <img
                    src={artSlowMagic}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "10px",
                      // overflow:"hidden"
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={artCarolinePolachek}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "10px",
                      //   overflow:"hidden",
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={artChelseaCutler}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "10px",
                      //   overflow:"hidden",
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={artPetitBiscuit}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "10px",
                      //   overflow:"hidden",
                    }}
                  ></img>
                </div>
                {/* <div>
              <img src={artSlowMagic}></img>
              <img src={artCarolinePolachek}></img>
              <img src={artChelseaCutler}></img>
              <img src={artPetitBiscuit}></img>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

