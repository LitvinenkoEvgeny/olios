import * as types from '../constants';
const initialState = {
  showProduct: true,
  nowShowing: null,
  'living-room': [
    {
      name: 'red seat',
      link: 'red-seat',
      likes: 495,
      oldPrice: 60,
      descr: 'Lorem ipsum dolor sit amet',
      price: 45,
      img: 'red-seat.jpg',
      images: ['seat1.png', 'seat2.png', 'seat3.png', 'seat4.png'],
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'white table',
      likes: 20,
      link: 'white-table',
      descr: 'Lorem ipsum dolor sit amet',
      price: 350,
      img: 'white-table.jpg',
      images: ['seat1.png', 'seat2.png', 'seat3.png', 'seat4.png'],
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'blue seat',
      link: 'blue-seat',
      likes: 800,
      descr: 'Lorem ipsum dolor sit amet',
      price: 35,
      img: 'blue-seat.jpg',
      images: ['seat1.png', 'seat2.png', 'seat3.png', 'seat4.png'],
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'modern bed',
      link: 'modern-bed',
      likes: 290,
      descr: 'Lorem ipsum dolor sit amet',
      price: 120,
      img: 'modern-bed.jpg',
      images: ['seat1.png', 'seat2.png', 'seat3.png', 'seat4.png'],
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'dark seat',
      link: 'dark-seat',
      likes: 517,
      descr: 'Lorem ipsum dolor sit amet',
      price: 50,
      img: 'dark-seat.jpg',
      images: ['seat1.png', 'seat2.png', 'seat3.png', 'seat4.png'],
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    }
  ]
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIKE:
      let category = state[action.category].slice();
      category.map(i => {
        if (i.name === action.itemName) {
          i.likes++;
        }
      });
      state[category] = category;
      return Object.assign({}, state);
    case types.GET_PRODUCT:
      let showing = state[action.payload.category].filter(item => {
        return item.link === action.payload.productName;
      });
      if (showing[0]) showing = showing[0];
      return Object.assign({}, state, {nowShowing: showing});
    default:
      return state;
  }
}