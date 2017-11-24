var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1547701408,
  channelSecret: 2437969ec3fbedc605450a9ad56ea2d9,
  channelAccessToken: yBcnxxZFRZNfsdSb5fKPK3aj2ZSRaOL4jN6eMvbwjZ7SS7UGH+lz9mzOAfJQxGBqHxad8mNlmOpa+k/bcrvhsBXZMEeF7p3KuKCowhiScup5/M8vO+j9ja3nPgnllwIh0XbyHH5GvaGvP+rVov86tQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
