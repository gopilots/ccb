const convertStringToLowerCase = text => {
  return typeof text === 'string' ? text?.toLowerCase() : '';
};

document.addEventListener('DOMContentLoaded', event => {
  const buttons = document.getElementsByClassName('embed-button-sel');

  for (const element of buttons) {
    const button = element;

    button.addEventListener('click', function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        button_text: convertStringToLowerCase(button.innerHTML),
        component: 'communication content',
        event: 'cta_content'
      });
    });
  }
});
