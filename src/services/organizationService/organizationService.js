import * as organizationMock from '../../mocks/Organizations'


function getAll() {
    const organizations = organizationMock.default;
    return new Promise((resolve) => {
        setTimeout(resolve, 100, organizations);
    });
}

export const organizationService = {
    getAll
};
