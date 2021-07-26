const db = require('../config/sequelize');
const Word = db.words;;
var utilityService = require('../services/Utility.services');

exports.callpyscriptandinsertdb = async (req, res) => {
    var spawn = require("child_process").spawn;
    // Parameters passed in spawn -
    // 1. type_of_script
    // 2. list containing Path of the script
    //    and arguments for the script 

    var process = spawn('python',["./oddnum.py"]);
    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
         let finalResult=[]
         let result = JSON.parse(data);
         if(result.data){
            const start = async () => {
            await utilityService.asyncForEach(result.data, async(item) => {
                  var res = await Word.create({letter:item,type: typeof item}) 
            } )}
            start();
            return res.status(200).json({"data":result.data,"msg":"data updated successfully!","success": true,"error":false});  
         }else{
            return res.status(400).json({"errorMsg":"No data returned from script!","success": false,"error":true});
         }
    })
}