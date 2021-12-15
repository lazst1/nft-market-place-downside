import apiConfig from 'src/config/ApiConfig';
import { Contract } from '@ethersproject/contracts';
import axios from 'axios';

export function sortAddress(add) {
  const sortAdd = `${add.slice(0, 6)}...${add.slice(add.length - 4)}`;
  return sortAdd;
}

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export function getContract(address, ABI, library, account) {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
}

export const addImageHandler = (img) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', img);
    axios({
      method: 'post',
      url: apiConfig.addImage,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        if (res.data.response_code === 200) {
          resolve(res.data.result.imageUrl);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
        reject(false);
      });
  });
};
