import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const basicDocPageTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

basicDocPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($fileRelativePath: String!) {
    mdx(fields: { fileRelativePath: { eq: $fileRelativePath } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default basicDocPageTemplate;