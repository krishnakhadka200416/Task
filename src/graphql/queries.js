/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      fullname
      tasks {
        items {
          id
          title
          description
          assigned_by
          assigned_to
          assign_status
          isComplete
          completeBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      group {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        fullname
        tasks {
          nextToken
        }
        group {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      group_name
      created_by
      user {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          title
          description
          assigned_by
          assigned_to
          assign_status
          isComplete
          completeBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        group_name
        created_by
        user {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      Group {
        id
        group_name
        created_by
        user {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      assigned_user {
        id
        username
        fullname
        tasks {
          nextToken
        }
        group {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      assigned_by
      assigned_to
      comments {
        items {
          id
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      assign_status
      isComplete
      completeBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        Group {
          id
          group_name
          created_by
          createdAt
          updatedAt
          owner
        }
        assigned_user {
          id
          username
          fullname
          createdAt
          updatedAt
          owner
        }
        assigned_by
        assigned_to
        comments {
          nextToken
        }
        assign_status
        isComplete
        completeBy
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      description
      Task {
        id
        title
        description
        Group {
          id
          group_name
          created_by
          createdAt
          updatedAt
          owner
        }
        assigned_user {
          id
          username
          fullname
          createdAt
          updatedAt
          owner
        }
        assigned_by
        assigned_to
        comments {
          nextToken
        }
        assign_status
        isComplete
        completeBy
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        Task {
          id
          title
          description
          assigned_by
          assigned_to
          assign_status
          isComplete
          completeBy
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
