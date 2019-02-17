var Vue = require('vue')

import TestComponent from '@/pages/LanguagePage.vue'

describe('testComponent.vue', function () {

  // JavsScript 옵션을 검사합니다.
  it('should have correct message', function () {
    expect(TestComponent).not.toBe(null);
  })
})