import "./rightBar.scss";
import Aulogo from "../../assets/aulogo.png";
import Notice from "../../assets/warning.png";
import Scholar from "../../assets/funds.png";
import Check from "../../assets/check.png";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
          <img src={Aulogo} class="logo" alt="ADAMAS UNIVERSITY LOGO" />

        {/* <div className="item">
        <span>Suggestions For You</span>
        <div className="user">
          <div className="userInfo">
            <img src="file:///C:/Users/Riddhi/Pictures/au5.jpg" alt=""/>
            <span>Riddhi Acharya</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>delete</button>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="file:///C:/Users/Riddhi/Pictures/au5.jpg" alt=""/>
            <span>Srabon Ghosh</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>delete</button>
          </div>
        </div>
        </div> */}
        <div className="item">
        <img src={Notice} class="logos" alt="ADAMAS UNIVERSITY LOGO" />
          <span>Latest Notifications</span>
          <div className="user">
            <div className="userInfo">
              <p>
                <span>STAIR-2023</span>
                <br />
                Greetings to you!!
                <br />
                We cordially invite you to our international student symposium
                <br />
                Dates:19th and 20th April 2023
                <br />
                Time:10 AM onward
                <br />
              </p>
            </div>
            +
          </div>
          <div className="user">
            <div className="userInfo">
              <p>
                <span>Payment of Fee</span>
                <br />
                Dear Student,
                <br />
                Please find attached the Notice Ref No: AU/REG/NOT/2023/04/003,
                dated 13.04.2023 regarding payment of fee (Semester,
                Hostel/Transport).
                <br />
                You are advised to pay fee by 15th May 2023.
                <br />
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <p>
                <span>BASANTA UTSAV 2023</span>
                <br />
                Dear Student,
                <br />
                Kindly find enclosed the Notification dated 06.03.2023,
                regarding suspension of classes due to celebration of Basanta
                Utsav 2023.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="item">
        <img src={Scholar} class="logos" alt="ADAMAS UNIVERSITY LOGO" />
          <span>Scholarship Programmes 2023 </span>
          <div className="user">
            <div className="userInfo">
              <p>
                {/* <div className="online" /> */}
                <span>
                <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Scholarships for students on the basis of AUAT
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Scholarships for students on the basis of marks/CGPA
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  JEE-2023 Scholarship
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  WBJEE-2023 Scholarship
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Scholarships to students seeking admission to MBA programs
                  on the basis of CAT/MAT/CMAT/ATMA
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Sports Scholarship
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  CLAT-2023 Scholarship
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Merit cum Means Scholarship
                  <br />
                  <img src={Check} class="check" alt="ADAMAS UNIVERSITY LOGO" />
                  Scholarship for the wards of DEFENCE Personnel
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
