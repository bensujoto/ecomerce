import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }

  render() {
    return (
      <div>
        <div className="banner_top" id="home">
      		<div className="wrapper_top_w3layouts">

      			<div className="header_agileits">
      				<div className="logo">
      					<h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
      				</div>
      				<div className="overlay overlay-contentpush">
      					<button type="button" className="overlay-close"><i className="fa fa-times" aria-hidden="true"></i></button>

      					<nav>
      						<ul>
      							<li><a href="index.html" className="active">Home</a></li>
      							<li><a href="about.html">About</a></li>
      							<li><a href="404.html">Team</a></li>
      							<li><a href="shop.html">Shop Now</a></li>
      							<li><a href="contact.html">Contact</a></li>
      						</ul>
      					</nav>
      				</div>
      				<div className="mobile-nav-button">
      					<button id="trigger-overlay" type="button"><i className="fa fa-bars" aria-hidden="true"></i></button>
      				</div>

      				<div className="top_nav_right">
      					<div className="shoecart shoecart2 cart cart box_1">
      						<form action="#" method="post" className="last">
      							<input type="hidden" name="cmd" value="_cart"/>
      							<input type="hidden" name="display" value="1"/>
      							<button className="top_shoe_cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
      						</form>
      					</div>

      				</div>
      				<div className="search_w3ls_agileinfo">
      					<div className="cd-main-header">
      						<ul className="cd-header-buttons">
      							<li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
      						</ul>
      					</div>
      					<div id="cd-search" className="cd-search">
      						<form action="#" method="post">
      							<input name="Search" type="search" placeholder="Click enter after typing..."/>
      						</form>
      					</div>
      				</div>

      				<div className="clearfix"></div>
      			</div>
      			<div className="slider">
      				<div className="callbacks_container">
      					<ul className="rslides callbacks callbacks1" id="slider4">

      						<li>
      							<div className="banner-top2">
      								<div className="banner-info-wthree">
      									<h3>Nike</h3>
      									<p>See how good they feel.</p>

      								</div>

      							</div>
      						</li>
      						<li>
      							<div className="banner-top3">
      								<div className="banner-info-wthree">
      									<h3>Heels</h3>
      									<p>For All Walks of Life.</p>

      								</div>

      							</div>
      						</li>
      						<li>
      							<div className="banner-top">
      								<div className="banner-info-wthree">
      									<h3>Sneakers</h3>
      									<p>See how good they feel.</p>

      								</div>

      							</div>
      						</li>
      						<li>
      							<div className="banner-top1">
      								<div className="banner-info-wthree">
      									<h3>Adidas</h3>
      									<p>For All Walks of Life.</p>

      								</div>

      							</div>
      						</li>
      					</ul>
      				</div>
      				<div className="clearfix"> </div>
      			</div>
      			<ul className="top_icons">
      				<li><a href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
      				<li><a href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
      				<li><a href="#"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
      				<li><a href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a></li>

      			</ul>
      		</div>
      	</div>
      	<div className="grids_bottom">
      		<div className="style-grids">
      			<div className="col-md-6 style-grid style-grid-1">
      				<img src="images/b1.jpg" alt="shoe"/>
      			</div>
      		</div>
      		<div className="col-md-6 style-grid style-grid-2">
      			<div className="style-image-1_info">
      				<div className="style-grid-2-text_info">
      					<h3>Nike DOWNSHIFTER</h3>
      					<p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
      						tempora incidunt ut labore et dolore .</p>
      					<div className="shop-button">
      						<a href="shop.html">Shop Now</a>
      					</div>
      				</div>
      			</div>
      			<div className="style-image-2">
      				<img src="images/b2.jpg" alt="shoe"/>
      				<div className="style-grid-2-text">
      					<h3>Air force</h3>
      				</div>
      			</div>
      		</div>
      		<div className="clearfix"></div>
      	</div>
      	<div className="grids_sec_2">
      		<div className="style-grids_main">
      			<div className="col-md-6 grids_sec_2_left">
      				<div className="grid_sec_info">
      					<div className="style-grid-2-text_info">
      						<h3>Sneakers</h3>
      						<p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
      							tempora incidunt ut labore .</p>
      						<div className="shop-button">
      							<a href="shop.html">Shop Now</a>
      						</div>
      					</div>
      				</div>
      				<div className="style-image-2">
      					<img src="images/b4.jpg" alt="shoe"/>
      					<div className="style-grid-2-text">
      						<h3>Air force</h3>
      					</div>
      				</div>
      			</div>
      			<div className="col-md-6 grids_sec_2_left">

      				<div className="style-image-2">
      					<img src="images/b3.jpg" alt="shoe"/>
      					<div className="style-grid-2-text">
      						<h3>Air force</h3>
      					</div>
      				</div>
      				<div className="grid_sec_info last">
      					<div className="style-grid-2-text_info">
      						<h3>Sneakers</h3>
      						<p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
      							tempora incidunt ut labore .</p>
      						<div className="shop-button two">
      							<a href="shop.html">Shop Now</a>
      						</div>
      					</div>
      				</div>
      			</div>
      			<div className="clearfix"></div>
      		</div>
      	</div>
      	<div className="mid_slider_w3lsagile">
      		<div className="col-md-3 mid_slider_text">
      			<h5>Some More Shoes</h5>
      		</div>
      		<div className="col-md-9 mid_slider_info">
      			<div id="myCarousel" className="carousel slide" data-ride="carousel">
      				<ol className="carousel-indicators">
      					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      					<li data-target="#myCarousel" data-slide-to="1" className=""></li>
      					<li data-target="#myCarousel" data-slide-to="2" className=""></li>
      					<li data-target="#myCarousel" data-slide-to="3" className=""></li>
      				</ol>
      				<div className="carousel-inner" role="listbox">
      					<div className="item active">
      						<div className="row">
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
      							</div>
      						</div>
      					</div>
      					<div className="item">
      						<div className="row">
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g5.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g6.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
      							</div>
      						</div>
      					</div>
      					<div className="item">
      						<div className="row">
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
      							</div>
      						</div>
      					</div>
      					<div className="item">
      						<div className="row">
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
      							</div>
      							<div className="col-md-3 col-sm-3 col-xs-3 slidering">
      								<div className="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      			<span className="fa fa-chevron-left" aria-hidden="true"></span>
      			<span className="sr-only">Previous</span>
      		</a>
      				<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      			<span className="fa fa-chevron-right" aria-hidden="true"></span>
      			<span className="sr-only">Next</span>
      		</a>

      			</div>
      		</div>

      		<div className="clearfix"> </div>
      	</div>

      	<div className="newsletter_w3layouts_agile">
      		<div className="col-sm-6 newsleft">
      			<h3>Sign up for Newsletter !</h3>
      		</div>
      		<div className="col-sm-6 newsright">
      			<form action="#" method="post">
      				<input type="email" placeholder="Enter your email..." name="email" required=""/>
      				<input type="submit" value="Submit"/>
      			</form>
      		</div>

      		<div className="clearfix"></div>
      	</div>
      	<div className="footer_agileinfo_w3">
      		<div className="footer_inner_info_w3ls_agileits">
      			<div className="col-md-3 footer-left">
      				<h2><a href="index.html"><span>D</span>owny Shoes </a></h2>
      				<p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
      				<ul className="social-nav model-3d-0 footer-social social two">
      					<li>
      						<a href="#" className="facebook">
      							<div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
      							<div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div>
      						</a>
      					</li>
      					<li>
      						<a href="#" className="twitter">
      							<div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
      							<div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div>
      						</a>
      					</li>
      					<li>
      						<a href="#" className="instagram">
      							<div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
      							<div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div>
      						</a>
      					</li>
      					<li>
      						<a href="#" className="pinterest">
      							<div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
      							<div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
      						</a>
      					</li>
      				</ul>
      			</div>
      			<div className="col-md-9 footer-right">
      				<div className="sign-grds">
      					<div className="col-md-4 sign-gd">
      						<h4>Our <span>Information</span> </h4>
      						<ul>
      							<li><a href="index.html">Home</a></li>
      							<li><a href="about.html">About</a></li>
      							<li><a href="404.html">Services</a></li>
      							<li><a href="404.html">Short Codes</a></li>
      							<li><a href="contact.html">Contact</a></li>
      						</ul>
      					</div>

      					<div className="col-md-5 sign-gd-two">
      						<h4>Store <span>Information</span></h4>
      						<div className="address">
      							<div className="address-grid">
      								<div className="address-left">
      									<i className="fa fa-phone" aria-hidden="true"></i>
      								</div>
      								<div className="address-right">
      									<h6>Phone Number</h6>
      									<p>+1 234 567 8901</p>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="address-grid">
      								<div className="address-left">
      									<i className="fa fa-envelope" aria-hidden="true"></i>
      								</div>
      								<div className="address-right">
      									<h6>Email Address</h6>
      									<p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      							<div className="address-grid">
      								<div className="address-left">
      									<i className="fa fa-map-marker" aria-hidden="true"></i>
      								</div>
      								<div className="address-right">
      									<h6>Location</h6>
      									<p>Broome St, NY 10002,California, USA.

      									</p>
      								</div>
      								<div className="clearfix"> </div>
      							</div>
      						</div>
      					</div>
      					<div className="col-md-3 sign-gd flickr-post">
      						<h4>Flickr <span>Posts</span></h4>
      						<ul>
      							<li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
      							<li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
      						</ul>
      					</div>
      					<div className="clearfix"></div>
      				</div>
      			</div>
      			<div className="clearfix"></div>

      			<p className="copy-right-w3ls-agileits">&copy 2018 Downy Shoes. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Home;
