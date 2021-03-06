var request = require("request");
var helpers = require("../helpers/helpers.js");

module.exports = {
    pwgenCommand: function(bot, args, receivedMessage) {
        if (args.length > 0) {
            helpers.noArgumentsUsedExample(bot, receivedMessage, "!pwgen");
        } else if (args.length == 0) {
            request.get({
                url:     "https://faas.jamesmcdermott.ie/function/pwgen",
            }, 
            function(error, response, body) {
                receivedMessage.author.send(Utils.embed(bot, "Generated Password: " + body));
            });
        }
    }
};
