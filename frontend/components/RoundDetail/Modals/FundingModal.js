const FundingModal = (props) => {

    return (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none py-5" onClick={() => {props.close()}}
        >
          <div className="relative w-auto my-6 mx-auto max-w-full max-h-screen my-5 mx-5 py-5">
            <div className="border rounded-2xl shadow-lg relative bg-white flex flex-col w-full outline-none focus:outline-none" onClick={e => {e.stopPropagation();}}>
              <div className="relative px-20 py-8 flex-auto mx-auto text-center text-xl">
                <h2 className="font-bold text-3xl my-4 text-blue-600">Funding Information</h2>
                <div className="flex flex-col">
                <text>This round is funded by Optimism&apos;s donation of $1 million of Optimism Network Fees</text>
                <a href={'https://medium.com/ethereum-optimism/retropgf-experiment-1-1-million-dollars-for-public-goods-f7e455cbdca'} target="_blank" rel="noreferrer" className="mt-4 text-blue-500 hover:text-blue-700">
                    Article
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };

  export default FundingModal;
