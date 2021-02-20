/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      fullname
      tasks {
        items {
          id
          title
          description
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      fullname
      tasks {
        items {
          id
          title
          description
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      fullname
      tasks {
        items {
          id
          title
          description
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      group_name
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      group_name
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      group_name
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
export const createUserGroups = /* GraphQL */ `
  mutation CreateUserGroups(
    $input: CreateUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    createUserGroups(input: $input, condition: $condition) {
      id
      user {
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
      group {
        id
        group_name
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserGroups = /* GraphQL */ `
  mutation UpdateUserGroups(
    $input: UpdateUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    updateUserGroups(input: $input, condition: $condition) {
      id
      user {
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
      group {
        id
        group_name
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserGroups = /* GraphQL */ `
  mutation DeleteUserGroups(
    $input: DeleteUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    deleteUserGroups(input: $input, condition: $condition) {
      id
      user {
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
      group {
        id
        group_name
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      Group {
        id
        group_name
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      Group {
        id
        group_name
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      Group {
        id
        group_name
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      description
      Task {
        id
        title
        description
        Group {
          id
          group_name
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      description
      Task {
        id
        title
        description
        Group {
          id
          group_name
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      description
      Task {
        id
        title
        description
        Group {
          id
          group_name
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
