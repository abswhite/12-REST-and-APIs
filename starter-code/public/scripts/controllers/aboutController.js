'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    $.ajax({
    	url: 'https://api.github.com/user/repos',
    	method: 'GET',
    	headers: {
    		Authorization: githubToken
    	}
    })
    .then(data => {
      console.log(data);
      data.forEach(repo => $('#about').append(`<p>${repo.name}</p>`))
    },
     err => {
       console.error('Status Code: ', err.status);
     });

  module.aboutController = aboutController;
})(window);
