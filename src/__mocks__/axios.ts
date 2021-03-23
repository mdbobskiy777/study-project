const mockAxios = jest.genMockFromModule('axios');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
