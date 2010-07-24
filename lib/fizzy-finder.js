/*
 * FizzyFinder, textmate-file-lookup-like-search for Javascript arrays
 *
 * Copyright (c) 2010 Matt Willhite
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Based on the ruby fizzy finder by David Richards <davidrichards>:
 *   http://www.github.com/davidrichards
 *
 */

/*
 * Usage:
 * "test".fizzyFinder(["tester", "testing", "tea_start", "tarter", "foul", "tempest"])
 *   => ["tester", "testing", "tea_start", "tempest"]
 *
 */
 
String.prototype.fizzyFinder = function( textList ) {
  var self = {};
  
  self.expand = function( txt ) {
    var expanded = [];
    for( var i=0; i<txt.length; i++ ) {
      expanded.push( txt[i] + '.*' );
    }
    return expanded.join( '' );
  };
  
  self.expandedRegExp = function( txt ) {
    var regExp = new RegExp( self.expand( txt ) );
    return regExp;
  };
  
  self.getMatches = function( list, regExp ) {
    var matches = [];
    for( var i=0; i<list.length; i++ ) {
      if( list[i].match( regExp ) ) {
        matches.push( list[i] );
      }
    }
    return matches;
  };
      
  return function( textList ) {
    var regExp = self.expandedRegExp( this );
    return self.getMatches( textList, regExp );
  };
  
}();