let sceneEl = document.querySelector('a-scene');
let count = 0
fetch('https://raw.githubusercontent.com/XanxusX/polis-uber/master/polis-uber.json').then(response => {
  response.json().then(function (data) {
    let user = {};
    let userdata = data;
    let pca = JSON.parse(data.pca);
    let base = pca['base-clusters'];
    user = userdata.famous
    for (let i in user) {
      count++
      let index = _.indexOf(base.id, user[i].bid);
      let x = base.x[index]
      let y = base.y[index]
      user[i].x = x
      user[i].y = y
      let entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', { x: x, y:0, z: y });
      //entityEl.setAttribute('geometry', {height:5,width:5,depth:5});
      if (user[i]['fb__fb_link'] !== null) {
        entityEl.setAttribute('src', user[i].facebook['fb_picture'].replace('width=40','width=500').replace('height=40','height=500'))
      } else {
        entityEl.setAttribute('src', 'https://avatars.pdis.nat.gov.tw/twitter/' + user[i].twitter['screen_name'] + '/audreyt?size=large')
      }
      sceneEl.appendChild(entityEl);
      /*    var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('geometry', {
            primitive: 'box',
            height: 1,
            width: 1,
            depth: 1
          });
          entityEl.setAttribute('position', { x: x * 2, y: 0, z: y * 2 });
          if (user[i]['fb__fb_link'] !== null) {
            console.log(1)
            entityEl.setAttribute('src', image['src'])
          } else {
             console.log(2)
            entityEl.setAttribute('src', user[i].twitter['profile_image_url_https'])
          }
          sceneEl.appendChild(entityEl);*/

      /* var entityEl = document.createElement('a-image');
       if (user[i]['fb__fb_link'] !== null) {
       entityEl.setAttribute('src',user[i].facebook['fb_picture'])
       } else {
 entityEl.setAttribute('src',user[i].twitter['profile_image_url_https'])
       }
       sceneEl.appendChild(entityEl);*/
    }
  })
}).catch(function (err) {
})
