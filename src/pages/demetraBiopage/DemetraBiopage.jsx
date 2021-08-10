import React from "react";

import Banner from "../../components/banner/banner";

import "./demetraBiopage.scss";

const DemetraBioPage = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./Demetra_Noble.jpg`);
  
  return (

    <div className="demetraBio">
      <h1 className="fancy">Director of Coaching (DOC): Demetra Noble</h1>
      <Banner
        backgroundImage={imgsrc}
        teamName="Director of Coaching (DOC): Demetra Noble"
        // location={location}
      // /><img src={imgsrc} alt="Demetra" 
      />
      <h2>It is with great pleasure, FIRE FASTPITCH would like to announce the appointment of Demetra Noble as our Director of Coaching. Demetra will serve as a resource for all of our existing, new and future coaches. She will also advise the board on coaching initiatives and help the program expand our brand to include tournaments, college clinics and coaching education seminars.
      </h2>
      <br/>
      <h2>We believe in the 3 aspects of "Family First", which is one of many things that sets us apart from other organizations; albeit the foundation of who we are. We believe that having an organized, uniform, well educated coaching staff is the key to our future success. With the addition of Demetra, we believe that our coaching staff will be the most efficient, well rounded coaching group in the area.
      </h2>
      <br />
      <h2>Demetra has an impressive softball resume including a 15 year coaching stint at LaBrae(13 as the head coach and 2 as an assistant) accumulating 2 league titles, 2 regional runner ups and 2 district championships. This is an impressive stat considering she coached against perennial travelball - laiden powerhouse Champion, in the same league and district. That said, she flat out knows how to train and coach players to get the most from them as LaBrae rarely had more than 3 travel players on the roster year in and year out.
      </h2>
      <br />
      <h2>Demetra also spent 12 years as a travel softball coach before her high school career. She has also coached girls basketball for 17 years, as well as the past 3 years as a bowling coach. Demetra is a 12 year member of the OHSAA softball coaches association.
      </h2>
      <br />
      <h2>Her love of competition stems from her being the only female of 4 highly athletic siblings all of which were standout athletes. Her mother has been coaching softball for nearly 50 years now so competition and coaching are in her blood. Demetra has also played for the past 25 years for competitive womens slow pitch teams to fuel her competitive fire. She enjoys bowling and golfing with her husband Bob, who also coached with Demetra and was a OHSAA umpire for 11 years.
      </h2>
      <br />
      <h2>We understand quality coaching and skill development is paramount to the success of our girls and the overall performance of our program. We also believe in empowering our student athlete girls to become strong, independent, and well rounded people as well as fierce competitors. We wanted female leadership and Demetra was the clear choice at the top of our list and we are so proud to have her on board.
      </h2>
    </div>
  );
}

export default DemetraBioPage;