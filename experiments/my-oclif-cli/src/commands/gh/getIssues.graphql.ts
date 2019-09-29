const gql = (...args) => ...args;

export const getIssuesQuery = gql`
  query getIssues($repositoryOwner: String!, $repositoryName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issues(last: 10) {
        edges {
          node {
            title
            assignees(first: 1) {
              edges {
                node {
                  login  
                }
              }
            }
            state
            url
          }
        }
      }
    }
  }
`;
