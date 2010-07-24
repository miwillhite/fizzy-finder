FuzzyFinder v0.2
================

It works like the file finder in TextMate. Pass in an array of terms/files/whatever.

This plugin was inspired by a similar ruby implementation authored by **David Richards** (davidrichards).

Usage
-----
    "test".fuzzyFinder( [
      "tester", 
      "testing", 
      "tea start", 
      "tarter", 
      "foul", 
      "tempest", 
      "tset"
    ] );
    
    // => ["tester", "testing", "tea start", "tempest"]
    
Copyright (c) 2010 Matthew Willhite, released under the MIT license