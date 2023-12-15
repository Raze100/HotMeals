import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../src/logo-without-bg.png"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FooterCSS from '../components/FooterCSS.css'

export default function footer() {
  return (
    <MDBFooter bgColor='warning' className='footer'>
      <div className='socials'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div >
          <a href='www.facebook.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </div>

      <div className='details-sec'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                <img className="mb-3"src={logo} width={30} height={30} />
                HotMeals
              </h6>
              <p>
                HotMeals is an online food ordering website to fulfill your cravings of food at anytime irrespective of the time and location.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Starter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pizza
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Biryani Rice/Rice
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chinese
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact US</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New Delhi, ND India
              </p>
              <p>
                <MDBIcon color='secondary' icon='fa fa-envelope' className='me-3' />
                hotMeals@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className='text-center p-4' >
        © 2023 Copyright: HotMeals
        <hr/>
        <a className='text-reset fw-bold' href="">
        Made by Rohit Rawat
        </a>
        <Link to="/"><img className="mb-3 content-right ms-5"src={logo} width={100} height={100} /></Link>
      </div>
    </MDBFooter>
  );
}