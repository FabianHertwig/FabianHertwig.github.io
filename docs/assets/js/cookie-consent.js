window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#252e39"
      },
      "button": {
        "background": "#14a7d0"
      }
    },
    "theme": "classic",
    "position": "top",
    "static": true,
    "type": "opt-in",
    "content": {
      "href": "/privacy"
    },
    onInitialise: function (status) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
        grantGoogleAnalytics()
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        denyGoogleAnalytics()
      }
    },
    onStatusChange: function (status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
        grantGoogleAnalytics()
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        denyGoogleAnalytics()
      }
    },
    onRevokeChoice: function () {
      var type = this.options.type;
      if (type == 'opt-in') {
        // disable cookies
        denyGoogleAnalytics()
      }
      if (type == 'opt-out') {
        // enable cookies
        grantGoogleAnalytics()
      }
    }
  });