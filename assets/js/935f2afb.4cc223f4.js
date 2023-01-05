"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What\'s different about cyclic?","href":"/","docId":"index"},{"type":"link","label":"TLDR","href":"/quick-start","docId":"quick-start"},{"type":"category","label":"Overview","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Architecture","href":"/overview/architecture","docId":"overview/architecture"},{"type":"link","label":"Build","href":"/overview/build","docId":"overview/build"},{"type":"link","label":"Deploy","href":"/overview/deploy","docId":"overview/deploy"},{"type":"link","label":"Launch","href":"/overview/launch","docId":"overview/launch"},{"type":"link","label":"Limits","href":"/overview/limits","docId":"overview/limits"},{"type":"link","label":"Starters","href":"/overview/starters","docId":"overview/starters"}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Apps","href":"/concepts/apps","docId":"concepts/apps"},{"type":"link","label":"Auth","href":"/concepts/auth","docId":"concepts/auth"},{"type":"link","label":"Hosting","href":"/concepts/hosting","docId":"concepts/hosting"},{"type":"link","label":"Databases","href":"/concepts/database","docId":"concepts/database"},{"type":"link","label":"Variables","href":"/concepts/env_vars","docId":"concepts/env_vars"},{"type":"link","label":"Storage","href":"/concepts/storage","docId":"concepts/storage"},{"type":"link","label":"Transactions","href":"/concepts/transactions","docId":"concepts/transactions"}]},{"type":"category","label":"Serverless","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/serverless/overview","docId":"serverless/overview"},{"type":"link","label":"On-Demand","href":"/serverless/on-demand","docId":"serverless/on-demand"},{"type":"link","label":"Stateless","href":"/serverless/stateless","docId":"serverless/stateless"}]},{"type":"category","label":"How To","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Create \'Deploy to Cyclic\' button","href":"/how-to/create-deploy-to-cyclic-button","docId":"how-to/create-deploy-to-cyclic-button"},{"type":"link","label":"Using MongoDB","href":"/how-to/using-mongo-db","docId":"how-to/using-mongo-db"},{"type":"category","label":"Custom Domains","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/how-to/custom-domains/overview","docId":"how-to/custom-domains/overview"},{"type":"link","label":"Cloudflare","href":"/how-to/custom-domains/cloudflare","docId":"how-to/custom-domains/cloudflare"},{"type":"link","label":"GoDaddy","href":"/how-to/custom-domains/godaddy","docId":"how-to/custom-domains/godaddy"}]}]},{"type":"category","label":"Troubleshooting","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Main entry point does not exist","href":"/troubleshooting/main-entry-point-does-not-exist","docId":"troubleshooting/main-entry-point-does-not-exist"},{"type":"link","label":"Size limits","href":"/troubleshooting/no-space-left-on-device","docId":"troubleshooting/no-space-left-on-device"},{"type":"link","label":"Nodemon","href":"/troubleshooting/nodemon","docId":"troubleshooting/nodemon"},{"type":"link","label":"Websockets","href":"/troubleshooting/websockets","docId":"troubleshooting/websockets"}]},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Building a Bikes E-Commerce REST API using Express and AWS DynamoDB","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Getting Started with a RESTful API","href":"/tutorials/rest-api-and-dynamodb/part-1","docId":"tutorials/rest-api-and-dynamodb/part-1"},{"type":"link","label":"Creating routes to fetch and search data","href":"/tutorials/rest-api-and-dynamodb/part-2","docId":"tutorials/rest-api-and-dynamodb/part-2"},{"type":"link","label":"Creating routes to create and replace data","href":"/tutorials/rest-api-and-dynamodb/part-3","docId":"tutorials/rest-api-and-dynamodb/part-3"},{"type":"link","label":"Finishing up with routes to update and delete data","href":"/tutorials/rest-api-and-dynamodb/part-4","docId":"tutorials/rest-api-and-dynamodb/part-4"},{"type":"link","label":"Securing our database with authentication and Deploying our API to the web","href":"/tutorials/rest-api-and-dynamodb/part-5","docId":"tutorials/rest-api-and-dynamodb/part-5"}]}]}]},"docs":{"concepts/apps":{"id":"concepts/apps","title":"Apps","description":"Cyclic apps are a combination of code from a git repository and serverless cloud infrastructure. Each app is a stack like:","sidebar":"tutorialSidebar"},"concepts/auth":{"id":"concepts/auth","title":"Auth","description":"Cyclic allows you to add authentication to secure parts of your api with a simple toggle. When Auth is turned on, requests are validated at the runtime layer before they are passed off to your application code.","sidebar":"tutorialSidebar"},"concepts/database":{"id":"concepts/database","title":"Databases","description":"Apps have access to a pre-configured AWS DynamoDB Table. External databases can be integrated by setting their connection strings as environment variables.","sidebar":"tutorialSidebar"},"concepts/env_vars":{"id":"concepts/env_vars","title":"Variables","description":"Environment variables are key-value pairs defined to match a specific application environment (local, dev, prod, etc.). Often they contain","sidebar":"tutorialSidebar"},"concepts/hosting":{"id":"concepts/hosting","title":"Hosting","description":"We describe hosting in terms of where the underlying app infrastructure is hosted. While the application code is executed on AWS Lambda compute, the Lambdas themselves can be hosted in any AWS cloud account, ours or yours.","sidebar":"tutorialSidebar"},"concepts/storage":{"id":"concepts/storage","title":"Storage","description":"Cyclic provides object storage backed by AWS S3. Each app is provisioned with an S3 bucket and allowed read/write access. Any AWS S3 compatible client will work.","sidebar":"tutorialSidebar"},"concepts/transactions":{"id":"concepts/transactions","title":"Transactions","description":"We think of a transaction as an encapsulation of events that compose a single unit of service for a web application.","sidebar":"tutorialSidebar"},"how-to/create-deploy-to-cyclic-button":{"id":"how-to/create-deploy-to-cyclic-button","title":"Create \'Deploy to Cyclic\' button","description":"Follow these steps to create a button that will allow users to fork your repo and deploy to Cyclic in one action.","sidebar":"tutorialSidebar"},"how-to/custom-domains/cloudflare":{"id":"how-to/custom-domains/cloudflare","title":"Cloudflare","description":"Cloudflare is a popular free DNS service that can be used to directly to create a CNAME apex record with their rewriting feature.","sidebar":"tutorialSidebar"},"how-to/custom-domains/godaddy":{"id":"how-to/custom-domains/godaddy","title":"GoDaddy","description":"Assuming you own example.com, registered with GoDaddy:","sidebar":"tutorialSidebar"},"how-to/custom-domains/overview":{"id":"how-to/custom-domains/overview","title":"Overview","description":"Cyclic apps are given random subdomain names at first deployment. The general structure of a name is -","sidebar":"tutorialSidebar"},"how-to/using-mongo-db":{"id":"how-to/using-mongo-db","title":"Using MongoDB","description":"Atlas Configuration","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"What\'s different about cyclic?","description":"There are no servers, no containers, no images, no hours to count. Each app is deployed entirely on serverless cloud infrastructure.","sidebar":"tutorialSidebar"},"overview/architecture":{"id":"overview/architecture","title":"Architecture","description":"Cyclic apps are built and deployed into AWS. We pre-provision a serverless app using cloudformation.","sidebar":"tutorialSidebar"},"overview/build":{"id":"overview/build","title":"Build","description":"Cyclic apps are built and deployed into AWS from code that originates in Github.","sidebar":"tutorialSidebar"},"overview/deploy":{"id":"overview/deploy","title":"Deploy","description":"We pre-provision AWS serverless infrastructure to make every deployment, even the first, super fast. This means we are able to deploy in seconds. Usually about 6 seconds for apps with a few dependencies. It can take longer if your app has a long build step (nextjs for example).","sidebar":"tutorialSidebar"},"overview/launch":{"id":"overview/launch","title":"Launch","description":"Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches.","sidebar":"tutorialSidebar"},"overview/limits":{"id":"overview/limits","title":"Limits","description":"Cyclic apps have limits on capacity and usage. Some of these are inherited from the underlying hosting implementation and some are to protect the quality and stability of the service for all users.","sidebar":"tutorialSidebar"},"overview/starters":{"id":"overview/starters","title":"Starters","description":"Cyclic provides a range of projects as starters. These can be used to get started quickly or can be used at reference implementations to see how a particular framework can be deployed effectively on Cyclic.","sidebar":"tutorialSidebar"},"quick-start":{"id":"quick-start","title":"TLDR","description":"Quick start example","sidebar":"tutorialSidebar"},"serverless/on-demand":{"id":"serverless/on-demand","title":"On-Demand","description":"Serverless means applications are only on for the time it takes to process individual requests. They are suspended immediately after each response is sent.","sidebar":"tutorialSidebar"},"serverless/overview":{"id":"serverless/overview","title":"Overview","description":"Cyclic apps are serverless, this gives apps the ability to scale up to handle a huge volume of traffic or scale down to zero when there is no traffic. Scaling up and down happens very quickly (~0.2 seconds). This ability to scale down to zero is what allows us to offer many free features that make cyclic different.","sidebar":"tutorialSidebar"},"serverless/stateless":{"id":"serverless/stateless","title":"Stateless","description":"Cyclic apps run on read-only file systems amd do not retain or share memory across compute instances.","sidebar":"tutorialSidebar"},"troubleshooting/main-entry-point-does-not-exist":{"id":"troubleshooting/main-entry-point-does-not-exist","title":"Main entry point does not exist","description":"If you get an error in the deploy log that says that your package.json points to a file that does not exist, here is how to fix it.","sidebar":"tutorialSidebar"},"troubleshooting/no-space-left-on-device":{"id":"troubleshooting/no-space-left-on-device","title":"Size limits","description":"Cyclic builds and deploys apps using serverless technologies. The build environment has 10 GB of space to use to install your dependencies and devDependencies, then build your code bundle.","sidebar":"tutorialSidebar"},"troubleshooting/nodemon":{"id":"troubleshooting/nodemon","title":"Nodemon","description":"Error message","sidebar":"tutorialSidebar"},"troubleshooting/websockets":{"id":"troubleshooting/websockets","title":"Websockets","description":"Websockets are currently not supported in Cyclic apps.","sidebar":"tutorialSidebar"},"tutorials/rest-api-and-dynamodb/part-1":{"id":"tutorials/rest-api-and-dynamodb/part-1","title":"Getting Started with a RESTful API","description":"This five-part series will show you how to build an API from the ground-up using Node\'s Express and AWS DynamoDB.","sidebar":"tutorialSidebar"},"tutorials/rest-api-and-dynamodb/part-2":{"id":"tutorials/rest-api-and-dynamodb/part-2","title":"Creating routes to fetch and search data","description":"With our database full with data, it\'s time to build a RESTful API that allows us to fetch that data in four different ways:","sidebar":"tutorialSidebar"},"tutorials/rest-api-and-dynamodb/part-3":{"id":"tutorials/rest-api-and-dynamodb/part-3","title":"Creating routes to create and replace data","description":"Our API is now given the ability to fetch data in a variety of ways, but it wouldn\'t be complete if we weren\'t able to create and replace new and existing items.","sidebar":"tutorialSidebar"},"tutorials/rest-api-and-dynamodb/part-4":{"id":"tutorials/rest-api-and-dynamodb/part-4","title":"Finishing up with routes to update and delete data","description":"We\'re almost done; but we still must implement two more route handlers: PATCH and DELETE.","sidebar":"tutorialSidebar"},"tutorials/rest-api-and-dynamodb/part-5":{"id":"tutorials/rest-api-and-dynamodb/part-5","title":"Securing our database with authentication and Deploying our API to the web","description":"Securing our database with authentication","sidebar":"tutorialSidebar"}}}')}}]);