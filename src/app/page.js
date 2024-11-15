'use client'
import { useState } from "react";
import { Importer,ImporterField } from "react-csv-importer";
import {ethers,Contract} from 'ethers';                
import batchsendJson from "./batchsend.json";
const blockchainExplorerUrls = {
  "4202": "https://sepolia-blockscout.lisk.com/tx"
}
export default function Home() {
  const [payments, setPayments] = useState(undefined);
  const [sending,setSending] = useState(false);
  const [blockchainExplorer,setBlockchainExplorer] = useState(undefined);
  const [error, setError] = useState(false);
  const [transaction,setTransaction] = useState(false);

  const sendPayments = async () => {    
    //connect to metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner();
    const {chainId} = await provider.getNetwork();
    setBlockchainExplorer(blockchainExplorerUrls[chainId.toString()]);
    
    //show feedback to users
    setSending(true);

    //format the arguments for smart contracts functions
    const {recipients,amounts,total} = payments.reduce((acc, val) => {
      acc.recipients.push(val.recipients);
      acc.amounts.push(val.amount);
      acc.total += parseInt(val.amount);
      return acc;
    }, {recipients: [], amounts: [], total: 0})

    //send tx
    const batchsend =  new Contract(batchsendJson.address, batchsendJson.abi, signer);
    try {
      batchsend.send(recipients,amounts, {value: total});
      const txReceipt = await tx.wait();
      setTransaction(txReceipt.hash)
    }catch(e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <div className="container-fluid mt-5 d-flex justify-content-center">
      <div id="content" className="row">
        <div id="content-inner" className="col">
          <div className="text-center">
            <h1 id="title" className="fw-bold">MULTISEND</h1>
            <p id="sub-title" className="mt-4 fw-bold"><span>Send many payments <br />in just One transaction</span></p>
          </div>
          <Importer
          dataHandler={rows => setPayments(rows)}
          defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
          restartable={false} // optional, lets user choose to upload another file when import is complete
          >
          <ImporterField name="recipient" label="recipient" />
          <ImporterField name="amount" label="amount" />
          <ImporterField name="currency" label="currency"/>
      </Importer>
      <div className="text-center">
        <button
        className="btn- btn-primary mt-5"
        onClick={sendPayments}
        disabled = {sending || typeof payments === 'undefined'}>
          sendPayments
        </button>
      </div>
      {sending && <div className="alert alert-info mt-4 mb-0">Payments processing kindly wait till the transaction are mined</div>}
      {transaction && <div className="alert alert-success mt-4 mb-0">Congrats! payment sent at <a href={`${blockchainUrl}/${transaction}`} target="_blank">{`${transaction.substr(0, 20)}...`}</a> </div>}
      {error && <div className="alert alert-danger mt-4 mb-0"> Ooooh .. A slight problem occured and payments not send try again in the next few.</div>}
        </div>
      </div>
    </div>
  );
}
