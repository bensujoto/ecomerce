import React, { Component } from 'react'

class About extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        <div class="banner_top innerpage" id="home">
        		<div class="wrapper_top_w3layouts">
        			<div class="header_agileits">
        				<div class="logo inner_page_log">
        					<h1><a class="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
        				</div>
        				<div class="overlay overlay-contentpush">
        					<button type="button" class="overlay-close"><i class="fa fa-times" aria-hidden="true"></i></button>

        					<nav>
        						<ul>
        							<li><a href="index.html" class="active">Home</a></li>
        							<li><a href="about.html">About</a></li>
        							<li><a href="404.html">Team</a></li>
        							<li><a href="shop.html">Shop Now</a></li>
        							<li><a href="contact.html">Contact</a></li>
        						</ul>
        					</nav>
        				</div>
        				<div class="mobile-nav-button">
        					<button id="trigger-overlay" type="button"><i class="fa fa-bars" aria-hidden="true"></i></button>
        				</div>
        				<div class="top_nav_right">
        					<div class="shoecart shoecart2 cart cart box_1">
        						<form action="#" method="post" class="last">
        							<input type="hidden" name="cmd" value="_cart"/>
        							<input type="hidden" name="display" value="1"/>
        							<button class="top_shoe_cart" type="submit" name="submit" value=""><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div class="search_w3ls_agileinfo">
        			<div class="cd-main-header">
        				<ul class="cd-header-buttons">
        					<li><a class="cd-search-trigger" href="#cd-search"> <span></span></a></li>
        				</ul>
        			</div>
        			<div id="cd-search" class="cd-search">
        				<form action="#" method="post">
        					<input name="Search" type="search" placeholder="Click enter after typing..."/>
        				</form>
        			</div>
        		</div>
        		<div class="clearfix"></div>
            <div class="services-breadcrumb_w3ls_agileinfo">
        			<div class="inner_breadcrumb_agileits_w3">

        				<ul class="short">
        					<li><a href="index.html">Home</a><i>|</i></li>
        					<li>About</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div class="ads-grid_shop">
        		<div class="shop_inner_inf">
        			<h3 class="head">About Us</h3>
        			<p class="head_para">Add Some Description</p>
        			<div class="inner_section_w3ls">
        				<div class="col-md-6 news-left">
        					<img src="images/ab.jpg" alt=" " class="img-responsive"/>
        				</div>
        				<div class="col-md-6 news-right">
        					<h4>Welcome to our Downy Shoes</h4>
        					<p class="sub_p">Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet
        						volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis
        						In semper lorem eget tortor pulvinar ultricies.
        					</p>
        					<p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet
        						volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis
        						. In semper lorem eget tortor pulvinar ultricies.
        					</p>
        				</div>
        				<div class="clearfix"> </div>
        			</div>
        		</div>

        	</div>
        	<div class="mid_services">
        		<div class="col-md-6 according_inner_grids">
        			<h3 class="heading two">Who We Are</h3>
        			<div class="according_info">
        				<div class="panel-group about_panel" id="accordion" role="tablist" aria-multiselectable="true">
        					<div class="panel panel-default">
        						<div class="panel-heading" role="tab" id="headingOne">
        							<h4 class="panel-title asd">
        								<a class="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
        								    aria-controls="collapseOne">
        							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>assumenda est cliche voluptate
        							</a>
        							</h4>
        						</div>
        						<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        							<div class="panel-body panel_text">
        								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        							</div>
        						</div>
        					</div>
        					<div class="panel panel-default">
        						<div class="panel-heading" role="tab" id="headingTwo">
        							<h4 class="panel-title asd">
        								<a class="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
        								    aria-controls="collapseTwo">
        							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>Itaque earum rerum
        							</a>
        							</h4>
        						</div>
        						<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
        							<div class="panel-body panel_text">
        								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        							</div>
        						</div>
        					</div>
        					<div class="panel panel-default">
        						<div class="panel-heading" role="tab" id="headingThree">
        							<h4 class="panel-title asd">
        								<a class="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
        								    aria-controls="collapseThree">
        							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>autem accusamus terry qui
        							</a>
        							</h4>
        						</div>
        						<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
        							<div class="panel-body panel_text">
        								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        							</div>
        						</div>
        					</div>
        					<div class="panel panel-default">
        						<div class="panel-heading" role="tab" id="headingThree">
        							<h4 class="panel-title asd">
        								<a class="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
        								    aria-controls="collapseThree">
        							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>autem accusamus terry qui
        							</a>
        							</h4>
        						</div>
        						<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
        							<div class="panel-body panel_text">
        								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>

        		</div>
        		<div class="col-md-6 mid_services_img">
        			<div class="bar-grids">
        				<h3 class="heading two three">Our Skills</h3>
        				<div class="skill_info">
        					<h6>Development<span> 95% </span></h6>
        					<div class="progress">
        						<div class="progress-bar progress-bar-striped active" style="width: 95%">
        						</div>
        					</div>
        					<h6>Pricing<span> 85% </span></h6>
        					<div class="progress">
        						<div class="progress-bar progress-bar-striped active" style="width: 85%">
        						</div>
        					</div>
        					<h6>Production <span>90% </span></h6>
        					<div class="progress">
        						<div class="progress-bar progress-bar-striped active" style="width: 90%">
        						</div>
        					</div>
        					<h6>Advertising <span>86% </span></h6>
        					<div class="progress prgs-last">
        						<div class="progress-bar progress-bar-striped active" style="width: 86%">
        						</div>
        					</div>
        				</div>
        			</div>

        		</div>
        		<div class="clearfix"> </div>
        	</div>
        	<div class="mid_slider_w3lsagile">
        		<div class="col-md-3 mid_slider_text">
        			<h5>Some More Shoes</h5>
        		</div>
        		<div class="col-md-9 mid_slider_info">
        			<div id="myCarousel" class="carousel slide" data-ride="carousel">
        				<ol class="carousel-indicators">
        					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        					<li data-target="#myCarousel" data-slide-to="1" class=""></li>
        					<li data-target="#myCarousel" data-slide-to="2" class=""></li>
        					<li data-target="#myCarousel" data-slide-to="3" class=""></li>
        				</ol>
        				<div class="carousel-inner" role="listbox">
        					<div class="item active">
        						<div class="row">
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
        							</div>
        						</div>
        					</div>
        					<div class="item">
        						<div class="row">
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g5.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g6.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
        							</div>
        						</div>
        					</div>
        					<div class="item">
        						<div class="row">
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
        							</div>
        						</div>
        					</div>
        					<div class="item">
        						<div class="row">
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g1.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g2.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g3.jpg" alt="Image"/></div>
        							</div>
        							<div class="col-md-3 col-sm-3 col-xs-3 slidering">
        								<div class="thumbnail"><img src="images/g4.jpg" alt="Image"/></div>
        							</div>
        						</div>
        					</div>
        				</div>
        				<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        			<span class="fa fa-chevron-left" aria-hidden="true"></span>
        			<span class="sr-only">Previous</span>
        		</a>
        				<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        			<span class="fa fa-chevron-right" aria-hidden="true"></span>
        			<span class="sr-only">Next</span>
        		</a>

        			</div>
        		</div>

        		<div class="clearfix"> </div>
        	</div>

        	<div class="newsletter_w3layouts_agile">
        		<div class="col-sm-6 newsleft">
        			<h3>Sign up for Newsletter !</h3>
        		</div>
        		<div class="col-sm-6 newsright">
        			<form action="#" method="post">
        				<input type="email" placeholder="Enter your email..." name="email" required=""/>
        				<input type="submit" value="Submit"/>
        			</form>
        		</div>

        		<div class="clearfix"></div>
        	</div>

        	<div class="footer_agileinfo_w3">
        		<div class="footer_inner_info_w3ls_agileits">
        			<div class="col-md-3 footer-left">
        				<h2><a href="index.html"><span>D</span>owny Shoes </a></h2>
        				<p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
        				<ul class="social-nav model-3d-0 footer-social social two">
        					<li>
        						<a href="#" class="facebook">
        							<div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
        							<div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div>
        						</a>
        					</li>
        					<li>
        						<a href="#" class="twitter">
        							<div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
        							<div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div>
        						</a>
        					</li>
        					<li>
        						<a href="#" class="instagram">
        							<div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
        							<div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div>
        						</a>
        					</li>
        					<li>
        						<a href="#" class="pinterest">
        							<div class="front"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
        							<div class="back"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
        						</a>
        					</li>
        				</ul>
        			</div>
        			<div class="col-md-9 footer-right">
        				<div class="sign-grds">
        					<div class="col-md-4 sign-gd">
        						<h4>Our <span>Information</span> </h4>
        						<ul>
        							<li><a href="index.html">Home</a></li>
        							<li><a href="about.html">About</a></li>
        							<li><a href="404.html">Services</a></li>
        							<li><a href="404.html">Short Codes</a></li>
        							<li><a href="contact.html">Contact</a></li>
        						</ul>
        					</div>

        					<div class="col-md-5 sign-gd-two">
        						<h4>Store <span>Information</span></h4>
        						<div class="address">
        							<div class="address-grid">
        								<div class="address-left">
        									<i class="fa fa-phone" aria-hidden="true"></i>
        								</div>
        								<div class="address-right">
        									<h6>Phone Number</h6>
        									<p>+1 234 567 8901</p>
        								</div>
        								<div class="clearfix"> </div>
        							</div>
        							<div class="address-grid">
        								<div class="address-left">
        									<i class="fa fa-envelope" aria-hidden="true"></i>
        								</div>
        								<div class="address-right">
        									<h6>Email Address</h6>
        									<p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
        								</div>
        								<div class="clearfix"> </div>
        							</div>
        							<div class="address-grid">
        								<div class="address-left">
        									<i class="fa fa-map-marker" aria-hidden="true"></i>
        								</div>
        								<div class="address-right">
        									<h6>Location</h6>
        									<p>Broome St, NY 10002,California, USA.

        									</p>
        								</div>
        								<div class="clearfix"> </div>
        							</div>
        						</div>
        					</div>
        					<div class="col-md-3 sign-gd flickr-post">
        						<h4>Flickr <span>Posts</span></h4>
        						<ul>
        							<li><a href="single.html"><img src="images/t1.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t3.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t4.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t1.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t3.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t2.jpg" alt=" " class="img-responsive" /></a></li>
        							<li><a href="single.html"><img src="images/t4.jpg" alt=" " class="img-responsive" /></a></li>
        						</ul>
        					</div>
        					<div class="clearfix"></div>
        				</div>
        			</div>
        			<div class="clearfix"></div>

        			<p class="copy-right-w3ls-agileits">&copy 2018 Downy Shoes. All rights reserved | Design by <a href="http://w3layouts.com/">w3layouts</a></p>
        		</div>
        	</div>
        	</div>
      
    )
  }
}
export default About
