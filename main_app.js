/**
 * Created by cookie on 2017-05-25.
 */

var express = require('express');
//express는 원래 사실 함수라서여! 이거를 실행하면 app을 리턴해준당.
// 저 윗줄이랑 밑에 얘는 뭐 그냥 원리가 있는게 아니라 만든사람이 이렇게 하라고 해서 하는거
var app = express();


//얘가 3000번 포트를 바라보게 해줌.
app.listen(3000, function () {
    console.log('Connected 3000 port..');
});

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

