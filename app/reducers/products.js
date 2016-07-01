const initialState = {
  showProduct: true,
  'living-room': [
    {
      name: 'red seat',
      link: 'red-seat',
      likes: 495,
      oldPrice: 60,
      descr: 'Lorem ipsum dolor sit amet',
      price: 45,
      img: 'red-seat.jpg',
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'white table',
      likes: 20,
      link: 'white-table',
      descr: 'Lorem ipsum dolor sit amet',
      price: 350,
      img: 'white-table.jpg',
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'blue seat',
      link: 'blue-seat',
      likes: 800,
      descr: 'Lorem ipsum dolor sit amet',
      price: 35,
      img: 'blue-seat.jpg',
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'modern bed',
      link: 'modern-bed',
      likes: 290,
      descr: 'Lorem ipsum dolor sit amet',
      price: 120,
      img: 'modern-bed.jpg',
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    },
    {
      name: 'dark seat',
      link: 'dark-seat',
      likes: 517,
      descr: 'Lorem ipsum dolor sit amet',
      price: 50,
      img: 'dark-seat.jpg',
      fullDescr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. '
    }
  ]
};

export default function products(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};