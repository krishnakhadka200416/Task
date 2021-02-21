/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateUserGroups = /* GraphQL */ `
  subscription OnCreateUserGroups($owner: String!) {
    onCreateUserGroups(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserGroups = /* GraphQL */ `
  subscription OnUpdateUserGroups($owner: String!) {
    onUpdateUserGroups(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserGroups = /* GraphQL */ `
  subscription OnDeleteUserGroups($owner: String!) {
    onDeleteUserGroups(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
