const HackerRank = require('hackerrank-node-wrapper');

const hr = new HackerRank('your hackerrank api key');

hr.getLanguages((error, response) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
 
});

const data = { 
  source: 'print "Hello World"',
  lang: 5,
  testcases: '["Hello World"]'
};


module.exports.fun=function(data,cmd,res)
{
  var result;
hr.run(data, (error, response) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    var data=JSON.parse(response.body);
    result='{"compilemsg":';
    console.log(response.body);
    console.log(data.result.compilemessage);
    if(data.result.compilemessage=="")
    {
      result=result+'"Compiled sucessfully"';
      if(cmd=="run")
      {
      result=result+',"runmsg":"'+encode(data.result.stdout[0])+'"';
    }
    }
    else
    {
      result=result+'"'+encode(data.result.compilemessage)+'"';
    }
   result=result+"}";
 
  console.log(result);

  res.send(result);
 
  }
});

}
function encode(str)
{

  return str
    .replace(/[\\]/g, '\\\\')
    .replace(/[\"]/g, '\\\"')
    .replace(/[\/]/g, '\\/')
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t');

}

