import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
import AwesomeSlider from 'react-awesome-slider'
import styles from 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';
import './Home.css';

class Home extends Component {

  state = {
    isOnDisplay: true
  }

  fade = () => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '20%';
      this.eventDesc1.current.style.opacity = '20%';
      this.eventTitle1.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc1.current.style.transform = 'translate(-1100px , 0px)';
    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '20%';
      this.eventDesc2.current.style.opacity = '20%';
      this.eventTitle2.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc2.current.style.transform = 'translate(-1100px , 0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '20%';
      this.eventDesc3.current.style.opacity = '20%';
      this.eventTitle3.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc3.current.style.transform = 'translate(-1100px , 0px)';
    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '20%';
      this.eventDesc4.current.style.opacity = '20%';
      this.eventTitle4.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc4.current.style.transform = 'translate(-1100px , 0px)';
    }


  }

  bringBack = (e) => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '100%';
      this.eventDesc1.current.style.opacity = '100%';
      this.eventTitle1.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc1.current.style.transform = 'translate(0px , 0px)';

    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '100%';
      this.eventDesc2.current.style.opacity = '100%';
      this.eventTitle2.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc2.current.style.transform = 'translate(0px , 0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '100%';
      this.eventDesc3.current.style.opacity = '100%';
      this.eventTitle3.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc3.current.style.transform = 'translate(0px , 0px)';

    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '100%';
      this.eventDesc4.current.style.opacity = '100%';
      this.eventTitle4.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc4.current.style.transform = 'translate(0px , 0px)';
    }

  }

  eventTitle1 = React.createRef();
  eventDesc1 = React.createRef();
  eventTitle2 = React.createRef();
  eventDesc2 = React.createRef();
  eventTitle3 = React.createRef();
  eventDesc3 = React.createRef();
  eventTitle4 = React.createRef();
  eventDesc4 = React.createRef();

  render() {
    console.log(this.state.isOnDisplay)
    return (
      <React.Fragment>
        <div className="container-fluid mainDiv bg-white">
          <AwesomeSlider fillParent={false} className="carousel container-sm" cssModule={styles} transitionDelay={500} mobileTouch={true} bullets={true} onTransitionStart={this.fade} onTransitionEnd={this.bringBack}  >
            <div className=" container-sm  carouselDiv" id="img1">
              <div className="eventTextDiv container-xs" >
                <h1 className={"eventTitle text-center"} ref={this.eventTitle1}>Meltdown</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc1}>Where all the metal heads go Crazy</p>
              </div>
            </div>
            <div className="container-sm carouselDiv" id="img2">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle2}>Euphonic</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc2}>The dopest introduction to music club</p>
              </div>
            </div>
            <div className="container-sm carouselDiv" id="img3">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle3}>Unplugged</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc3}>Just raw beautiful talent , no wires attached</p>
              </div>
            </div>

            <div className="container-sm carouselDiv" id="img4">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle4}>Roadblock</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc4}>Bring the music to the streets</p>
              </div>
            </div>
          </AwesomeSlider>
        </div>
        <hr className='my-4' />
        <div className="jumbotron about">
          <h1 className='aboutHeadDiv py-5 px-4'>
            About
            </h1>
          <div className='row'>
            <div className='col-sm-8 aboutTextDiv card-blockquote'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit pellentesque bibendum. Donec eu ornare ex. Etiam pharetra dui elementum euismod mattis. Ut sollicitudin congue odio, sed tempor justo hendrerit vel. Vivamus fringilla dui a quam tincidunt finibus. Nullam sapien enim, ornare non condimentum in, pellentesque ac dolor. Donec vitae nibh eu magna accumsan maximus in sed magna. Ut accumsan gravida lectus. Maecenas eleifend nunc nisl, nec interdum augue fermentum a. Cras non ante quis turpis rhoncus eleifend. Aliquam ut facilisis diam. Nam egestas vehicula sem a pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tempus bibendum justo a fermentum. Praesent a mollis velit. Pellentesque euismod dui id leo finibus ullamcorper.
              Morbi eu leo diam. Fusce enim ante, fringilla a auctor ut, mollis id urna. Phasellus ligula risus, pretium non nulla at, eleifend vulputate elit. Donec luctus, nibh in sollicitudin pharetra, urna justo dictum lacus, nec tincidunt magna mauris et augue. Cras mattis nisi nec ex dictum venenatis. Mauris sed ipsum sapien. Quisque finibus neque lectus, quis congue libero ultrices ut. Nunc at bibendum nisi. Pellentesque fringilla vitae purus elementum convallis. Sed at venenatis lectus. Morbi vel lectus a sapien iaculis venenatis. Integer id ultrices sem. Duis venenatis arcu et arcu laoreet, accumsan porttitor elit fringilla. Pellentesque vitae sagittis enim. Nam sit amet eros porttitor, cursus nisl id, maximus nulla.
              Donec accumsan id nibh at venenatis. Pellentesque cursus mi vitae turpis ullamcorper, a dignissim erat porttitor. Proin scelerisque bibendum dolor, suscipit semper mi placerat sed. Etiam odio lorem, iaculis nec iaculis id, aliquam a sapien. Curabitur ultrices sit amet lacus sed ultrices. Nunc eget gravida turpis. Mauris tincidunt, orci et suscipit dapibus, nulla nisl laoreet ipsum, id semper elit nulla sed est. Phasellus ex augue, blandit sit amet dignissim vel, pellentesque non tellus. Praesent ornare facilisis iaculis. Mauris laoreet metus a sem facilisis posuere. Nulla facilisi. Aliquam interdum sem sed velit rhoncus, id accumsan nunc mollis.
              Mauris et fringilla diam. Vivamus faucibus ultricies eleifend. In hac habitasse platea dictumst. Cras eget libero non libero lobortis tincidunt sit amet a augue. Sed in dictum tellus, sed blandit elit. Etiam facilisis vitae lacus eget pharetra. Nam feugiat turpis eget risus tempor, id congue justo condimentum. Quisque consequat risus nulla, quis pharetra sem interdum a. Donec sed tellus in dui fermentum eleifend eu non enim. Morbi massa tortor, tempor et ipsum nec, consectetur lobortis massa. Sed dapibus feugiat eros, eu volutpat tortor egestas non. Vestibulum et scelerisque libero, quis tempus lacus. Integer ut varius tellus, et tincidunt metus. Donec ut iaculis nisl.
              Curabitur dui erat, aliquam ut tincidunt non, bibendum bibendum quam. Donec sagittis sem porta libero viverra, non auctor odio ultrices. Nulla cursus eget elit vitae tincidunt. Nam a nibh ut nunc lobortis egestas quis sed lacus. Curabitur viverra lectus enim, ac malesuada lorem laoreet venenatis. Sed dui tellus, aliquam laoreet interdum et, gravida eu dui. Sed rhoncus auctor mi eget placerat. Integer nec lacus et mi luctus interdum quis at nisl. Cras a leo vitae arcu iaculis facilisis. Nam et dignissim neque. Nam varius varius accumsan. Vestibulum rutrum fringilla fermentum. </div>
            <div className='col-sm-4 view overlay card card-img-top' id='image'>
            </div>
          </div>
          </div>
          <div className='jumbotron-fluid landingPageFooter'>
            <div className='text-center footer'>
              <span id='footer-note text-center'>
              &copy; Copyright: lorem-ipsum@gmail.com
              </span>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Home;