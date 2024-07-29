
function Home() {

  return (
    <>
      <div className="sm:ml-64">
            <div className="mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow text-2xl font-bold text-center md:max-w-xl">
              <div className="flex flex-col justify-between p-2 leading-normal">
              <h1 className="animate-typing overflow-hidden m-1 font-bold">Getting Started</h1>
            </div>
          </div>
         <div  className="mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-3 font-bold">Create a Short Link in One Click.</h1>
              <p className="text-sm">Sharing long URLs can be cumbersome, especially on social media or in other contexts where concise links are preferred. Our one-click short link creator makes it easy to convert lengthy URLs into compact, shareable links.</p>
            </div>
          </div>
        <div  className="mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-3 font-bold">Get downloadable QR code for each of your links.</h1>
              <p className="text-sm">For each shortened link, get a downloadable QR code and save for later sharing. Save time and enjoy the go</p>
            </div>
          </div>
          <div  className="mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-3 font-bold">Manage your links and make them awesome and attractive!!!</h1>
              <p className="text-sm">Manage and make your link look exactly the way you want, modify the name, edit the title and many more to discover</p>
            </div>
          </div>
          <div  className="mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-2 font-bold">Analyse and see how far your link has gone around the world.</h1>
              <p className="text-sm">See how many people accessed your link, where they were accessed, the highest day the link was accessed and others</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home