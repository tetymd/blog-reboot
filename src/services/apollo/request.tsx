import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts($take: Int, $skip: Int) {
    getPosts(take: $take, skip: $skip) {
      posts {
        id
        title
        tags {
          name
        }
        createdAt
      }
      hasNextPage
    }
  }
`;

export const GET_POST = gql`
  query getPostById($id: ID) {
    getPostById(id: $id) {
      id
      title
      content
      tags {
        name
      }
      createdAt
      authorId
      updatedAt
      published
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String, $content: String, $authorId: ID) {
    createPost(title: $title, content: $content, authorId: $authorId) {
      id
      title
      createdAt
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($title: String, $content: String, $postId: ID) {
    updatePost(title: $title, content: $content, postId: $postId) {
      id
      title
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID) {
    deletePost(postId: $postId)
  }
`;
