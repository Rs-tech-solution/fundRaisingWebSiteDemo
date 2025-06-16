const appConstant = {
  environment: process.env.NEXT_PUBLIC_environment,
  baseUrl: process.env.NEXT_PUBLIC_baseUrl,
  hostUrl: process.env.NEXT_PUBLIC_hostUrl,
  version: process.env.NEXT_PUBLIC_version,
  firebaseApiKey: process.env.NEXT_PUBLIC_Firebase_apiKey,
  firebaseAuthDomain: process.env.NEXT_PUBLIC_Firebase_authDomain,
  firebaseProjectId: process.env.NEXT_PUBLIC_Firebase_projectId,
  firebaseStorageBucket: process.env.NEXT_PUBLIC_Firebase_storageBucket,
  firebaseMessagingSenderId: process.env.NEXT_PUBLIC_Firebase_messagingSenderId,
  firebaseAppId: process.env.NEXT_PUBLIC_Firebase_appId,
};

export default appConstant;
