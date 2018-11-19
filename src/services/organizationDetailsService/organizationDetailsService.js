import store from '../../store';


async function getOrganizationDetailsByName(organizationName) {
  const organizations = store.getState().organizationOverview.organization;
  const indexOfOrganization = organizations.map((e) => e.organizationName)
    .indexOf(organizationName);
  await new Promise((resolve) => {
    setTimeout(resolve, 100, organizations[indexOfOrganization]);
  });
  return organizations[indexOfOrganization];
}

const organizationDetailsService = {
  getOrganizationDetailsByName,
};

export default organizationDetailsService;
