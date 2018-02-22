const response=require('cfn-response');
const AWS=require('aws-sdk');

exports.handler=function(event, context){
  AWS.config.update({region:process.env.AWS_REGION});
  var ec2=new AWS.EC2();
  var availabilityZones=[];
  var params={DryRun:false,Filters:[{Name:'state',Values:['available']}]};

  ec2.describeAvailabilityZones(params,function(err, data){
    if(err){
      process.exit(1);
    } else {
      var newData=data.AvailabilityZones;
      for(let i=0;i<newData.length;i++){
        availabilityZones.push(newData[i].ZoneName);
        if(availabilityZones.length === newData.length){
          var resp={};
          resp.AZs=availabilityZones;
          response.send(event,context,response.SUCCESS,resp);
        }
      }
    }
  });
}
