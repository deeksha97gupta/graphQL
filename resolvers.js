const bookData = [
    {
        id: '1',
        title: 'Book 1',
        publishedYear: '2019',
        authorId: '101'
    },
    {
        id: '2',
        title: 'Book 2',
        publishedYear: '2009',
        authorId: '102'
    },
    {
        id: '3',
        title: 'Book 3',
        publishedYear: '2023',
        authorId: '102'
    }
]

const authorData = [
    {
        id: '101',
        name: 'Deeksha',
        bookIds: ['1']
    },
    {
        id: '102',
        name: 'Gupta',
        bookIds: ['2', '3']
    }
]

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            console.log(parent);
            const authorObj = authorData.find(({ id }) => id === parent.authorId);
            return authorObj;
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            console.log(parent);
            const booksArr = bookData.map(data => {
                if(parent.bookIds.includes(data.id)) return data;
                return null;
            }).filter(xxx => !!xxx);
            return booksArr;
        }
    },
    Query: {
        authors: (parent, args, context, info) => {
            return authorData;
        },
        books: () => {
            return bookData;
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            return [];
        }
    }
}