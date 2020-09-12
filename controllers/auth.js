module.exports.authController = (request, h) => {
  console.log(request.auth)
  if (request.auth.isAuthenticated) {
    request.cookieAuth.set({ id: request.auth.credentials.profile.id })
    return h.redirect('/auth/login/success')
  } else {
    return h.redirect('/auth/login/failed')
  }
}
