import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'
import Layout from '../components/layout.jsx'
// import './style.css'

const Home = (props) => (
  <Layout>
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 mb15">
        <div className="circle-image">
          <img src="static/images/tianhuil.jpg" className="img img-responsive full-wdith"/>
        </div>
      </div>
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-0 mb15">
        <p>
          <b>Hi! I'm Tianhui Li, but I go by "Michael". I'm a data scientist and an entrepreneur.</b>
        </p>

        <p>
          Currently, I'm the founder of <a href="https://www.thedataincubator.com">The Data Incubator</a>, a data science training and placement company.  Previously, I worked at <a href="https://foursquare.com">Foursquare</a>, <a href="https://www.google.com">Google</a>, <a href="a16z.com">Andreessen Horowitz</a>, <a href="https://www.jpmorgan.com/">J.P. Morgan</a>, <a href="https://www.deshaw.com/">D.E. Shaw</a>, and <a href="https://www.nasa.gov">NASA</a>.
        </p>

        <p>
          I'm very passionate about <Link href="/professional#boards">non-profit causes</Link> around education and <Link href="/writing">write regularly</Link> about data science and big data.
        </p>

        <p>
          I did my PhD at <a href="https://www.princeton.edu/">Princeton</a> as a <a href="http://hertzfoundation.org/">Hertz Fellow</a> and a <a href="https://www.nsfgrfp.org/">National Science Foundation Fellow</a> and read <a href="https://www.maths.cam.ac.uk/postgrad/mathiii">Part III of the Mathematics Tripos</a> at <a href="https://www.cam.ac.uk">Cambridge</a> as a <a href="www.marshallscholarship.org">Marshall Scholar</a>.
        </p>

        <p>
          我说普通话和广州话。中文名字“李天惠”。
        </p>
        <p>
          Je parle aussi le français, mais pas très bien.  Les Français m'appellent Michel.
        </p>
        <div className="mt30">
          <SocialIcon className="social-icon" url="https://twitter.com/tianhuil" />
          <SocialIcon className="social-icon" url="https://www.linkedin.com/in/tianhuili" />
          <SocialIcon className="social-icon" url="https://github.com/tianhuil" />
        </div>
        <style jsx>{`
          .circle-image {
              position:relative;
              overflow:hidden;
              padding-bottom:100%;
              border-radius:50%;
          }
          .circle-image img{
              position:absolute;
              width:100%;
          }

          .social-icon {
            margin-right: 10px;
          }
        `}</style>
      </div>
    </div>
  </Layout>
)

export default Home