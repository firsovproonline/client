export default function ({ $axios }, inject) {
  // Create a custom axios instance
  let user = JSON.parse(window.localStorage.getItem('user'))
  let atoken = ''
  if (user && user.accessToken) {
    // for Node.js Express back-end
    atoken =  user.accessToken
  } else {
    atoken =  ''
  }
  const api = $axios.create({
    headers: {
      'x-access-token': atoken,
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('https://my_api.com')

  // Inject to context as $api
  inject('api', api)
}
