import { Auth } from "aws-amplify";
// import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import sha256 from "js-sha256";
import { findAdminByPhoneNumber } from "./queriesHelper";
import keys from "../constants/keys";

export const signIn = async (phoneNumber) => {
  try {
    return await Auth.signIn({
      username: phoneNumber,
      password: keys.SIGN_UP_PASSWORD,
    });
  } catch (e) {
    console.log("Signing in failed:", e);
  }
};

export const removeAccount = async () => {
  try {
    await Auth.deleteUser();
  } catch (e) {
    console.log("RemoveUser: ", e);
  }
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (e) {
    console.log("Sign Out User: ", e);
    throw new Error(e.message);
  }
};

export const signUser = async (phoneNumber, dispatch) => {
  try {
    await signIn(phoneNumber);
    const profile = await findAdminByPhoneNumber(phoneNumber);
    if (profile) {
      await Auth.currentAuthenticatedUser({ bypassCache: true });
      dispatch({ type: "SET_PROFILE", payload: profile });
    } else {
      throw new Error();
    }
  } catch (e) {
    throw e;
  }
};

export const encryptConfirmationCode = (preEncryption) => {
  try {
    return sha256(preEncryption);
  } catch (e) {
    console.warn("error encrypting sign in: ", e);
    return null; // or handle the error in some way
  }
};

export const getGeneratedCode = async () => {
  return Math.floor(10000 + Math.random() * 90000);
};

export const sendConfirmationCode = async (phoneNumber, generatedCode) => {
  try {
    const message = "  הוא קוד האימות שלך";
    // const client = new SNSClient({
    //   region: "us-west-2",
    //   credentials: keys.AWS_SDK_CREDENTIALS,
    // });
    // const command = new PublishCommand({
    //   PhoneNumber: phoneNumber,
    //   Message: generatedCode + message,
    // });
    // await client.send(command);
    console.log("Imagine that I sent a confirmation message of: ");
    console.log(generatedCode + message);
  } catch (e) {
    console.warn("sending confirmation code failed: ", e);
    throw e;
  }
};
