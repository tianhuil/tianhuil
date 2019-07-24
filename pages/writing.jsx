import React from 'react';
import Layout from '../components/layout.jsx'
import Logo from '../components/logo.jsx'

const Publication = ((props) => (
  <div className="row mb-5">
    <div className="mt-3 col-xs-12 col-sm-5">
      <Logo src={props.src} url={props.url} />
    </div>
    <div className="col-xs-12 col-sm-7">
      <h2 className="mt-3">{ props.name }</h2>
      { props.children }
    </div>
  </div>
))

const More = <span>
  <span>More ...</span>
</span>

const Article = ((props) => (
  <li><a href={props.url}>
    {props.more ? More : props.title}
  </a></li>
))

const Writing = (props) => (
  <Layout>
    <section>
    <Publication src="/static/images/wsj.png" url="http://www.wsj.com/articles/calculus-is-so-last-century-1457132991"
          name="Wall Street Journal">
        <ul>
          <Article url="wired.com/preview/story/5d2e3328d757370008b014a0"
            title="Calculus Is So Last Century"/>
        </ul>
      </Publication>

      <Publication src="/static/images/techcrunch.png" url="https://techcrunch.com/contributor/michael-li/"
          name="TechCrunch">
        <ul>
          <Article url="https://techcrunch.com/2017/06/23/five-building-blocks-of-a-data-driven-culture/"
            title="Five Building Blocks Of A Data-driven Culture"/>
          <Article url="https://techcrunch.com/2016/10/19/the-perils-of-polling-in-a-brexit-and-donald-trump-world/"
            title="The Perils Of Polling In A Brexit And Donald Trump World"/>
        </ul>
      </Publication>

      <Publication src="/static/images/wired.svg" url="http://www.wsj.com/articles/calculus-is-so-last-century-1457132991"
          name="Wired Magazine">
        <ul>
          <Article url="http://www.wsj.com/articles/calculus-is-so-last-century-1457132991"
            title="High-Stakes AI Decisions Need to be Automatically Audited"/>
        </ul>
      </Publication>

      <Publication src="/static/images/fastcompany.png" url="https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires"
          name="FastCompany">
        <ul>
          <Article url="https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires"
            title="How To Get Past Buzzwords And Make Better Hires"/>
          <Article url="https://www.fastcompany.com/40574695/youve-probably-been-hiring-the-wrong-kind-of-data-scientist"
            title="You’ve Probably Been Hiring The Wrong Kind Of Data Scientist"/>
          <Article url="https://www.fastcompany.com/40513520/how-to-get-a-hot-job-in-data-security-without-being-a-data-scientist"
            title="How To Land A Cybersecurity Job Even If You’re Not A Data Scientist"/>
        </ul>
      </Publication>

      <Publication src="/static/images/hbr.jpg" url="https://hbr.org/search?term=michael+li"
          name="Harvard Business Review">
        <ul>
          <Article url="https://hbr.org/2016/11/the-promise-and-challenge-of-big-data-for-pharma"
            title="The Promise And Challenge Of Big Data For Pharma"/>
          <Article url="https://hbr.org/2014/08/the-question-to-ask-before-hiring-a-data-scientist"
            title="The Question To Ask Before Hiring A Data Scientist"/>
          <Article url="https://hbr.org/2015/10/the-best-data-scientists-know-how-to-tell-stories"
            title="The Best Data Scientists Know How To Tell Stories"/>
          <Article url="https://hbr.org/2016/11/better-questions-to-ask-your-data-scientists"
            title="Better Questions To Ask Your Data Scientists"/>
          <Article url="https://hbr.org/search?term=michael+li"
            more={true}/>
        </ul>
      </Publication>

      <Publication src="/static/images/mitsmr.png" url="https://sloanreview.mit.edu/article/give-technical-experts-a-role-in-defining-project-success/"
          name="MIT Sloan Management Review">
        <ul>
          <Article url="https://sloanreview.mit.edu/article/give-technical-experts-a-role-in-defining-project-success/"
            title="Give Technical Experts A Role In Defining Project Success"/>
        </ul>
      </Publication>

      <Publication src="/static/images/entrepreneur.png" url="https://www.entrepreneur.com/author/michael-li2"
          name="Entrepreneur Magazine">
        <ul>
          <Article url="https://www.entrepreneur.com/article/269919"
            title="What Hiring Managers Don't Understand About Hiring For Data Science"/>
          <Article url="https://www.entrepreneur.com/article/249167"
            title="3 Ways Scrappy Entrepreneurs Can Keep Data Scientists On Board And Motivated"/>
          <Article url="https://www.entrepreneur.com/article/244247"
            title="4 Things A Data Scientist Can Do For Entrepreneurs"/>
          <Article url="https://www.entrepreneur.com/author/michael-li2" more={true} />
        </ul>
      </Publication>

      <Publication src="/static/images/venturebeat.png" url="https://venturebeat.com/author/michael-li-the-data-incubator/"
          name="VentureBeat">
        <ul>
          <Article url="https://venturebeat.com/2016/07/04/how-to-combat-your-companys-tech-hiring-bias/"
            title="How To Combat Your Company’s Tech Hiring Bias"/>
          <Article url="https://venturebeat.com/2015/07/18/real-data-scientists-have-a-rare-hybrid-of-skill-sets-heres-what-to-look-for/"
            title="Real Data Scientists Have A Rare Hybrid Of Skill Sets: Here’s What To Look For"/>
        </ul>
      </Publication>

      <Publication src="/static/images/dataconomy.png" url="http://dataconomy.com/author/tianhuimichaelli/"
          name="Dataconomy">
        <ul>
          <Article url="http://dataconomy.com/2017/09/financial-institutions-data-science/"
            title="Why Large Financial Institutions Struggle To Adopt Technology And Data Science"/>
          <Article url="http://dataconomy.com/2016/10/why-employers-miss-millennials/"
            title="Why Employers Miss Millennial Data Scientists"/>
        </ul>
      </Publication>

      <Publication src="/static/images/techtarget.png" url="https://www.techtarget.com/contributor/Tianhui-Michael-Li"
          name="TechTarget">
        <ul>
          <Article url="https://searchbusinessanalytics.techtarget.com/tip/Hiring-vs-training-data-scientists-The-case-for-each-approach"
            title="Hiring Vs. Training Data Scientists: The Case For Each Approach"/>
        </ul>
      </Publication>

      <Publication src="/static/images/oreilly.jpg" url="https://www.oreilly.com/people/76a5b-michael-li"
          name="O'Reilly Radar">
        <ul>
          <Article url="https://www.oreilly.com/ideas/leveraging-analytics-1-0-for-the-analytics-2-0-revolution"
            title="Leveraging Analytics 1.0 For The Analytics 2.0 Revolution"/>
          <Article url="https://www.oreilly.com/ideas/spark-comparison-aws-vs-gcp"
            title="Spark Comparison: AWS vs. GCP"/>
          <Article url="https://www.oreilly.com/ideas/three-best-practices-for-building-successful-data-pipelines"
            title="Three Best Practices For Building Successful Data Pipelines"/>
          <Article url="https://www.oreilly.com/ideas/5-secrets-for-writing-the-perfect-data-scientist-resume"
            title="5 Secrets For Writing The Perfect Data Scientist Resume"/>
          <Article url="https://www.oreilly.com/people/76a5b-michael-li"
            more={true}/>
        </ul>
      </Publication>
    </section>
  </Layout>
)

export default Writing
