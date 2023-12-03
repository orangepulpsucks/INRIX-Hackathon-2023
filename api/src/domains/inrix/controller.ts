import generateHash from "../../util/generateHash";

export async function inrixapi() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch("https://api.iq.inrix.com/auth/v1/appToken?appId=rx234ow9q7&hashToken=cngyMzRvdzlxN3w1bXFiR2F0aDF0YVpWVWNoZzdhVlE5bmpEOUlRMXlQM2FlcXNxWTUx")
        .then(response => response.text())
        .then(result => { return result })
        .catch(error => console.log('error', error));

    return response;
}

export function getMessage() {
    const helloFrom = {
      message: `Hello World!`,
      id: generateHash(),
    };
  
    return helloFrom;
  }
  