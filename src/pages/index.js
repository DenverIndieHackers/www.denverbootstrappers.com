import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="The Denver community of indie makers helping each other start and grow profitable online businesses.."
        />
      </Helmet>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Bootstrap Your Business</h1>
            <h4>The Denver community of indie makers helping each other start and grow profitable online businesses.</h4>
          </div>


          <div className="col-2">
            <Link className="button button-primary mt-2" to="/services">
              Next Events
            </Link>
          </div>

          <div className="col-2">
            <Link className="button button-primary mt-2" to="/services">
              Join Us on Slack
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5>Abount the Community</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5>Our Events</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5>News Letter</h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
