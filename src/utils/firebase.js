import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

// vuefire 연동
Vue.use(VueFire)

// firebase 셋팅
var fbConfig = {
  apiKey: "AIzaSyDs-Iuuh0gh0FlpiKawN-EW_SkKSo_Za04",
  authDomain: "imez-language-web.firebaseapp.com",
  databaseURL: "https://imez-language-web.firebaseio.com",
  projectId: "imez-language-web",
  storageBucket: "imez-language-web.appspot.com",
  messagingSenderId: "331475222832"
};

let FBApp = firebase.initializeApp(fbConfig)
export const fbApp = FBApp

const database = FBApp.firestore()

const dbTableInfo = {
  language: {
    'service': 'imez-srv-lang',
    'partner': 'imez-ptn-lang'
  }
}

const initLangRowData = {
  category: '',
  division: '',
  code: '',
  korLang: '',
  engLang: '',
  jpLang: '',
  cnLang: ''
}

function makeLangItem(data) {
  return {
    category: data[0],
    division: data[1],
    code: data[2],
    korLang: data[3],
    engLang: data[4],
    jpLang: data[5],
    cnLang: data[6],
    createdAt: new Date()
  }
}

export const db = {
  language: {
    getRows (serviceId) {
      return database.collection(dbTableInfo.language[serviceId])
        .orderBy('category')
        .orderBy('division')
        .orderBy('code')
        .orderBy('createdAt')
    },
    addRow (serviceId, data) {
      const createdAt = new Date();
      data = data || initLangRowData;
      data.createdAt = createdAt;

      console.log('[LangTable] addRow: data', data);
      database.collection(dbTableInfo.language[serviceId]).add(data);
    },
    deleteRowById (serviceId, id) {
      // // Deleting collections from a Web client is not recommended.
      console.log('[LangTable] deleteRow: id', id);
      var result = confirm('삭제하시겠습니까?');
      if (result) {
        console.log('deleted');
        database.collection(dbTableInfo.language[serviceId]).doc(id).delete();
      }
    },
    deleteAllRows (serviceId, data) {
      /// Batch Thing //
      var tableRef = database.collection(dbTableInfo.language[serviceId]);
      var batch = database.batch();

      for (var i = 0; i < data.length; i++) {
        if (i === 0) { continue; }
        var id = makeLangItem(data[i]).id;
        let itemRef = tableRef.doc(id)
        batch.delete(itemRef);
      }

      return batch.commit()
        .then(data => {
          alert('삭제되었습니다.');
        })
        .catch(error => {
          console.log('there is an error')
        })
    },
    updateRowById (serviceId, id, data) {
      console.log('[LangTable] updateRow: id', id);
      console.log('[LangTable] updateRow: data', data);
      database.collection(dbTableInfo.language[serviceId]).doc(id).update(data)
        .then((result) => {
          alert('저장되었습니다.');
        });
    },
    addRowsByExcel (serviceId, data) {

      /// Batch Thing //
      var tableRef = database.collection(dbTableInfo.language[serviceId]);
      var batch = database.batch();

      for (var i = 0; i < data.length; i++) {
        if (i === 0) { continue; }
        var item = makeLangItem(data[i]);
        let itemRef = tableRef.doc()
        console.log('itemRef: ', itemRef);
        batch.set(itemRef, item);
      }

      // live cycle 고려하기
      return batch.commit()
        .then(data => {
          alert('저장되었습니다.');
        })
        .catch(error => {
          console.log('there is an error')
        })
    },
  }
}
