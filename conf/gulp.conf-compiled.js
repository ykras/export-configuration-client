'use strict';

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var path = require('path');
var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  tasks: 'gulp_tasks'
};

exports.path = {};

var _loop = function _loop(pathName) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      var pathValue = exports.paths[pathName];
      var funcArgs = Array.prototype.slice.call(arguments);
      var joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
};

for (var pathName in exports.paths) {
  _loop(pathName);
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

//# sourceMappingURL=gulp.conf-compiled.js.map