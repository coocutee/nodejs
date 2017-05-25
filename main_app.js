/**
 * Created by cookie on 2017-05-25.
 */

var express = require('express');
//express는 원래 사실 함수라서여! 이거를 실행하면 app을 리턴해준당.
// 저 윗줄이랑 밑에 얘는 뭐 그냥 원리가 있는게 아니라 만든사람이 이렇게 하라고 해서 하는거
var app = express();
app.locals.pretty = true;
//pug(구 jade)와 express를 연결해주는 코드입니당.
app.set('view engine','pug');

//views, 템플릿이 있는 디렉토리를 만들어준다.
app.set('views','./views');

//얘는 템플릿 엔진을 이용할거라서 res.sned 안쓰고! render로 대신함니다.
app.get('/template',function (req,res) {
    res.render('temp', {time:Date(), _title:'Jade'});
})

//정적 파일을 서비스하는 법! (디렉토리 이름 정해주기)
//정적 파일은 굳이 js파일을 껏다키지 않아도 수정사항이 바로 반영된당.
app.use(express.static('public'));

//얘가 3000번 포트를 바라보게 해줌.
app.listen(3000, function () {
    console.log('Connected 3000 port..');
});

app.get('/img',function (req,res) {
    res.send('hello img, <img src="/abc.jpg">');
})

// 어떠한 경로로 들어왔을때 어떤 것이 실행될 것인지!
//저런 get 같은 애를 router라고 부르고, 하는일은 routing!
app.get('/', function (req,res) {
    res.send('안녕하세오');
});

app.get('/login', function (req,res) {
    res.send('로그인해주세여~~');
});

app.get('/test',function (req,res) {
    res.send('<input type="text"> <button type="submit">꺅</button>' );
})

//이렇게 동적으로 만들면 껏다켯다 해야함...ㅠㅠ
//자동화툴들이 있긴 하지만 아직은 놉놉.
//근데 html파일에서는 계산이나 현재시간같은거 표현 못해서 불편한데 얘로하면 됨
app.get('/dynamic',function (req,res) {
    var lis ='';
    var time = Date();
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>'
    }

    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    
    Hello ! 저는 동적입니당~!
    <ul>
        ${lis}
    </ul>
    ${time}
    </body>
    </html>`;
    res.send(output);
})

