import React, { useState } from 'react';
import Page from 'src/components/Page';
import { useWeb3React } from '@web3-react/core';
import { Formik } from 'formik';
import * as yep from 'yup';
import DeployABI from 'src/abis/DeployABI';
import Web3 from 'web3';
import { deployData } from 'src/constants/index';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';
import { addImageHandler } from 'src/utils';
import { useHistory } from 'react-router-dom';

export default function History() {
  const token = window.sessionStorage.getItem('token');
  const history = useHistory();
  const { active, account, chainId, library } = useWeb3React();
  const [imageBlob, setImageBlob] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('SUBMIT');
  const [collectionImg, setCollectionImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const web3 = (window.web3 = new Web3(window.ethereum));

  var nfttokenContract = new web3.eth.Contract(DeployABI);
  console.log('nfttokenContract', nfttokenContract);

  const SubmitHandler = async (values) => {
    setErrorMsg('');
    setSuccessMsg('');

    const formData = new FormData();
    formData.append('file', collectionImg);

    setIsLoading(true);
    setTransactionStatus('Loading...');
    await addImageHandler(collectionImg)
      .then((res) => {
        uploadContractHandler(values, res);
      })
      .catch((err) => {
        setErrorMsg('Failed, Please try again!');
        setIsLoading(false);
        setTransactionStatus('Submit');
        console.log('err', err);
      });
  };

  const uploadContractHandler = async (values, baseURI) => {
    setTransactionStatus('Deploying...');
    await nfttokenContract
      .deploy({
        data: deployData,
        arguments: [values.name, values.symbol, baseURI],
      })
      .send(
        {
          from: account,
          gas: '4700000',
        },
        function (e, contract) {
          console.log('------', e, contract);
          if (
            contract &&
            contract.address &&
            typeof contract.address !== 'undefined'
          ) {
            console.log(
              'Contract mined! address: ' +
                contract.address +
                ' transactionHash: ' +
                contract.transactionHash
            );
          }
        }
      )
      .on('error', function (error) {
        console.log('ERROR', error);
        setErrorMsg(error.message);
        setIsLoading(false);
        setTransactionStatus('Submit');
      })
      .on('transactionHash', function (transactionHash) {
        console.log('transactionHash', transactionHash);
      })
      .on('receipt', function (receipt) {
        console.log(receipt.contractAddress);
        createCollectionhanlder(values, baseURI, receipt.contractAddress);
      })
      .catch((error) => {
        console.log('ERROR', error);
        setErrorMsg(error.message);
        setIsLoading(false);
        setTransactionStatus('Submit');
      });
  };

  const createCollectionhanlder = async (values, baseURI, contractAddress) => {
    const formData = new FormData();
    formData.append('contractAddress', contractAddress);

    formData.append('name', values.name);
    formData.append('symbol', values.symbol);
    formData.append('baseURI', baseURI);
    setTransactionStatus('Submitting...');

    await axios({
      method: 'post',
      url: apiConfig.createCollection,
      data: formData,
      headers: {
        token,
      },
    })
      .then(async (res) => {
        if (res.data.response_code === 200) {
          setTransactionStatus('Submit');
          setIsLoading(false);
          setSuccessMsg(res.data.response_message);
          setTimeout(() => {
            history.push('/my-collection');
          }, 1500);
        } else {
          setErrorMsg(res.data.response_message);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setTransactionStatus('Submit');
        setErrorMsg(error.message);
        console.log('err', error);
      });
  };

  const _onPicChange = (e) => {
    setCollectionImg(e.target.files[0]);
    const value = URL.createObjectURL(e.target.files[0]);
    setImageBlob(value);
  };

  return (
    <Page title="NFT More">
      <>
        <section className="mt-5 mb-5">
          <div className="container-1440">
            <div className="wallet-div text-center">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-12">
                  <div className="" style={{ height: '', padding: '0px 25px' }}>
                    <h2 className="mb-3">Create Collection</h2>
                    <Formik
                      initialValues={{
                        name: '',
                        symbol: '',
                        image: '',
                      }}
                      initialStatus={{
                        success: false,
                        successMsg: '',
                      }}
                      validationSchema={yep.object().shape({
                        name: yep.string().required('Please enter name'),
                        symbol: yep.string().required('Please enter symbol'),
                      })}
                      onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting, resetForm }
                      ) => {
                        if (imageBlob === '') {
                          setErrors({
                            image: 'Please select image',
                          });
                        }

                        if (imageBlob !== '') {
                          await SubmitHandler(values);
                          // setCollectionImg();
                          // setImageBlob();
                          // resetForm();
                        }
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        touched,
                        values,
                        setFieldValue,
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>
                          <div className="container place-bid text-left">
                            <div className="row">
                              <div className="col-md-6 col-xm-12">
                                <p>Name</p>
                                <input
                                  className=""
                                  style={{ width: '100%' }}
                                  type="text"
                                  name="name"
                                  autoComplete="off"
                                  placeholder=""
                                  value={values.name}
                                  error={Boolean(touched.name && errors.name)}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <p className="error">
                                  {touched.name && errors.name}
                                </p>
                              </div>
                              <div className="col-md-6 col-xm-12">
                                <p>Symbol</p>
                                <input
                                  className=""
                                  style={{
                                    width: '100%',
                                    background: '#494949',
                                  }}
                                  type="text"
                                  name="symbol"
                                  autoComplete="off"
                                  placeholder=""
                                  value={values.symbol}
                                  error={Boolean(
                                    touched.symbol && errors.symbol
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <p className="error">
                                  {touched.symbol && errors.symbol}
                                </p>
                              </div>
                              <div className="col-md-12 col-xm-12">
                                <p>Image</p>
                                <input
                                  className=""
                                  type="file"
                                  onChange={(e) => _onPicChange(e)}
                                  style={{ width: '100%' }}
                                  name="image"
                                  autoComplete="off"
                                  placeholder=""
                                />
                                <p className="error">{errors.image}</p>
                              </div>

                              {/* <p>Base URI</p>
                                <input
                                  className=""
                                  style={{
                                    width: '100%',
                                    background: '#494949',
                                  }}
                                  type="text"
                                  name="baseURI"
                                  autoComplete="off"
                                  placeholder=""
                                  value={values.baseURI}
                                  error={Boolean(
                                    touched.baseURI && errors.baseURI
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <p className="error">
                                  {touched.baseURI && errors.baseURI}
                                </p> */}
                            </div>
                            <div className="col-md-12 col-xm-12">
                              <img width="150" src={imageBlob} alt="" />
                            </div>

                            <div className="row text-center mt-2">
                              <div className="col-md-12 col-xm-12">
                                {errorMsg && (
                                  <p style={{ color: 'red' }}>{errorMsg}</p>
                                )}
                                {successMsg && (
                                  <p style={{ color: 'green' }}>{successMsg}</p>
                                )}
                              </div>
                            </div>

                            <div className="row text-center mt-4">
                              <div className="col-md-12 col-xm-12">
                                <button disabled={isLoading} className="btn btn-green">
                                  {transactionStatus}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>

                    {/* <p>
                      Create collections (your own storefrons), upload digital
                      creations, configurate your royalty, and sell NFTs to your
                      fans - all for free! You can also manage smart contracts
                      that you create outside NFTmx.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </>
    </Page>
  );
}
