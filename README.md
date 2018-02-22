# cfsamplepkg

This project is an example of a multi-tier webapplication in AWS.  This wont work in your AWS account without some modifications to things like the ssl certificate and Route53 URL and Route53 configuration.

This project relies on the following chef-solo cookbooks which I am hosting in an S3 bucket

When built the application is attached to the URL http://message.customhousesystems.com this will redirect to HTTPS.


nginx cookbook -
https://s3-us-west-2.amazonaws.com/aogibvginf21/pkg-nginx.tar.gz

tomcat/java cookbook -
https://s3-us-west-2.amazonaws.com/aogibvginf21/pkg-tomcat.tar.gz

Reference-style:
![alt text][diagram]

[diagram]: https://github.com/azcoffeehabit/cfsamplepkg/blob/master/cfsamplepkg.png "Diagram"
