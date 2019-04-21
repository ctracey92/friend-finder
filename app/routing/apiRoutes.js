var friends = require("../data/friends.js")


module.exports = function(app){
    app.get("/api/friends",function (req,res){
    res.json(friends);
    });

    app.post("/api/friends",function(req,res){
        var friendsArr = friends;
        var scoresComp = [];
        friends.push(req.body);
        for(var i = 0; i < (friendsArr.length - 1); i++){
            var difference = 0;
            for(var a = 0; a < 10; a++){
            var userNum = parseInt(req.body.scores[a])
            var friendNum = parseInt(friendsArr[i].scores[a])
            difference+= Math.abs(userNum - friendNum);
            }
            scoresComp.push(difference);

            console.log(friendsArr[i].scores,i,friendsArr[i].name)
        }
        for(var d = 0; d<scoresComp.length; d++){
            if (scoresComp[d] === Math.min(...scoresComp))[
                console.log(friendsArr[d],"THIS IS YOUR NEW FRIEND")
            ]
        }
        console.log(scoresComp,"SCORES");
    })
}

