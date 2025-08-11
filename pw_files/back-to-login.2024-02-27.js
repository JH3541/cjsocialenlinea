const backToLogin = (function () {
  const identifiers = {
    forgotPasswordBack: '[data-role="forgot-password__back"]'
  }

  const DEFAULT_LOGIN_CLIENT = 'bb-web-client'

  function getBackButton() {
    const matchedIdentifier = Object.values(identifiers).find(identifier => document.querySelector(identifier)) || null;
    return document.querySelector(matchedIdentifier);
  }

  function changeUrlClient() {
    const backButton = getBackButton()
    if (!backButton) {
      return
    }

    const originalUrl = backButton.href
    const queryParams = originalUrl.split('?')[1].split('&')
    const clientId = queryParams.find(q => q.includes('client_id'))

    if (clientId) {
      const key = clientId.split('=')[0]
      const changedUrl = originalUrl.replace(clientId, `${key}=${DEFAULT_LOGIN_CLIENT}`)

      backButton.href = changedUrl
    }

  }

  return { init: changeUrlClient }

})()

