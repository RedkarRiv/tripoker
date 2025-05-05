<div className="h-full w-full md:max-w-[60vw] max-w-[95%] flex flex-col justify-center items-center  px-2">
  <div className="md:w-full md:h-[35rem] h-full w-full p-5 md:px-24 relative">
    {/*  <span
              onClick={() => setChatVisible((prev) => !prev)}
              className={`text-white px-2 rounded self-end md:self-auto mb-2 absolute cursor-pointer right-0 top-0  ${chatVisible ? 'bg-black' : 'bg-fontPrimaryColor'}`}
            >
              💬
            </span> */}
    <div className="w-full h-full bg-cyan-700 md:border-[2rem] border-[15px] border-amber-950 rounded-full relative flex flex-col xl:flex-row gap-2 md:gap-4 justify-center items-center">
      {[...Array(6)].map((_, i) => {
        const total = 6;
        const angleDeg = 90 + (i * 360) / total;
        const angleRad = (angleDeg * Math.PI) / 180;
        const radius = 60;
        const x = 50 + radius * Math.cos(angleRad);
        const y = 50 + radius * Math.sin(angleRad);
        const isPlayer = i == 0
        return (
          <div
            key={i}
            className={`absolute w-fit h-fit  ${i == 0 && 'pb-[5rem]'}  ${i == 3 && 'pt-[9rem]'}  `}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Hand posicionado con superposición */}
            <div
              id="hand"
              className="w-full h-full flex items-center  justify-between p-2 gap-2"
            >
              <div className=" md:h-full w-full flex flex-col md:flex-row gap-1 justify-around items-center relative">
                <div className="aspect-square h-12 bg-red-500 rounded-full absolute bottom-4 z-10"></div>
                <div className={`h-full md:min-w-[5rem] bg-black flex flex-col  ${isPlayer && 'bg-slate-600'} 
                        justify-around text-center  rounded-xl px-4 py-1 z-20`}>
                  <div className="text-white w-full max-w-[5rem] h-fit text-xs md:text-sm  leading-none truncate overflow-hidden whitespace-nowrap">AliasPla</div>
                  <div className="text-white w-full h-fit text-xs md:text-sm  px-2 leading-none">10000</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-fit h-fit flex flex-col gap-1">
        <div className="w-fit gap-1 h-fit flex md:gap-6 ">
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
          <div className="flex gap-1">
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
          </div>
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
        </div>
        <div className="w-fit gap-1 h-fit flex md:gap-6 ">
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
          <div className="flex gap-1">
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
          </div>
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
        </div>                <div className="w-fit gap-1 h-fit flex md:gap-6 ">
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
          <div className="flex gap-1">
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
            <div className={`${cardClass}`}></div>
          </div>
          {!isMobile &&
            <div className="flex gap-1">
              <div className={`${cardClass} bg-green-400`}></div>
              <div className={`${cardClass} bg-green-400`}></div>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
  <div className="flex md:gap-2 gap-1 h-fit w-full justify-center mt-10 md:mt-16">
    <div className="flex md:gap-2 bg-blue-400 gap-1 h-fit w-fit">
      <div className={`${handClass}`}></div>
      <div className={`${handClass}`}></div>
    </div>
    <div className="flex md:gap-2 bg-red-400 gap-1 h-fit w-fit">
      <div className={`${handClass}`}></div>
      <div className={`${handClass}`}></div>
    </div>
    <div className="flex md:gap-2 bg-green-400 gap-1 h-fit w-fit">
      <div className={`${handClass}`}></div>
      <div className={`${handClass}`}></div>
    </div>
  </div>
</div>
{/* CHAT */ }
{/*         <div id="chat" className={`min-w-64 md:w-1/4 w-full h-full px-2 rounded flex flex-col transition-all duration-500 ease-in-out ${!chatVisible && 'md:w-0 min-w-0 p-0 h-0'}`}>
          <div className="flex flex-col flex-1  bg-gray-200 rounded overflow-hidden">
            <div className="flex-1 overflow-y-auto max-h-[15dvh] md:max-h-full">
              {messages.map((msg, index) => {
                const isOwnMessage = msg.user === userName;
                return (
                  <div
                    key={index}
                    className={`py-1 px-2 my-1 rounded w-full break-words text-xs ${isOwnMessage
                      ? 'bg-blue-300 text-black self-end text-right'
                      : 'bg-gray-300 text-black self-start'
                      }`}
                  >
                    {!isOwnMessage && <strong className="block">{msg.user}:</strong>}
                    {msg.message}
                  </div>
                );
              })}
              <div ref={endOfMessagesRef} />
            </div>
          </div>
          {chatVisible &&
            <div className="md:h-32 flex justify-around items-center pt-2 relative ">
              <textarea
                type="text"
                name="message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message"
                className="h-full w-full text-xs text-start rounded p-2 resize-none"
              />
              <button onClick={handleSendMessage}
                className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer px-1 rounded text-white absolute right-0 bottom-0 mr-3 mb-3">➤</button>
            </div>
          }
        </div> */}