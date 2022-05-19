import React from 'react';

class Navbar extends React.Component {
    render() {return(
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">LVC</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/courses">All Courses</a></li>
            <li><a href="registration">Registration</a></li>
            <li><a href="/gallery">Photo Gallery</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>)
    }
  }

  export default Navbar;