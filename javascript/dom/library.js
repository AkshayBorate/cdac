"use strict";

class auth {
  constructor() {
    this.details = [
      {
        email: "akshayb1905@gmail.com",
        password: "asdf@369Q",
      },
      {
        email: "akshay@gmail.com",
        password: "asdf@798W",
      },
      {
        email: "akshay@b1905gmail.com",
        password: "asdf@3201R",
      },
    ];
  }

  checkemail(emailid) {
    console.log(emailid);
    var exp4 =
      /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    var res = exp4.test(emailid);
    return res;
  }
  checkpass(pass) {
    var exp5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var res1 = exp5.test(pass);
    return res1;
  }

  checkemailandpss() {}
}
export default auth;
