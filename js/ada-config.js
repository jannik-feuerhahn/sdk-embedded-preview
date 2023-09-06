const params = new URLSearchParams(window.location.search);
window.adaConfig = {
  logLevel: 'debug',
  displayMode: document.currentScript.getAttribute('mode'),
  assessmentLauncherElement: '#ada-care-journey-launcher',

  url: function () {
    return params.get('baseUrl');
  },
  locale: function () {
    return params.get('locale');
  },
  trackingId: function () {
    return params.get('trackingId');
  },
  skipExitConfirmation: function () {
    return params.get('skipExitConfirmation') === 'true';
  },
  appearance: {
    logo: function () {
      return params.get('hideTitle') ? "img/empty-header.png" : undefined;
    },
    backDropInteraction: function () {
      return params.get('backDropInteraction') === 'true';
    },
    dialogLocation: function () {
      return params.get('dialogLocation');
    },
    animation: function () {
      return params.get('animation') === 'true';
    },
  },
  customParameters: function () {
    let customParameters = []
    const customParameterKeys = params.getAll('customParameterKey');
    const customParameterValues = params.getAll('customParameterValue');
    
    for (let i = 0; i < customParameterKeys.length; i++) {
      let customParametersEntry = {};
      const customParameterKey = customParameterKeys[i];
      const customParameterValue = customParameterValues[i];
      customParametersEntry[customParameterKey] = customParameterValue;
      customParameters.push(customParametersEntry);
    }

    // Add journey type id
    customParameters.push({ 'journeyTypeId': params.get('journeyTypeId') });

    customParameters.push({ 'init': params.get('autoInit') });

    return customParameters;
  },
};
