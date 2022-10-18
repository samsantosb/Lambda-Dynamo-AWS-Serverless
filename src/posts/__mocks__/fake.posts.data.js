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


const postsForValidation = Object.freeze({
    postWithLongAuthor: JSON.stringify({
        author: 'a'.repeat(35),
        title: 'Post 1',
        content: 'Content 1',
        status: true,
    }),

    postWithLongTitle: JSON.stringify({
        author: 'Author 1',
        title: 'a'.repeat(352),
        content: 'Content 1',
        status: true,
    }),

    postWithLongContent: JSON.stringify({
        author: 'Author 1',
        title: 'Post 1',
        content: 'a'.repeat(1001),
        status: true,
    }),

    postWithInvalidStatus: JSON.stringify({
        author: 'Author 1',
        title: 'Post 1',
        content: 'Content 1',
        status: 'what',
    }),

    postWithMissingFields: JSON.stringify({
        author: 'Author 1',
        title: 'Post 1',
    }),

    postThatIsValid: JSON.stringify({
        author: 'aada',
        title: 'Post 1',
        content: 'Content 1',
        status: true,
    }),

    postWithExtraFields: JSON.stringify({
        author: 'Author 1',
        title: 'Post 1',
        content: 'Content 1',
        status: true,
        date: new Date()
    })
})








module.exports = { fakePosts, fakeIds, postsForValidation };