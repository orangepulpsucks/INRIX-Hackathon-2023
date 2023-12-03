import generateHash from "../../util/generateHash";

export async function inrixapi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.iq.inrix.com/auth/v1/appToken?appId=${process.env.INRIXIQ_APP_ID}&hashToken=${process.env.INRIXIQ_HASH_TOKEN}`,
    );
    const body = JSON.parse(await response.text());
    return body["result"]["token"];
  } catch (error) {
    return console.log("error", error);
  }
}

export function getMessage() {
  const helloFrom = {
    message: `Hello World!`,
    id: generateHash(),
  };

  return helloFrom;
}
