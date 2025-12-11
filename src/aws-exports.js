const awsconfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_AVTZl8uMW",
      userPoolClientId: "1t5oueq2eq5r58vptnaoi0lqj4",
      identityPoolId: "us-east-1:549eef08-76dd-4c61-bf6c-65dae8828830",
      region: "us-east-1",
      signUpVerificationMethod: "code",
      loginWith: ["email"], // ✅ only email login allowed
    },
  },
  API: {
    REST: {
      apib813d29c: {
        endpoint: "https://jhlve2m3mb.execute-api.us-east-1.amazonaws.com/dev",
        region: "us-east-1",
      },
    },
  },
};

export default awsconfig;
