import store from '../../store';

async function getUserById(organizationName, userId) {
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  const organizationUsers = organizations[indexOfOrganization].users;
  const indexOfUser = organizationUsers.map((e) => e.id)
    .indexOf(parseInt(userId, 10));
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationUsers[indexOfUser]);
  });
  return organizationUsers[indexOfUser];
}


async function createUser(name, surname, email, githubHandle, organizationName) {
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  const organizationUsers = organizations[indexOfOrganization].users;
  const newUserId = organizationUsers.length - 1;
  const newUser = {
    id: newUserId + 1,
    name,
    surname,
    email,
    githubHandle,
    active: true,
  };
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationUsers.push(newUser));
  });
  return organizationUsers;
}


async function deleteUser(id, organizationName) {
  const selectedUserId = id;
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  const organizationUsers = organizations[indexOfOrganization].users;
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationUsers.splice(selectedUserId, 1));
  });
  return organizationUsers;
}

async function blockUser(id, name, surname, email, githubHandle, organizationName) {
  const blockedUser = {
    id,
    name,
    surname,
    email,
    githubHandle,
    active: false,
  };
  const selectedUserId = id;
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  const organizationUsers = organizations[indexOfOrganization].users;
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationUsers.splice(selectedUserId, 1, blockedUser));
  });
  return organizationUsers;
}


async function unblockUser(id, name, surname, email, githubHandle, organizationName) {
  const unblockedUser = {
    id,
    name,
    surname,
    email,
    githubHandle,
    active: true,
  };
  const selectedUserId = id;
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  const organizationUsers = organizations[indexOfOrganization].users;
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationUsers.splice(selectedUserId, 1, unblockedUser));
  });
  return organizationUsers;
}

const userService = {
  getUserById,
  createUser,
  deleteUser,
  blockUser,
  unblockUser,
};

export default userService;
