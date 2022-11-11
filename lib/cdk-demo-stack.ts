import * as cdk from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'MainVpc', {
      maxAzs: 2,
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'public-subnet',
        subnetType: SubnetType.PUBLIC
      }]
    })
  }
}
