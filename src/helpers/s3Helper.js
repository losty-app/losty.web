import { Storage } from "aws-amplify";
import Compressor from "compressorjs";

const getFileFromS3 = async (key) => {
  try {
    return await Storage.get(key);
  } catch (error) {
    console.error("Error fetching file from S3:", error);
    return null;
  }
};

const getImageFromS3 = async (key) => {
  try {
    const imageURL = await Storage.get(key);
    return imageURL;
  } catch (error) {
    return "";
  }
};

const compressFile = async (file, compressionRate) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: compressionRate,
      success(result) {
        resolve(result);
      },
      error(error) {
        console.log("Error compressing file data:", error);
        reject(file); // Return original data if compression fails
      },
    });
  });
};

const uploadFileToS3Bucket = async (
  file,
  isCompressed = true,
  compressionRate = 0.4
) => {
  try {
    if (!file) {
      throw new Error("No file provided for upload");
    }
    let newFile;
    if (isCompressed) {
      newFile = await compressFile(file, compressionRate);
    } else {
      newFile = file;
    }
    const uniqueFileName = generateUniqueFileName(newFile);
    await Storage.put(uniqueFileName, newFile);
    return uniqueFileName;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};

const generateUniqueFileName = (file) => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = file.name.split(".").pop();
  return `${timestamp}-${randomString}.${extension}`;
};

export { getFileFromS3, uploadFileToS3Bucket, getImageFromS3 };
