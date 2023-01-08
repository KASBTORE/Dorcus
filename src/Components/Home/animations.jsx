import React from 'react'
import { Zoom } from 'react-slideshow-image';
import Buttons from './buttons'
import 'react-slideshow-image/dist/styles.css';


function Animations(props) {
  const myButtons= props;
  const images = [
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
    "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

  return (
    <div className="lg:h-[100vh] h-[200vh] lg:w-full w-[567px] flex flex-col md:w-[768px] ">
      <div className="lg:h-[20%] h-[5%] w-full"></div>
      <div className="lg:h-[80vh] h-[85%] lg:w-full w-[90%] justify-center lg:flex lg:ml-0 ml-7 md:ml-9">
      <div className="lg:h-full h-1/2 lg:w-1/2 w-full">
      <Zoom scale={1.7} indicators={false} style={{marginTop:"-30px"}}>
            {images.map((each, index) => (
                <div className="lg:h-full h-[60%]" key={index} style={{ width: "100%",height:"60%",}}>
                    <div className="flex flex-col justify-center "style={{ objectFit: "cover", width: "100%" , height:"80vh",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",backgroundImage: "url(" + each + ")"}} >
                      <p className="text-base font-medium text-white ml-20 ">BANG & OLUFSEN</p>
                      <h1 className="text-7xl text-white font-semibold ml-20 mt-2 ">BEOPLAY A1</h1>
                      <p className="text-[#d9d9d9] font-normal ml-20 mt-16 text-lg ">KABSTORE is World's largest otd online marketpalce <br /> the connectin buyers with suppliers.</p>
                      <Buttons text={"EXPLORE NOW"}></Buttons>
                      {/* <button className="w-40 h-12 border border-white text-white font-bold ml-20 mt-16 hover:bg-white hover:text-black hover:transition hover:duration-700">EXPLORE NOW</button>  */}
                    </div>
                    
                </div>
            ))}
      </Zoom>
      </div>
      <div className="lg:h-full h-1/2 lg:w-1/2 flex flex-col   bg-white">
        <div className="lg:h-1/2 h-[50%]  w-full lg:flex md:flex">
          <div className="h-full lg:w-1/2 w-full bg-[url('Images/video-banner.jpg')] bg-center bg-no-repeat bg-cover object-contain scale-90 ">
          </div>

          <div className="h-full lg:w-1/2  w-full bg-[url('Images/page-3-banner.jpg')] hidden md:block bg-center bg-no-repeat bg-cover object-cover scale-90 flex flex-col justify-center " style={{}}>
            <h1 className="text-5xl text-white font-semibold ml-20 mt-2 "  >Music Monster</h1>
            <p className="text-[#d9d9d9] font-normal ml-20 mt-16 text-lg ">KABSTORE is World's largest otd online marketpalce the connectin buyers with suppliers.</p>
            <Buttons text={"SHOP NOW"}></Buttons>
          </div>
        </div>
        <div className="lg:h-1/2 h-1/2 w-full bg-[url('Images/page-3-banner-2.jpg')] bg-center bg-no-repeat bg-cover object-cover flex flex-col justify-center  ">
        <h1 className="text-5xl text-white font-semibold ml-20 mt-2 "  >XBOX 5</h1>
          <p className="text-[#d9d9d9] font-normal ml-20 mt-16 text-lg ">KABSTORE is World's largest otd online marketpalce <br /> the connectin buyers with suppliers.</p>
          <Buttons text={"SHOP NOW"}></Buttons>
        </div>
      </div>
      </div>
 
    </div>
  )
}

export default Animations