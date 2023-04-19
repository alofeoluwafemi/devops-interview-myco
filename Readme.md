## Set up VPC with the following:

-   EC2 + EFS + Ubuntu (EC2-1)
-   EC2 + EFS + Ubuntu (EC2-2)
-   EC2 + EFS + Ubuntu (EC2-3)
-   Set up ELB (non-sticky) to redirect to servers EC2-{1|2}
-   Set up a security group and enable SSH (w/ SSH keys.pem file) on EC2 instances, whitelisted by IP address
-   Set up MongoDB (w/ authentication) on server EC2-3
-   Set up NodeJS / Express containers on servers EC2-{1|2}
-   Run simple NodeJS / Express app
-   Set up domain + SSL (self-signed), domain is managed by route 53
-   Write lambda {.js|.py} script to convert the 3 images from {.jpeg|.png} to WebP in the S3 bucket (not just the file name but the actual file type)
-  Create a VPC endpoint to read the S3 images from EC2-{1}, Implement, any of the method to save the cost of S3 usage for live data. 
- Configuring cross-origin resource sharing (CORS) on all the S3 bucket used

## Resource

- https://www.npmjs.com/package/cloudinary


## AWS Login

> Ask Interviewer 
