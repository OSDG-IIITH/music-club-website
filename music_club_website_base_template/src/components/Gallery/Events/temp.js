<div>
  <div className="section one">
    <div className="eventHeader">
      <div className="event-name">
        meltdown
      </div>
    </div>
  </div>
  <div className="section two">
    <div className="description">
      <div className="description-header">
      EVENT NAME
      <div className="row">
        <div className="col-md-6 description-content">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>

        <div className="col-md-6">
          <div className="poster">
            <img src='./images/Gallery/sample_poster.jpg'></img>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

@import url('https://fonts.googleapis.com/css2?family=Kristi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.section{
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}

.one{
  background-image: url('/images/Gallery/eventbg.jpg');
}

.two{
  background-image: url('/images/Gallery/two.jpg');
  /* background-color: black; */
  padding: 2vw 2vw 0 2vw;
}

.eventHeader{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eventHeader:hover{
  cursor: pointer;
}

.event-name{
  font-family: 'Kristi', cursive;
  font-size: 15vh;
  transition: font-size .2s;
}

.event-name:hover{
  font-size: 17vh;
}

.description{
  color: white;
}

.description-header{
  font-size: 5vh;
  text-align: center;
  font-weight: 500;
}

.description-content{
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  padding-top: 4vw;
  font-size: 2.5vh;
  text-align: left;
}

.poster img{
  border-style: solid;
  margin-top: 2vw;
  height: 80vh;
  width: 40vw;
  box-shadow: 5px 10px #888888;
}


<Route exact path="/login" component={Login} />
<Route exact path="/admin" component={Admin} />
<Route exact path="/logout" component={Logout} />

export default Home;
