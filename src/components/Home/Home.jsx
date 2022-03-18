import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="background">
      <div className="overlay">
        <Navbar />
        <div className="container">
          <div className="container1">
            <form className="home-form">
              {/* content should be here */}
              <h1 className="text-white my-5">This is our input</h1>




              <select name="" id="" className="trip mb-5 ml-2 " placeholder="date" >

                <option className="text-primary d-none" placeholder="trip" value="your favorite trip">Your favorite trip</option>
                <option value="">Shylet to Kolkata</option>
                <option value="">Kolkata to Shylet</option>
              </select>



              <br />



              <section class="container">
                <form>
                  <div class="row form-group">
                    {/* <label for="date" class="col-sm-1 col-form-label text-white">Date</label> */}
                    <div class="col-sm-4">
                      <div class="input-group date" id="datepicker">
                        <input placeholder="Date" type="text" class="form-control" />
                        <span class="input-group-append">
                          <span class="input-group-text bg-white d-block">
                            <i class="fa fa-calendar"></i>



                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </section>




              <button className="btn my-btn mx-auto text-white mt-5">check</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
