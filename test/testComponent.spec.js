var Vue = require('vue')

// var testComponent = require('../src/components/testComponent.vue')
import TestComponent from '../src/components/TestComponent.vue'

describe('testComponent.vue', function () {

  it('start', function () {
    expect(1).toBe(1)
  })

  // const testComponent = Vue.component('test-component');
  // const vm = new testComponent().$mount();
  
  // JavsScript 옵션을 검사합니다.
  it('should have correct message', function () {
    expect(TestComponent).not.toBe(null);
    // expect(vm.data().message).toBe('Hello!')
  })

  // // 실제로 그 컴포넌트를 렌더링하여 렌더링된 결과를 검사합니다.
  // it('should render correct message', function () {
  //   var vm = new Vue({
  //     template: '<div><test></test></div>',
  //     components: {
  //       'test': testComponent
  //     }
  //   }).$mount()
  //   expect(vm.$el.querySelector('h2.red').textContent).toBe('Hello from Component A!')
  // })
})