const PRODUCTOS = [{
    id: 1,
    name: 'Un Bordado de Rosas con fondo blanco',
    category: 'bordados-mano',
    image: 'https://images.pexels.com/photos/2089949/pexels-photo-2089949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 2,
    name: 'Set de Hilos',
    category: 'lisos',
    image: 'https://images.pexels.com/photos/1232131/pexels-photo-1232131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 3,
    name: 'Corazón Bordado con detalles rojos',
    category: 'lisos',
    image: 'https://images.pexels.com/photos/3772488/pexels-photo-3772488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 14990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 15,
  },
  {
    id: 4,
    name: 'Bordado a Telar',
    category: 'bordados-mano',
    image: 'https://images.pexels.com/photos/7205811/pexels-photo-7205811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 5,
    name: 'Bordado',
    category: 'sobre-puestos',
    image: 'https://images.pexels.com/photos/1122844/pexels-photo-1122844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 14990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 15,
  },
  {
    id: 6,
    name: 'Bordado',
    category: 'sobre-puestos',
    image: 'https://images.unsplash.com/photo-1622378158084-f2221260e688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    price: 5990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  he industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 30,
    
  },
  {
    id: 7,
    name: 'Bordado',
    category: 'lisos',
    image: 'https://images.unsplash.com/photo-1623605004748-3af12342204f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 8,
    name: 'Bordado',
    category: 'bordados-mano',
    image: 'https://images.unsplash.com/photo-1622378134706-4a2194cc9648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s sen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 9,
    name: 'Love Bordado',
    category: 'sobre-puestos',
    image: 'https://images.pexels.com/photos/3838689/pexels-photo-3838689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 14990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 15,
  },
  {
    id: 10,
    name: 'Bordado',
    category: 'realce',
    image: 'https://images.unsplash.com/photo-1629804190724-ece12511fc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 5990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  he industrys stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' , 
    stock: 30,
  },
    
    {
    id: 11,
    name: 'Bordado',
    category: 'realce',
    image: 'https://images.pexels.com/photos/1122844/pexels-photo-1122844.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 19990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 10,
  },
  {
    id: 12,
    name: 'Bordado',
    category: 'bordados-mano',
    image: 'https://images.unsplash.com/photo-1622378143889-5da5bb4a4ec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    price: 10990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 25,
  },
  {
    id: 13,
    name: 'Bordado',
    category: 'realce',
    image: 'https://images.unsplash.com/photo-1566152467605-fd2f144798e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 14990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 15,
  },
  {
    id: 14,
    name: 'Bordado',
    category: 'lisos',
    image: 'https://images.unsplash.com/photo-1593108299881-12f7130cba83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    price: 5990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  he industrys stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    stock: 30,
  },
  {
    id: 15,
    name: 'Bordado',
    category: 'realce',
    image: 'https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 19990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 10,
  },
  {
    id: 16,
    name: 'Bordado',
    category: 'sobre-puestos',
    image: 'https://images.unsplash.com/photo-1629804067153-230d04768846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    price: 19990,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b en the industrys stn book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    stock: 10,
  },
];

export { PRODUCTOS }