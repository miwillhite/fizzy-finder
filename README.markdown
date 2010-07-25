FizzyFinder v1.3
================

**It works like the file finder in TextMate. Pass in an array of terms/filenames/whatever.**

This plugin was inspired by a similar ruby implementation authored by **David Richards** (davidrichards).

Usage
-----
    "test".fizzyFinder( [
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