import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

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

const database = fbApp.database()

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

function makeLangItemFromExcel(data) {
  return {
    category: data[0],
    division: data[1],
    code: data[2],
    korLang: data[3],
    engLang: data[4],
    jpLang: data[5],
    cnLang: data[6],
    createdAt: new Date(),
    modifiedAt: new Date(),
    order: data[0] + '-' + data[1] + '-' + data[2]
  }
}

function makeLangItemFromData(data) {
  data.createdAt = data.createdAt || new Date();
  data.modifiedAt = new Date();
  data.order = data.category + '-' + data.division + '-' + data.code;
  return data;
}

export const db = {
  language: {
    getRows (serviceId, callback) {
      var query = database.ref(dbTableInfo.language[serviceId]).orderByChild('id')
      query.on('value', function (dataSnapshot) {
        var list = [];
        dataSnapshot.forEach(function(childSnapshot) {
          var obj = {};
          obj = childSnapshot.val();
          obj.key = childSnapshot.key;
          list.push(obj);
        });
        callback(list);
      });
    },
    addRow (serviceId, data) {

      var tableRef = database.ref(dbTableInfo.language[serviceId]);
      const createdAt = new Date();
      data = data || initLangRowData;
      data = makeLangItemFromData(data);
      console.log('[LangTable] addRow: data', data);

      tableRef.push(data);
    },
    deleteRowById (serviceId, key) {
      // // Deleting refs from a Web client is not recommended.
      console.log('[LangTable] deleteRow: key', key);
      
      var tableRef = database.ref(dbTableInfo.language[serviceId]);
      var result = confirm('삭제하시겠습니까?');

      if (result) {
        tableRef.child(key).remove(() => {
          alert('삭제되었습니다.');
        });
      }
    },
    copyRow (serviceId, data) {
      var copyData
      var emptyData = {
        code: '',
        korLang: '',
        engLang: '',
        jpLang: '',
        cnLang: ''
      }
      copyData = Object.assign({}, data, emptyData);
      this.addRow(serviceId, copyData);
    },
    updateRowById (serviceId, key, data) {
      
      console.log('[LangTable] updateRow: key', key);
      console.log('[LangTable] updateRow: data', data);
      
      var tableRef = database.ref(dbTableInfo.language[serviceId]);

      data = makeLangItemFromData(data);
      tableRef.child(key).set(data)
        .then((result) => {
          alert('저장되었습니다.');
        });
    },
    addRowsByExcel (serviceId, data) {

      /// Batch Thing //
      var tableRef = database.ref(dbTableInfo.language[serviceId]);

      tableRef.remove(function() {

        for (var i = 0; i < data.length; i++) {
          if (i === 0) { continue; }
          var item = makeLangItemFromExcel(data[i]);
          let itemRef = tableRef.push()
          console.log('itemRef: ', itemRef);
          itemRef.set(item);
        }

      });

    },
  }
}
