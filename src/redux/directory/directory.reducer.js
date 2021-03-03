const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/0qs49Yv/jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/HFMjYsq/sneakers.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/3r6S4YP/women.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/women'
        },
        {
          title: 'men',
          imageUrl: '"https://i.ibb.co/pnJJmbF/bb402b6009564eadbf0288409d25853f.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/men'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer