import React from "react";
import Link from "gatsby-link";
import _ from "lodash";

import Sidebar from "./sidebar";
import Masthead from "./masthead";

import "../css/poole.css";
import "../css/syntax.css";
import "../css/lanyon.css";
import "../css/ps.css";

const archives = _.rangeRight(1999, new Date().getFullYear()+1);

export default ({ children, data }) => (
  <div className="theme-base-08">
    <input type="checkbox" className="sidebar-checkbox" id="sidebar-checkbox" />
    <Sidebar metadata={data.site.siteMetadata} pages={data.allMarkdownRemark.edges} archives={archives}/>
    <div className="wrap">
      <Masthead metadata={data.site.siteMetadata}/>
     <div className="content container">{children()}</div>
    </div>
    <label htmlFor="sidebar-checkbox" className="sidebar-toggle"></label>
  </div>

);

export const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(
      sort: { fields:  [frontmatter___title]}
      filter: { frontmatter: { layout: { eq: "page" } } }
    ) {
      edges {
        node {
          fields {
            title
            slug
          }
        }
      }
    }
  }
`;