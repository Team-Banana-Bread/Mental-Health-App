import gql from "graphql-tag";

const postQuery = gql`
    query Post($id: ID!) {
        Post(id: $id) {
            id
            title
            body
        }
    }
`;
