export default function ({ $axios,app,redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        Authorization : `Bearer ${app.$cookies.get('token')}`
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://api.arrasmember.com/')
  // api.setBaseURL('http://localhost:8080/')
 
  api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status || 403 === error.response.status) {
        // handle error: inform user, go to login, etc
        app.$store.commit('setUser', {})
        app.$cookies.remove('token')
        redirect('/login')
    } else {
        return Promise.reject(error);
    }
});

  // Inject to context as $api
  inject('api', api)
}