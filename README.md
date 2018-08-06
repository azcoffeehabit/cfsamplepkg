# cfsamplepkg

This project is an example of a multi-tier webapplication in AWS.  This will NOT work in your AWS account without some modifications to things like the ssl certificate and Route53 URL and Route53 configurations.

This project relies on the following chef-solo cookbooks which I am hosting in an S3 bucket


nginx cookbook -
https://s3-us-west-2.amazonaws.com/aogibvginf21/pkg-nginx.tar.gz

tomcat/java cookbook -
https://s3-us-west-2.amazonaws.com/aogibvginf21/pkg-tomcat.tar.gz

kafka cookbook -
https://s3-us-west-2.amazonaws.com/aogibvginf21/pkg-kafka.tar.gz

Reference-style:
![alt text][diagram]

[diagram]: https://github.com/azcoffeehabit/cfsamplepkg/blob/master/cfsamplepkg.png "Diagram"
