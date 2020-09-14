import React from 'react'
import Layout from '../components/layout'
import { Logo } from '../components/logo'

const Company = (props) => (
  <div className={props.className ? props.className : 'mt-3 col-xs-6 col-sm-4'}>
    <Logo src={props.src} url={props.url} />
  </div>
)

const Section = (props) => (
  <section id={props.id} className="mb-5">
    <div className="row">
      <div className="col-xs-12">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
    {props.children}
  </section>
)

const Professional = (props) => (
  <Layout>
    {/* Companies */}
    <Section
      id="companies"
      title="Companies"
      subtitle="Selected companies that for which I have worked"
    >
      <div className="row">
        <Company src="/images/google.png" url="https://www.google.com" />
        <Company src="/images/foursquare.png" url="https://foursquare.com" />
        <div className="clearfix visible-xs"></div>
        <Company src="/images/a16z.png" url="https://a16z.com" />
        <div className="clearfix visible-sm visible-md visible-lg"></div>
        <Company src="/images/bloomberg.png" url="https://www.bloomberg.com" />
        <div className="clearfix visible-xs"></div>
        <Company src="/images/deshaw.jpg" url="https://deshaw.com" />
        <Company src="/images/jpmorgan.png" url="https://www.jpmorgan.com" />
      </div>
    </Section>

    {/* Founded */}
    <Section id="founded" title="Founded" subtitle="Company I founded">
      <div className="row">
        <Company
          src="/images/tdi.jpg"
          url="https://www.thedataincubator.com"
          className="mt-3 col-xs-12 col-sm-6 offset-sm-3"
        />
      </div>
    </Section>

    {/* Universities */}
    <Section
      id="universities"
      title="Universities"
      subtitle="Academic Institutions from where I have degrees or held postdocs"
    >
      <div className="row">
        <Company src="/images/princeton.svg" url="https://www.princeton.edu" />
        <Company src="/images/cambridge.jpg" url="https://www.cam.ac.uk" />
        <div className="clearfix visible-xs"></div>
        <Company src="/images/cornell.png" url="https://www.cornell.edu" />
      </div>
    </Section>

    {/* Awards */}
    <Section
      id="awards"
      title="Awards"
      subtitle="Selected awards I have been fortunate enough to receive"
    >
      <div className="row">
        <Company
          src="/images/marshall.gif"
          url="http://www.marshallscholarship.org/"
          className="mt-3 col-xs-6 col-sm-3"
        />
        <Company
          src="/images/intel-sts.png"
          url="https://student.societyforscience.org/regeneron-sts"
          className="mt-3 col-xs-6 col-sm-3"
        />
        <div className="clearfix visible-xs"></div>
        <Company
          src="/images/hertz.jpg"
          url="http://hertzfoundation.org/default.aspx"
          className="mt-3 col-xs-6 col-sm-3"
        />
        <Company
          src="/images/nsf.png"
          url="https://www.nsfgrfp.org/"
          className="mt-3 col-xs-6 col-sm-3"
        />
      </div>
    </Section>

    {/* Boards */}
    <Section
      id="boards"
      title="Boards"
      subtitle="Selected boards on which I serve (or have served)"
    >
      <div className="row">
        <Company
          src="/images/marshall.jpg"
          url="https://www.marshallscholars.org/"
          className="mt-3 col-xs-6 col-sm-4"
        />
        <Company
          src="/images/any.jpg"
          url="https://www.americaneedsyou.org/"
          className="mt-3 col-xs-6 col-sm-4"
        />
        <Company
          src="/images/cpe.png"
          url="https://policingequity.org/"
          className="mt-3 col-xs-6 col-sm-4"
        />
        <div className="clearfix visible-xs"></div>
        <Company
          src="/images/lendit.png"
          url="http://www.lendit.com/"
          className="mt-3 col-xs-6 col-sm-4"
        />
        <Company
          src="/images/strata.png"
          url="https://conferences.oreilly.com/strata"
          className="mt-3 col-xs-6 col-sm-4"
        />
        <Company
          src="/images/ssp.png"
          url="https://www.societyforscience.org/"
          className="mt-3 col-xs-6 col-sm-4"
        />
      </div>
    </Section>

    {/* Space Agencies */}
    <Section
      id="space-agencies"
      title="Space Agencies"
      subtitle="Space Agencies for which I have worked"
    >
      <div className="row">
        <Company
          src="/images/nasa.png"
          url="https://www.nasa.gov/"
          className="mt-3 col-xs-12 col-sm-6 offset-sm-3"
        />
      </div>
    </Section>
  </Layout>
)

export default Professional
