const API_URL = "http://192.168.1.89/Web/book";
const ENTRY_URL = "http://kyy.sh928.com/interface/book.php";
export default {
    getSwiper () {
        return natives.fetch({
          url:`${API_URL}/GetBookBanner`,
          method: 'GET'
        }).then(res => {
          return res.data
        })
      },
    getListWrap () {
          return natives.fetch({
            url:`${API_URL}/getFeaturedData`,
            method: 'GET'
          }).then(res => {
              return res.data
          })
      },
    getToplist (id) {
        return natives.fetch({
          url:`${API_URL}/GetTopBooklist`,
          method:'GET',
          data:{
            typeid:id
          }
        }).then(res => {
          return res.data
        })
    },
    getSwiperbook (){
      return natives.fetch({
        url:`${ENTRY_URL}?msg=bookbanner`,
        method:'GET'
      }).then(res=>{
        return res.data
      })
    },
    getBooklist () {
      return natives.fetch({
        url:`${ENTRY_URL}?msg=booklist`,
        method:'GET'
      }).then(res=>{
        return res.data
      })
    },
    getFreebook() {
      return natives.fetch({
        url:`${ENTRY_URL}?msg=freebook`,
        method:'GET'
      }).then(res=>{
        return res.data
      })
    },
    getRecentbook() {
      return natives.fetch({
        url:`${ENTRY_URL}?msg=recentbook`,
        method:'GET'
      }).then(res=>{
        return res.data
      })
    },
    getBookitem (bookid) {
      return natives.fetch({
        url:`${ENTRY_URL}?msg=bookitem`,
        method:'GET',
        data:{
          id:bookid
        }
      }).then(res=>{
        return res.data
      })
    },
    getRead(id,contentid) {
      return natives.fetch({
        url:`${ENTRY_URL}?msg=bookcontent`,
        method:'GET',
        data:{
          id,
          contentid
        }
      }).then(res=>{
        return res.data;
      })
    },
    getweiboInfo(uid,access_token) {
      return natives.fetch({
        url:"https://api.weibo.com/2/eps/user/info.json",
        method:'GET',
        data:{
          uid,
          access_token
        }
      }).then(res => {
        return res.data
      })
    }
}

