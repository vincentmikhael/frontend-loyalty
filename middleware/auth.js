export default function ({app,redirect,store}) {
  // Add the userAgent property to the context

  if(!app.$cookies.get('token')){
    redirect('/login')
  }
}