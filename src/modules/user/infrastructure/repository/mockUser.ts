interface MockInterface {
  id: number
  name: string
  email: string
  password?: string
  description: string
  role: string
  uuid: string
}

let MOCK_USER: MockInterface | object = {
  id: 1,
  name: 'Alain',
  email: 'pepe@gmail.com',
  password: '$2b$10$j912/hVHQ2mpfT2w1X1Hn./WgxO.tn3ntVk3ocU4WhOv1p7heo/qK',
  description: 'Some cooldescription',
  role: 'admin',
  uuid: '000-000'
}

export default MOCK_USER
