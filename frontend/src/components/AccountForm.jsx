import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountForm = () => {
  const { t } = useTranslation('accountForm')

  return (
    <section className="bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 md:pt-4 pt-12 md:mx-auto md:mt-6 bg-tertiaryColor text-white md:rounded-xl">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="username">Username</label>
                    <input type="text" id="username" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">Email address</label>
                    <input type="email" id="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" readOnly />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Contact Information</h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="address">Address</label>
                    <input type="text" id="address" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">City</label>
                    <input type="text" id="city" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="country">Country</label>
                    <input type="text" id="country" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" readOnly />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="postalCode">Postal Code</label>
                    <input type="text" id="postalCode" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-tertiaryColorHover rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" readOnly />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountForm