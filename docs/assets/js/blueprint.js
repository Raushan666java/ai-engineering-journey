(function() {
  'use strict';

  var STORAGE_KEY = 'aej:progress:v1';
  var root = document.documentElement;

  // === THEME TOGGLE ===
  var storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }

  // Listen for theme toggle from MkDocs palette
  document.addEventListener('DOMContentLoaded', function() {
    var paletteToggles = document.querySelectorAll('[data-md-color-scheme]');
    for (var i = 0; i < paletteToggles.length; i++) {
      paletteToggles[i].addEventListener('click', function() {
        var currentScheme = root.getAttribute('data-md-color-scheme') || 'default';
        var nextTheme = currentScheme === 'default' || currentScheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
      });
    }
  });

  // === PROGRESS TRACKING ===
  // Simple localStorage-based completion tracker for lessons

  var progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    lessons: {},
    updatedAt: null
  };

  function save() {
    progress.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    notify();
  }

  var listeners = [];
  function notify() {
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](progress);
    }
  }

  window.AEJProgress = {
    markComplete: function(path) {
      progress.lessons[path] = { completedAt: new Date().toISOString() };
      save();
    },
    unmarkComplete: function(path) {
      delete progress.lessons[path];
      save();
    },
    isComplete: function(path) {
      return !!progress.lessons[path];
    },
    totalCompleted: function() {
      return Object.keys(progress.lessons).length;
    },
    getAll: function() {
      return JSON.parse(JSON.stringify(progress));
    },
    reset: function() {
      progress = { lessons: {}, updatedAt: null };
      save();
    },
    onChange: function(fn) {
      listeners.push(fn);
    }
  };

  // === OBSERVER FOR STAT BAR ANIMATIONS ===
  document.addEventListener('DOMContentLoaded', function() {
    var statBars = document.querySelectorAll('.stat-row-bar');
    var observer = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          var el = entries[i].target;
          var target = el.getAttribute('data-bar-pct');
          if (target !== null) {
            el.style.setProperty('--bar-pct', target + '%');
          }
          observer.unobserve(el);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    for (var i = 0; i < statBars.length; i++) {
      observer.observe(statBars[i]);
    }
  });
})();
