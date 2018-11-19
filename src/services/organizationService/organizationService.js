import * as organizationMock from '../../mocks/Organizations';


async function getAll() {
  const organizations = organizationMock.default;
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizations);
  });
  return organizations;
}

async function createOrganization(name, email, organizationType) {
  const newOrganization = {
    id: 3,
    organizationName: name,
    email,
    type: organizationType,
    users: [],
  };
  const organizationArray = [];
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizationArray.push(newOrganization));
  });
  return organizationArray;
}

const organizationService = {
  getAll,
  createOrganization,
};

export default organizationService;
