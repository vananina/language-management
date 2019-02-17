// hello.js
var Hello = {
  getName (callback) {
    const req = new XMLHttpRequest();       // 가짜 request 생성
    req.open('GET', 'http://name', true);   // 가짜 request 셋팅
    req.onreadystatechange = () => {  // 가짜 request 호출 후 동작 셋팅
      if (req.readyState == 4) {
        if(req.status == 200) {
          callback(req.responseText);
        } else {
          callback("ajax error");
        }
      }
    }
    req.send(null);                         // 가짜 request 호출 !
    
    return 'World';
  }
}

export default Hello