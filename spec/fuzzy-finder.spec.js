describe( "FuzzyFinder", function() {  
  var findableTerms = ["tester", "testing", "tea start", "tarter", "foul", "tempest", "tset"];
  
  it( "should return an array", function() {
    expect( "test".fuzzyFinder(findableTerms).constructor ).toEqual( Array );
  });
  
  it( "should return terms that contain the same letters (in the same order) as the target string", function() {
    expect( "test".fuzzyFinder(findableTerms) ).toEqual( ["tester", "testing", "tea start", "tempest"] );
  });

  it( "should NOT return terms that DO NOT contain the same letters (in the same order) as the target string", function() {
    expect( "test".fuzzyFinder(findableTerms) ).not.toEqual( ["foul", "tset"] );
  });
  
});