
function CreateLink() {
  return (
    <>
      <div className="flex justify-center">
        <form className="w-full  sm:ml-64 pl-6 items-center">
          <h1 className="text-3xl font-bold pt-12 pb-8">Create a new link</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 pb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left pb-2">
                Enter long link (URL)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="link"
                placeholder="Enter long link"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 pb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left pb-2">
                Enter link title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="link"
                placeholder=""
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 pb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left pb-2">
        Link Domain
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="PackIt.gis/" disabled></input>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left pb-2">
        Edit Back-Half
      </label>

      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Edit Back-Half"></input>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

      <button className=" appearance-none block w-full bg-gray-400 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-gray-500 transition-colors duration-300" type="button">
      Cancel
    </button>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <button className=" appearance-none block w-full bg-blue-500 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-blue-600 transition-colors duration-300" type="button">
      Create
    </button>
    </div>
  </div>
</form>
</div>
    </>
  );
}

export default CreateLink