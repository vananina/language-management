// hello.spec.js
import Hello from '../src/hello.js'

describe('Hello', () => {
  describe('getName함수는', () => {
    
    let request,
        response,
        callbackSpy;

    beforeEach(() => {
      jasmine.Ajax.install();
      callbackSpy = jasmine.createSpy('callback');  // 스파이
      Hello.getName(callbackSpy);                   // 스파이 심기
      request = jasmine.Ajax.requests.mostRecent(); // Hello.getName의 Ajax request 결과 저장

      // 가짜 response
      response = {
        status: 200,
        responseText: 'Chris'
      };
      request.respondWith(response);                 // request랑 response 짝궁해줌
    });

    afterEach(() => {
      jasmine.Ajax.uninstall()
    });

    it('HTTP 요청을 보낸다', () => {
      var expectUrl = 'http://name';
      expect(request.url).toBe(expectUrl);
    });

    it('콜백함수 파라매터로 이름을 반환한다', () => {
      expect(callbackSpy).toHaveBeenCalledWith(response.responseText);
    });
  })
})