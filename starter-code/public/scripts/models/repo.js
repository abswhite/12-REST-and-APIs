'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {'Authorization': `token ${githubToken}`}
    })
    .then(data => repos.all = data,
      err => console.error(err))
      .then(callback);
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
