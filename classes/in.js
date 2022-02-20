class ClassWithPrivateFeatures {
    #a;
    #b = null;
    #c() {}
    get #d() {}
    static f(o) {
      return #a in o && #b in o && #c in o && #d in o;
    }
  }
  
  ClassWithPrivateFeatures.f(new ClassWithPrivateFeatures()) // returns true
  ClassWithPrivateFeatures.f({}) // returns false  