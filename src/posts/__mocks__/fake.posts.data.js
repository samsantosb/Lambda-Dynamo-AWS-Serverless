const fakeIds = ['190382jhd', '1903202jhd']

const fakePosts = [{
    id: fakeIds[0],
    title: 'Post 1',
    content: ['Content 1'],
    status: true,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: ['2020-01-01T00:00:00.000Z'],
},
{
    id: fakeIds[1],
    title: 'Post 2',
    content: ['Content 2'],
    status: true,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: ['2020-01-01T00:00:00.000Z'],
}]





module.exports = { fakePosts, fakeIds };